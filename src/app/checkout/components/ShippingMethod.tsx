import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

import p1 from '../../../../public/pay.png';
interface ShippingMethodProps {
  onNext: () => void;
  onBack: () => void;
  currentStep: number;
}

const ShippingMethod: React.FC<ShippingMethodProps> = ({ onNext, onBack, currentStep }) => {
  const steps = ['Welcome', 'Shipping method', 'Payment', 'Order'];

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          How should we sent the order?
        </h1>
        <p className="text-gray-600">
          Choose your preferred delivery method to ensure your order arrives in the way
          thats most convenient for you. Select from available shipping options below!
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

      {/* Shipping Method Selection */}
      <div className="bg-white rounded-2xl shadow-lg p-8 text-black">
        <h2 className="text-xl font-semibold mb-6">Shipping method</h2>
        
        <div className="space-y-4">
          <label className="block">
            <div className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-blue-500 bg-gray-50">
              <input
                type="radio"
                name="shipping"
                className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                defaultChecked
              />
              <div className="ml-4 flex-1">
                <div className="font-medium text-gray-500">Collect From Jaffna Branch</div>
               
              </div>
            </div>
<br></br>         
        <div className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-blue-500 bg-gray-50">
              <input
                type="radio"
                name="shipping"
                className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                defaultChecked
              />
              <div className="ml-4 flex-1">
                <div className="text-sm text-gray-500">
                  <div>Standard Delivery (3 - 5 working days)</div>
                  <div>LKR 500</div>
                </div>
              </div>
            </div>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex items-center justify-between">
          <Image 
            src={p1}
            alt="Norton Secured" 
            width={100} 
            height={32}
          />
          <div className="flex gap-3">
            <button
              onClick={onBack}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Back
            </button>
            <button
              onClick={onNext}
              className="bg-blue-500 text-white px-8 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2"
            >
              Next
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingMethod;