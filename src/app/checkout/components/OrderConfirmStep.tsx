import React from 'react';
import { Check } from 'lucide-react';
import p1 from '../../../../public/pay.png';
import Image from 'next/image';
interface OrderConfirmStepProps {
  onNext: () => void;
  onBack: () => void;
  currentStep: number;
}

export default function OrderConfirmStep({ onNext, onBack, currentStep }: OrderConfirmStepProps) {
  const steps = ['Welcome', 'Shipping method', 'Payment', 'Order'];

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 text-black">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-[#1A1F36] mb-2">
          Confirm and enjoy your order
        </h1>
        <p className="text-gray-600">
          Review your details one last time, then place your order to kickstart
          your journey toward an amazing experience. Thank you for choosing us!
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

      {/* Order Summary Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        {/* Order Review Section */}
        <div className="border-b border-gray-200 pb-4 mb-4">
          <button className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-medium">Order Review</span>
              <span className="text-gray-500">3 items in cart</span>
            </div>
            <span className="text-gray-900">LKR 6250</span>
          </button>
        </div>

        {/* Coupons Section */}
        <div className="border-b border-gray-200 pb-4 mb-4">
          <button className="w-full flex items-center justify-between">
            <span className="font-medium">Coupons</span>
            <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
              <span className="text-gray-400">+</span>
            </div>
          </button>
        </div>

        {/* Checkout Summary */}
        <div className="mb-6">
          <button className="w-full flex items-center justify-between mb-4">
            <span className="font-medium">Check out Summary</span>
          </button>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>LKR 7250</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Discount</span>
              <span>LKR 1500</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>LKR 500</span>
            </div>
            <div className="flex justify-between font-medium text-gray-900 pt-2 border-t border-gray-200">
              <span>Total</span>
              <span>LKR 6250</span>
            </div>
          </div>
        </div>

        {/* Terms Checkbox */}
        <div className="mb-6">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-600">
              Please check to acknowledge our{' '}
              <button className="text-gray-900 font-medium">
                Privacy & Terms Policy
              </button>
            </span>
          </label>
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
              Place Order →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}