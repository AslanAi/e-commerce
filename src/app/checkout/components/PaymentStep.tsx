'use client';

import React from 'react';
import Image from 'next/image';
import { Check, Lock } from 'lucide-react';
import p1 from '../../../../public/pay.png';
interface PaymentStepProps {
  onNext: () => void;
  onBack: () => void;
  currentStep: number;
}

const PaymentStep: React.FC<PaymentStepProps> = ({ onNext, onBack, currentStep }) => {
  const steps = ['Welcome', 'Shipping method', 'Payment', 'Order'];

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          How would you like to pay?
        </h1>
        <p className="text-gray-600">
          Select your preferred payment method to complete your purchase
          securely and conveniently. Choose from the options below!
        </p>
      </div>

      {/* Stepper */}
      <div className="mb-12">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                  ${index === currentStep ? 'border-blue-500 bg-blue-500 text-white' : 
                    index < currentStep ? 'border-green-500 bg-green-500 text-white' : 
                    'border-gray-300 text-gray-300'}`}
                >
                  {index < currentStep ? <Check className="w-5 h-5" /> : index + 1}
                </div>
                <span className={`text-sm mt-2 ${index === currentStep ? 'text-blue-500' : 'text-gray-500'}`}>
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-0.5 ${index < currentStep ? 'bg-green-500' : 'bg-gray-300'}`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Payment Form */}
      <div className="bg-white rounded-2xl shadow-lg p-8 text-black">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-medium">Payment Methods</h2>
          <div className="flex gap-2">
            <div className="w-12 h-8 rounded border flex items-center justify-center">
              <span className="text-sm font-bold text-[#1A1F36]">VISA</span>
            </div>
            <div className="w-12 h-8 rounded border flex items-center justify-center bg-[#3F3FE2]">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full opacity-80"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full opacity-80 -ml-2"></div>
              </div>
            </div>
            <div className="w-12 h-8 rounded border flex items-center justify-center bg-[#0C2074]">
              <span className="text-sm font-bold text-white">PayPal</span>
            </div>
            <div className="w-12 h-8 rounded border flex items-center justify-center bg-[#FF5F00]">
              <span className="text-sm font-bold text-white">MC</span>
            </div>
          </div>
        </div>

        {/* Credit Card Form */}
        <div className="rounded-xl bg-[#F7F7F9]  gap-4 p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <input
          type="radio"
          id="creditCard"
          name="paymentMethod"
          defaultChecked
          className="w-4 h-4 text-blue-600"
        />
        <label htmlFor="creditCard" className="text-[#1A1F36] font-medium">
          Pay with Credit Card
        </label>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 gap-4">
        {/* Name and Expiry Row */}
        <div className="grid grid-cols-[2fr,1fr] gap-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm text-gray-600 mb-1.5">
              Name on card
            </label>
            <input
              type="text"
              defaultValue="Olivia Rhye"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Expiry Field */}
          <div>
            <label className="block text-sm text-gray-600 mb-1.5">
              Expiry
            </label>
            <input
              type="text"
              defaultValue="06 / 2024"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Card Number and CVV Row */}
        <div className="grid grid-cols-[2fr,1fr] gap-4">
          {/* Card Number Field */}
          <div>
            <label className="block text-sm text-gray-600 mb-1.5">
              Card number
            </label>
            <div className="relative">
              <input
                type="text"
                defaultValue="1234 1234 1234 1234"
                className="w-full pl-12 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <div className="w-6 h-4 flex items-center">
                  <div className="w-3 h-3 bg-[#EB001B] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#F79E1B] rounded-full -ml-1.5 mix-blend-multiply"></div>
                </div>
              </div>
            </div>
          </div>

          {/* CVV Field */}
          <div>
            <label className="block text-sm text-gray-600 mb-1.5">
              CVV
            </label>
            <input
              type="text"
              defaultValue="•••"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
<br></br>
    <div className="rounded-lg border border-gray-200 p-4 gap-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              id="kokoPay"
              name="paymentMethod"
              className="w-4 h-4 text-blue-600"
            />
            <div>
              <div className="text-[#1A1F36] font-medium">KOKO Pay</div>
              <div className="text-sm text-gray-500">Buy Now Pay Later</div>
            </div>
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            KOKO
          </div>
        </div>
      </div>
      <div className="flex">
      <div className="w-2/3 rounded-lg border border-gray-200 p-4 mb-4 overflow-hidden">

      <div className="flex items-center gap-3">
        <input
          type="radio"
          id="mintpay"
          name="paymentMethod"
          className="w-4 h-4 text-blue-600"
        />
        <div className="bg-blue-50 rounded-lg pl-2 pr-4 py-2 flex items-center gap-3">
    <div className="bg-[#00142D] text-white px-1 py-1 rounded-lg font-semibold">
      mintpay
    </div>
    <div>|</div>
    <div>
      <div className="text-[#1A1F36] text-sm font-medium">Pay Now for Cashback</div>
      <div className="text-[#1A1F36] text-sm font-medium">Pay Later in 3 instalments</div>
    </div>
  </div>
      </div>
    </div>
</div>

      <div className="flex items-center gap-2 text-gray-500 mb-8">
        <Lock className="w-4 h-4" />
        <span className="text-sm">
          We protect your payment information using encryption to provide bank-level security.
        </span>
      </div>


        {/* Action Buttons */}
        <div className="flex items-center justify-between">
        <Image 
            src={p1}
            alt="Norton Secured" 
            width={100}
            height={32}
          />
          <div className="flex gap-3">
            <button
              onClick={onBack}
              className="px-8 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              Back
            </button>
            <button
              onClick={onNext}
              className="px-8 py-2.5 bg-[#0095FF] text-white rounded-lg hover:bg-blue-500"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStep;