"use client"; 
import { useState } from 'react';
import Layout from './components/Layout';
import Stepper from './components/Stepper';
import SignInForm from './components/SignInForm';
import ResetEmailForm from './components/ResetEmailForm';
import OTPForm from './components/OTPForm';
import NewPasswordForm from './components/NewPasswordForm';

const DashboardPage = () => {
  const [isResetFlow, setIsResetFlow] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  
  const resetSteps = [
    { id: 'email', label: 'Email' },
    { id: 'otp', label: 'Verify OTP' },
    { id: 'password', label: 'Set Password' }
  ];

  const handleResetPassword = () => {
    setIsResetFlow(true);
    setCurrentStep(0);
  };

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, resetSteps.length - 1));
  };

  const handleBack = () => {
    if (currentStep === 0) {
      setIsResetFlow(false);
    } else {
      setCurrentStep(prev => Math.max(prev - 1, 0));
    }
  };

  const renderForm = () => {
    if (!isResetFlow) {
      return <SignInForm onResetPassword={handleResetPassword} />;
    }

    switch (currentStep) {
      case 0:
        return <ResetEmailForm onNext={handleNext} onBack={handleBack} />;
      case 1:
        return <OTPForm onNext={handleNext} onBack={handleBack} />;
      case 2:
        return <NewPasswordForm onNext={handleNext} onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="bg-white p-8 rounded-lg shadow-sm w-96">
        <h2 className="text-xl font-semibold mb-6">
          {isResetFlow ? 'Reset Password' : 'Sign in'}
        </h2>
        {isResetFlow && (
          <Stepper steps={resetSteps} currentStep={currentStep} />
        )}
        {renderForm()}
      </div>
    </Layout>
  );
};

export default DashboardPage;