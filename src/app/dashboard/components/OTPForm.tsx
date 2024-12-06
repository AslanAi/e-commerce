"use client";
const OTPForm = ({ onNext, onBack }) => {
    return (
      <form className="space-y-4">
        <p className="text-sm text-gray-600">
          We have sent you a message with the authentication code
        </p>
        <div className="flex gap-2 justify-between">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border border-gray-300 rounded-md"
            />
          ))}
        </div>
        <div className="text-center">
          <button
            type="button"
            className="text-blue-600 text-sm hover:underline"
          >
            Didn&apos;t receive code?
          </button>
        </div>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 py-2 px-4 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
          >
            Back
          </button>
          <button
            type="button"
            onClick={onNext}
            className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Verify OTP
          </button>
        </div>
      </form>
    );
  };
  
  export default OTPForm;