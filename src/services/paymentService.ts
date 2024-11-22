import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

interface PaymentResponse {
  success: boolean;
  message: string;
  transactionId?: string;
}

class PaymentService {
  private stripe: Promise<any>;

  constructor() {
    this.stripe = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || '');
  }

  // Process card payment with Stripe
  async processCardPayment(amount: number, currency: string): Promise<PaymentResponse> {
    try {
      const stripe = await this.stripe;
      
      // Create payment intent
      const response = await axios.post('/api/create-payment-intent', {
        amount,
        currency
      });

      const { clientSecret } = response.data;

      // Confirm payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement('card'),
          billing_details: {
            // Add billing details here
          },
        },
      });

      if (result.error) {
        throw new Error(result.error.message);
      }

      return {
        success: true,
        message: 'Payment processed successfully',
        transactionId: result.paymentIntent.id
      };
    } catch (error) {
      console.error('Payment failed:', error);
      return {
        success: false,
        message: 'Payment failed'
      };
    }
  }

  // Process M-Pesa payment
  async initiateMpesaPayment(phoneNumber: string, amount: number): Promise<PaymentResponse> {
    try {
      // Call Paystack API to initiate M-Pesa STK Push
      const response = await axios.post('/api/mpesa/stkpush', {
        phoneNumber,
        amount
      });

      return {
        success: true,
        message: 'M-Pesa STK push initiated. Please check your phone.',
        transactionId: response.data.checkoutRequestID
      };
    } catch (error) {
      console.error('M-Pesa payment failed:', error);
      return {
        success: false,
        message: 'M-Pesa payment failed'
      };
    }
  }

  // Verify M-Pesa payment status
  async verifyMpesaPayment(checkoutRequestID: string): Promise<PaymentResponse> {
    try {
      const response = await axios.post('/api/mpesa/query', {
        checkoutRequestID
      });

      return {
        success: response.data.resultCode === '0',
        message: response.data.resultDesc,
        transactionId: response.data.mpesaReceiptNumber
      };
    } catch (error) {
      console.error('Failed to verify M-Pesa payment:', error);
      return {
        success: false,
        message: 'Payment verification failed'
      };
    }
  }

  // Query payments
  async queryPayments(filters: {
    startDate?: string;
    endDate?: string;
    status?: string;
    method?: 'card' | 'mpesa';
  }): Promise<any[]> {
    try {
      const response = await axios.get('/api/payments', { params: filters });
      return response.data.payments;
    } catch (error) {
      console.error('Failed to query payments:', error);
      return [];
    }
  }
}

export const paymentService = new PaymentService();