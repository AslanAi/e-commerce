"use client";
const SignInForm = ({ onResetPassword }) => {
    return (
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Enter your mobile number or email ID
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="mobile/email ID"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Enter your Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Password"
          />
          <div className="text-right mt-1">
            <button
              type="button"
              onClick={onResetPassword}
              className="text-blue-600 text-sm hover:underline"
            >
              Reset Password
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>
    );
  };
  
  export default SignInForm;