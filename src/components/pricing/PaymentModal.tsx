import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, Phone } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPayment: (method: 'card' | 'mpesa', phoneNumber?: string) => Promise<void>;
  planName: string;
  amount: string;
  currency: 'USD' | 'KES';
  isProcessing: boolean;
}

const PaymentModal = ({
  isOpen,
  onClose,
  onPayment,
  planName,
  amount,
  currency,
  isProcessing
}: PaymentModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'mpesa'>('card');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPayment(paymentMethod, phoneNumber);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-lg max-w-md w-full p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Payment Details</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mb-6">
              <p className="text-gray-600">
                Selected Plan: <span className="font-semibold">{planName}</span>
              </p>
              <p className="text-gray-600">
                Amount: <span className="font-semibold">{currency} {amount}</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`flex-1 p-4 border rounded-lg flex items-center justify-center space-x-2 ${
                      paymentMethod === 'card' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                    }`}
                  >
                    <CreditCard className="h-5 w-5" />
                    <span>Card Payment</span>
                  </button>
                  {currency === 'KES' && (
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('mpesa')}
                      className={`flex-1 p-4 border rounded-lg flex items-center justify-center space-x-2 ${
                        paymentMethod === 'mpesa' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                      }`}
                    >
                      <Phone className="h-5 w-5" />
                      <span>M-Pesa</span>
                    </button>
                  )}
                </div>

                {paymentMethod === 'mpesa' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      M-Pesa Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="254700000000"
                      className="w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-300"
              >
                {isProcessing ? 'Processing...' : 'Pay Now'}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;