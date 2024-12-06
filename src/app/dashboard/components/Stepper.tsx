"use client";
const Stepper = ({ steps, currentStep }) => {
    return (
      <div className="mb-8">
        <div className="flex items-center justify-center">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div 
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center
                  ${index <= currentStep 
                    ? 'border-blue-600 bg-blue-600 text-white' 
                    : 'border-gray-300 text-gray-300'}`}
              >
                {index < currentStep ? '✓' : index + 1}
              </div>
              {index < steps.length - 1 && (
                <div 
                  className={`w-20 h-0.5 mx-2 
                    ${index < currentStep ? 'bg-blue-600' : 'bg-gray-300'}`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2">
          {steps.map((step, index) => (
            <div key={step.id} className="text-center mx-4">
              <span 
                className={`text-sm ${
                  index <= currentStep ? 'text-blue-600' : 'text-gray-400'
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Stepper;