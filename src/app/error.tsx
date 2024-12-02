'use client';

import { useEffect } from 'react';
// import { Button } from '@/components/ui/button';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-2xl mx-auto">
        {/* Error Icon */}
        <div className="text-red-500 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-gray-900">
          Something went wrong!
        </h1>
        
        <div className="space-y-4">
          {/* Error Details (only in development) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="bg-gray-100 p-4 rounded-lg text-left">
              <p className="text-sm font-mono text-gray-700 break-words">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-sm font-mono text-gray-500 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}

          {/* User-friendly message */}
          <p className="text-gray-600">
            We apologize for the inconvenience. Please try again, and if the
            problem persists, contact our support team.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center mt-6">
          {/* <Button
            onClick={reset}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Try Again
          </Button>
          <Button
            onClick={() => window.location.href = '/'}
            variant="outline"
            className="border-gray-300"
          >
            Go Home
          </Button> */}
        </div>
      </div>
    </div>
  );
}