/** @format */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CreditCard, Phone } from "lucide-react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { paymentService } from "../../services/paymentService"; // Adjust the import as needed
import axios from "axios";
import { Bounce, toast } from "react-toastify";

interface PaymentModalProps {
	isOpen: boolean;
	onClose: () => void;
	onPayment: (
		paymentMethod: "card" | "mpesa",
		phoneNumber?: string
	) => Promise<void>;
	planName: string;

	amount: string;
	currency: "USD" | "KES";
	isProcessing: boolean;
}

const PaymentModal = ({
	isOpen,
	onClose,
	planName,
	amount,
	currency,
	isProcessing,
}: PaymentModalProps) => {
	const [paymentMethod, setPaymentMethod] = useState<"card" | "mpesa">(
		"card"
	);
	const [phoneNumber, setPhoneNumber] = useState("");
	const stripe = useStripe();
  const elements = useElements();
    const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		try {
			if (paymentMethod === "card") {
			if (!stripe || !elements) {
				alert("Stripe is not loaded!");
					return;
			}
		       
					
				

				const cardElement = elements.getElement(CardElement);
				if (!cardElement) {
					toast.error("CardElement is not initialized!");
					return;
		}
		
 

			
				const { paymentMethod, error } =
					await stripe.createPaymentMethod({
						type: "card",
						card: cardElement,
					});
				if (error) {
					alert(error.message || "Payment method creation failed.");
					return;
				}
								const paymentResponse =
									await paymentService.processCardPayment(
										parseFloat(amount),
										currency
									);
				const accessToken = paymentResponse.accessToken;
				const response = await axios.post("http://127.0.0.1:5000/subscription/create-subscription", {
					paymentMethodId: paymentMethod?.id,
					plan: planName,
					
				},
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
						"Content-Type": "application/json",
					},
				});

				toast.success("Payment was successful!", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
					transition: Bounce,
				});



				
if (paymentResponse.clientSecret) {
	 await stripe.confirmCardPayment(
		paymentResponse.clientSecret,
		{
			payment_method: paymentMethod.id,
		}
		
	);
} else {
	console.error("Payment response missing clientSecret.", paymentResponse);
}

				try {
					
				
				if (paymentResponse.success) {
					console.log(
						"Payment successful! Transaction ID: " +
							paymentResponse.transactionId
					);
					onClose(); 
				} else {
					toast.success(paymentResponse.message);
				}
			} catch (error) {
				console.error("Error processing card payment:", error);
				toast.error("Error processing card payment.");
			}
		} else if (paymentMethod === "mpesa") {
			try {
				const paymentResponse =
					await paymentService.initiateMpesaPayment(
						phoneNumber,
						planName
					);

				if (paymentResponse.success) {
					toast.success(paymentResponse.message, {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
						transition: Bounce,
					});
					onClose(); // Close modal on success
				} else {
					toast.error(paymentResponse.message);
				}
			} catch (error) {
				console.error("Error processing M-Pesa payment:", error);
				toast.error("Error processing M-Pesa payment.");
			}
		}
	} catch (error) {
		console.error("Error processing payment:", error);
		toast.error("Error processing payment.");
	} finally {
		setLoading(false);
	}
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						className='bg-white rounded-lg max-w-md w-full p-6'>
						<div className='flex justify-between items-center mb-6'>
							<h2 className='text-2xl font-bold text-gray-900'>
								Payment Details
							</h2>
							<button
								onClick={onClose}
								className='text-gray-500 hover:text-gray-700'>
								<X className='h-6 w-6' />
							</button>
						</div>

						<div className='mb-6'>
							<p className='text-gray-600'>
								Selected Plan:{" "}
								<span className='font-semibold'>
									{planName}
								</span>
							</p>
							<p className='text-gray-600'>
								Amount:{" "}
								<span className='font-semibold'>
									{currency} {amount}
								</span>
							</p>
						</div>

						<form onSubmit={handleSubmit} className='space-y-6'>
							<div className='space-y-4'>
								<div className='flex space-x-4'>
									<button
										type='button'
										onClick={() => setPaymentMethod("card")}
										className={`flex-1 p-4 border rounded-lg flex items-center justify-center space-x-2 ${
											paymentMethod === "card"
												? "border-blue-500 bg-blue-50"
												: "border-gray-300"
										}`}>
										<CreditCard className='h-5 w-5' />
										<span>Card Payment</span>
									</button>
									{currency === "KES" && (
										<button
											type='button'
											onClick={() =>
												setPaymentMethod("mpesa")
											}
											className={`flex-1 p-4 border rounded-lg flex items-center justify-center space-x-2 ${
												paymentMethod === "mpesa"
													? "border-blue-500 bg-blue-50"
													: "border-gray-300"
											}`}>
											<Phone className='h-5 w-5' />
											<span>M-Pesa</span>
										</button>
									)}
								</div>

								{paymentMethod === "mpesa" && (
									<div>
										<label className='block text-sm font-medium text-gray-700 mb-1'>
											M-Pesa Phone Number
										</label>
										<input
											type='tel'
											required
											value={phoneNumber}
											onChange={(e) =>
												setPhoneNumber(e.target.value)
											}
											placeholder='254700000000'
											className='w-full border border-gray-300 rounded-md p-2'
										/>
									</div>
								)}

								{paymentMethod === "card" && (
									<div>
										<label className='block text-sm font-medium text-gray-700 mb-1'>
											Card Information
										</label>
										<CardElement options={{ hidePostalCode: true}} className='w-full border border-gray-300 rounded-md p-2' />
									</div>
								)}
							</div>

							<button
								type='submit'
								disabled={isProcessing}
								className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-300'>
								{isProcessing ? "Processing..." : "Pay Now"}
							</button>
						</form>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
};

export default PaymentModal;
