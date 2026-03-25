/**
 * ErrorMessage component - Display error messages with retry option
 * @param {string} message - Error message to display
 * @param {Function} onRetry - Optional retry function
 * @param {string} className - Additional CSS classes
 */
interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  className?: string;
}

export default function ErrorMessage({ message, onRetry, className = '' }: ErrorMessageProps) {
  return (
    <div className={`bg-red-50 border border-red-200 rounded-lg p-6 text-center ${className}`}>
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg
          className="w-8 h-8 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      
      <h3 className="text-lg font-semibold text-red-900 mb-2">Something went wrong</h3>
      <p className="text-red-700 mb-4">{message}</p>
      
      {onRetry && (
        <button
          onClick={onRetry}
          className="btn-primary bg-red-600 text-white hover:bg-red-700"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
