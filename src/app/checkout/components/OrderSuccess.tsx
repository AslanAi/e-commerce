import React from 'react';
// import Link from 'next/link';
import { Check } from 'lucide-react';

interface OrderSuccessProps {
  onNext: () => void;
  onBack: () => void;
  currentStep: number;
}

export default function OrderSuccess({ 
  onNext,
  onBack,
//   currentStep
}: OrderSuccessProps) {
//   const steps = ['Welcome', 'Shipping method', 'Payment', 'Order'];

  return (
    <div className="max-w-xl mx-auto px-4 py-12 text-black">
      {/* Stepper */}
      {/* <div className="mb-12">
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
      </div> */}

      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-[#1A1F36] mb-2">
          Yes, youve successfully ordered!
        </h1>
        <p className="text-gray-600">
          Thank you for your purchase! A confirmation email has been
          sent to you with all the details. Your order is on its way!
        </p>
      </div>

      {/* Success Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <Check className="w-12 h-12 text-green-500" />
          </div>
        </div>

        {/* Success Message */}
        <h2 className="text-xl font-semibold text-[#1A1F36] mb-3">
          Thanks a lot for putting up this order
        </h2>
        
        <div className="space-y-4 mb-8">
          <p className="text-gray-600">
            Your order ASK123456 has been successfully placed!
          </p>
          <p className="text-gray-600">
            Youll find all the details about your order below. Well send you a shipping
            confirmation email as soon as your order ships.
          </p>
          <p className="text-gray-600">
            Let me know if youd like further refinements!
          </p>
        </div>

        {/* Questions Section */}
        <div className="mb-8">
          <p className="text-gray-600 mb-1">
            Questions? Suggestions? insightful shower thoughts?
          </p>
          <button className="text-[#1A1F36] font-medium underline">
            Shoot us an email.
          </button>
        </div>

        {/* Order Review */}
        <div className="border rounded-lg mb-6">
          <button className="w-full flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <span className="font-medium">Order Review  <p className="text-gray-500">3 items in cart</p></span>
            
            </div>
            <span className="text-gray-900">LKR 6250</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex items-center justify-between">
       
            <button
              onClick={onNext}
              className="w-full px-8 py-2.5 bg-[#0095FF] text-white rounded-lg hover:bg-blue-500"
            >
              Back to Products →
            </button>
       
        </div>
      </div>
    </div>
  );
}