// import React from 'react';
import visa from './img/visa.png'
import mcard from './img/mastercard.png'
import paypal from './img/paypal.png'
import mpesa from './img/mpesa.png'

const PaymentForm = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center">
            
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
            <h1 className='text-3xl text-center font-bold'>Payment Form</h1><br />
                {/* Payment Methods */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-lg font-bold mb-2">Payment Methods</h2>
                        <div className="flex items-center space-x-4">
                            <a href=""><img
                                src={visa}
                                alt="Visa"
                                className="w-12 h-auto"
                            />
                            </a>
                            <a href=""><img
                                src={mcard}
                                alt="MasterCard"
                                className="w-12 h-auto"
                            />
                            </a>
                            <a href=""><img
                                src={paypal}
                                alt="PayPal"
                                className="w-12 h-auto"
                            />
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-400 font-semibold">OR</p>
                        <a href=""><img
                                src={mpesa}
                                alt="mpesa"
                                className="w-40 h-auto"
                            />
                        </a>
                    </div>
                </div>

                {/* Credit Card Details */}
                <div className="mb-6">
                    <h3 className="text-lg font-bold mb-4">Credit Card Details</h3>
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name on card"
                            className="w-full border border-gray-300 rounded-lg p-3"
                        />
                        <input
                            type="text"
                            placeholder="Card number"
                            className="w-full border border-gray-300 rounded-lg p-3"
                        />
                        <div className="grid grid-cols-3 gap-4">
                            <select
                                className="border border-gray-300 rounded-lg p-3"
                                aria-placeholder="Month"
                            >
                                <option value="">Month</option>
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="02">March</option>
                                <option value="02">April</option>
                                <option value="02">May</option>
                                <option value="02">June</option>
                                <option value="02">July</option>
                                <option value="02">August</option>
                                <option value="02">September</option>
                                <option value="02">October</option>
                                <option value="02">November</option>
                                <option value="02">December</option>
                                {/* Add remaining months */}
                            </select>
                            <select
                                className="border border-gray-300 rounded-lg p-3"
                                aria-placeholder="Year"
                            >
                                <option value="">Year</option>
                                <option value="2024">2024</option>
                                <option value="2023">2025</option>
                                <option value="2023">2026</option>
                                <option value="2023">2027</option>
                                <option value="2023">2028</option>
                                <option value="2023">2029</option>
                                <option value="2023">2030</option>
                                <option value="2023">2031</option>
                                <option value="2023">2032</option>
                                <option value="2023">2033</option>
                                <option value="2023">2034</option>
                                {/* Add additional years */}
                            </select>
                            <input
                                type="text"
                                placeholder="CVC"
                                className="border border-gray-300 rounded-lg p-3"
                            />
                        </div>
                    </div>
                </div>

                {/* Billing Address */}
                <div className="mb-6">
                    <h3 className="text-lg font-bold mb-4">Billing Address</h3>
                    <div className="space-y-4">
                        <select
                            className="w-full border border-gray-300 rounded-lg p-3"
                        >
                            <option value="">Country</option>
                            <option value="us">United States</option>
                            <option value="ke">Kenya</option>
                            <option value="ke">Tanzania</option>
                            <option value="ke">Uganda</option>
                            <option value="ke">Rwanda</option>
                            <option value="ke">United Kingdom</option>
                            <option value="ke">Congo</option>
                            {/* Add more countries */}
                        </select>
                        <input
                            type="text"
                            placeholder="Address"
                            className="w-full border border-gray-300 rounded-lg p-3"
                        />
                        <input
                            type="text"
                            placeholder="City"
                            className="w-full border border-gray-300 rounded-lg p-3"
                        />
                        <input
                            type="text"
                            placeholder="State"
                            className="w-full border border-gray-300 rounded-lg p-3"
                        />
                        <input
                            type="text"
                            placeholder="ZIP Code"
                            className="w-full border border-gray-300 rounded-lg p-3"
                        />
                    </div>
                </div>

                {/* Contact Information */}
                <div className="mb-6">
                    <h3 className="text-lg font-bold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border border-gray-300 rounded-lg p-3"
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="w-full border border-gray-300 rounded-lg p-3"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg w-full hover:bg-blue-700 transition">
                        Proceed to payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentForm;
