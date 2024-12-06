'use client';
import React, { useState } from 'react';
import BillingAddress from './components/CheckoutForm';
import ShippingMethod from './components/ShippingMethod';
import PaymentStep from './components/PaymentStep';
import OrderConfirmStep from './components/OrderConfirmStep';
import OrderSuccess from './components/OrderSuccess';
import Header from '@components/layouts/header';
import Footer from '@components/layouts/footer';

const CheckoutPage = () => {
    const [currentStep, setCurrentStep] = useState(0);
  
    const handleNext = () => {
      setCurrentStep(prev => prev + 1);
    };
  
    const handleBack = () => {
      setCurrentStep(prev => prev - 1);
    };
  
    return (
      <main className="min-h-screen bg-gray-50">
         <Header />
        {currentStep === 0 && (
          <BillingAddress 
            onNext={handleNext}
            currentStep={currentStep}
          />
        )}
        {currentStep === 1 && (
          <ShippingMethod
            onNext={handleNext}
            onBack={handleBack}
            currentStep={currentStep}
          />
        )}
         {currentStep === 2 && (
          <PaymentStep
            onNext={handleNext}
            onBack={handleBack}
            currentStep={currentStep}
          />
        )}
          {currentStep === 3 && (
          <OrderConfirmStep
            onNext={handleNext}
            onBack={handleBack}
            currentStep={currentStep}
          />
        )}
           {currentStep === 4 && (
          <OrderSuccess
            onNext={handleNext}
            onBack={handleBack}
            currentStep={currentStep}
          />
        )}
          
           
            <Footer />
      </main>

    );
  };
  
  export default CheckoutPage;