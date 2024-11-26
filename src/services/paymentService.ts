/** @format */

import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import type { StripeCardElement } from "@stripe/stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import { Stripe } from "@stripe/stripe-js";
import { Bounce, toast } from "react-toastify";

interface PaymentResponse {
	success: boolean;
	message: any;
	transactionId?: string;
	clientSecret?: string;
	accessToken?: string;
	
}

class PaymentService {
	private stripe: Promise<Stripe | null>; // This will store a Promise
	private accessToken: string | null = null;
	constructor() {
		this.stripe = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || "");
	}
	private async getAccessToken(): Promise<string | null> {
		if (this.accessToken) {
			// Return the token if it's already set
			return this.accessToken;
		}

		// Otherwise, fetch it from localStorage and store it
		const authData = JSON.parse(
			localStorage.getItem("persist:auth") || "{}"
		);
		const data = authData.auth;
		const parsedToken = JSON.parse(data);
		this.accessToken = parsedToken.token || null; // Store token
		return this.accessToken;
	}

	private async getStripe(): Promise<Stripe | null> {
		return await this.stripe;
	}

	async processCardPayment(
		amount: number,
		currency: string
	): Promise<PaymentResponse> {
		const stripe = await this.getStripe();
		if (!stripe) {
			return { success: false, message: "Stripe not initialized" };
		}
		try {

			const accessToken = await this.getAccessToken();

			if (!accessToken) {
				throw new Error("Access token is missing");
			}
			// Create payment intent
			const response = await axios.post(
				"http://127.0.0.1:5000/subscription/payment-intent",
				{ amount },
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
						"Content-Type": "application/json",
					},
				}
			);

			const { clientSecret } = response.data;
			const { id } = response.data;

			const intentSuccess = await axios.post(
				"http://127.0.0.1:5000/subscription/intent-success",
				{ id },
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
						"Content-Type": "application/json",
					},
				}
			);
			if (intentSuccess && intentSuccess) {
				console.log(intentSuccess);
			} else {
				console.error("No message found in response data");
			}

			return {
				success: true,
				message: "Payment processed successfully",
				transactionId: id,
				clientSecret,
				accessToken,
			};
		} catch (error) {
			console.error("Payment failed:", error);
			return {
				success: false,
				message: "Payment failed",
			};
		}
	}

	// Process M-Pesa payment
	async initiateMpesaPayment(
		phoneNumber: string,
		planName: string
	): Promise<PaymentResponse> {
		const accessToken = await this.getAccessToken();
		try {
			const response = await axios.post(
				"http://127.0.0.1:5000/subscription/pay",
				{
					phoneNumber,
					planName,
				},
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
						"Content-Type": "application/json",
					},
				}
			);



	return {
		success: true,
		message: "M-Pesa STK push initiated. Please check your phone.",
		transactionId: response.data.checkoutRequestID,
	};

		} catch (error) {
			console.error(`M-Pesa payment failed:, ${error} ${accessToken}`);

			return {
				success: false,
				message: "M-Pesa payment failed",
			};
		}
	}

	// Verify M-Pesa payment status
	async verifyMpesaPayment(
		checkoutRequestID: string
	): Promise<PaymentResponse> {
		try {
			const response = await axios.post("/api/mpesa/query", {
				checkoutRequestID,
			});

			return {
				success: response.data.resultCode === "0",
				message: response.data.resultDesc,
				transactionId: response.data.mpesaReceiptNumber,
			};
		} catch (error) {
			console.error("Failed to verify M-Pesa payment:", error);
			return {
				success: false,
				message: "Payment verification failed",
			};
		}
	}

	// Query payments
	async queryPayments(filters: {
		startDate?: string;
		endDate?: string;
		status?: string;
		method?: "card" | "mpesa";
	}): Promise<any[]> {
		try {
			const response = await axios.get("/api/payments", {
				params: filters,
			});
			return response.data.payments;
		} catch (error) {
			console.error("Failed to query payments:", error);
			return [];
		}
	}
}

export const paymentService = new PaymentService();
