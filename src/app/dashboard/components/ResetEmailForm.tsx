"use client";
const ResetEmailForm = ({ onNext, onBack }) => {
    return (
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Enter your email ID or Mobile Number
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Email/Mobile"
          />
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
            Send Code
          </button>
        </div>
      </form>
    );
  };
  
  export default ResetEmailForm;