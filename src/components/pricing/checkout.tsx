/** @format */

import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { StripeCardElement } from "@stripe/stripe-js";

const CheckoutForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js hasn't loaded yet.
			return;
		}

		// Create a payment intent on the server
		const { data: clientSecret } = await axios.post(
			"/api/create-payment-intent",
			{
				amount: 1000, // Amount in cents
				currency: "usd",
			}
		);

		// Confirm the payment with the client secret
		const result = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
        card: elements.getElement(CardElement) as StripeCardElement, // Securely capture card details
				billing_details: {
					name: "John Doe",
					email: "john.doe@example.com",
				},
			},
		});

		if (result.error) {
			console.error("Payment failed:", result.error.message);
		} else {
			console.log("Payment successful:", result.paymentIntent);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<CardElement
				options={{
					style: {
						base: {
							fontSize: "16px",
							color: "#424770",
							"::placeholder": {
								color: "#aab7c4",
							},
						},
						invalid: {
							color: "#9e2146",
						},
					},
				}}
			/>
			<button type='submit' disabled={!stripe}>
				Pay
			</button>
		</form>
	);
};

export default CheckoutForm;
