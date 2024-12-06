'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

import p1 from '../../../../public/pay.png';
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  streetAddress: string;
  state: string;
  city: string;
  zipCode: string;
  phoneNumber: string;
  sameAddress: boolean;
}

interface BillingAddressProps {
  onNext: () => void;
  currentStep: number;
}

const BillingAddress: React.FC<BillingAddressProps> = ({ onNext, currentStep }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: 'Max',
    lastName: 'Luca',
    email: 'max.luca@gmail.com',
    streetAddress: '',
    state: 'Northern Province',
    city: 'Jaffra',
    zipCode: '40000',
    phoneNumber: '',
    sameAddress: true
  });

  const steps = ['Welcome', 'Shipping method', 'Payment', 'Order'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-black mb-2">
          Where should we sent the order?
        </h1>
        <p className="text-black">
          Please provide your delivery details below to ensure your order reaches you
          promptly and accurately. Double-check the address for smooth delivery!
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
                    'border-gray-300 text-black'}`}
                >
                  {index < currentStep ? <Check className="w-5 h-5" /> : index + 1}
                </div>
                <span className={`text-sm mt-2 ${index === currentStep ? 'text-blue-500' : 'text-black'}`}>
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

      {/* Form */}
      <div className="bg-white rounded-2xl shadow-lg p-8 text-black">
        <h2 className="text-xl font-semibold mb-6 ">Billing Address</h2>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
              <Check className="absolute right-3 top-2.5 text-green-500 w-5 h-5" />
            </div>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Street Address
            </label>
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              className="w-full px-4 py-2 border  text-black border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your street address"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State/Province
            </label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Northern Province">Northern Province</option>
              <option value="Eastern Province">Eastern Province</option>
              <option value="Western Province">Western Province</option>
              <option value="Southern Province">Southern Province</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Jaffra">Jaffra</option>
              <option value="Colombo">Colombo</option>
              <option value="Kandy">Kandy</option>
              <option value="Galle">Galle</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Zip/Postal Code
            </label>
            <select
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="40000">40000</option>
              <option value="10000">10000</option>
              <option value="20000">20000</option>
              <option value="30000">30000</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone number
            </label>
            <div className="flex">
              <select
                className="px-3 py-2 border border-gray-300 rounded-l-lg border-r-0 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>LK</option>
              </select>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="+94 (555) 000-0000"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="sameAddress"
              checked={formData.sameAddress}
              onChange={handleChange}
              className="h-4 w-4 text-blue-500 rounded border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-600">
              My billing and shipping address are the same
            </span>
          </label>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <Image 
            src={p1}
            alt="Norton Secured" 
            width={100} 
            height={32}
          />
          <button
            onClick={onNext}
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 flex items-center gap-2"
          >
            Next
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingAddress;