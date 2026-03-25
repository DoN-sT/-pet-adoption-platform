import Link from 'next/link';
import Layout from '@/components/Layout';

/**
 * 404 Not Found page - Displayed when a pet or page is not found
 */
export default function NotFound() {
  return (
    <Layout>
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Pet Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, we couldn't find the pet you're looking for.
        </p>
        
        <div className="space-y-4">
          <Link href="/browse" className="btn-primary inline-block">
            Browse All Pets
          </Link>
          <div>
            <Link href="/" className="text-primary-600 hover:text-primary-700">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
