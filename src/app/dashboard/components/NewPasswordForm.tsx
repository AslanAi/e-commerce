"use client";
const NewPasswordForm = ({ onNext, onBack }) => {
    return (
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Enter new Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="New Password"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Confirm new Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Confirm Password"
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
            Submit
          </button>
        </div>
      </form>
    );
  };
  
  export default NewPasswordForm;