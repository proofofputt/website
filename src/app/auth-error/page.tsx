'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';

function AuthErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error') || 'Authentication failed';
  const errorDescription = searchParams.get('error_description') || 'An error occurred during login. Please try again.';

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-bold mb-2" style={{color: 'var(--highlighter-yellow)'}}>
            Login Error
          </h1>
        </div>

        <div className="rounded-lg p-6 mb-6" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <p className="text-sm mb-4" style={{color: 'var(--text-white)'}}>
            <strong>Error:</strong> {error}
          </p>
          {errorDescription && (
            <p className="text-sm mb-4" style={{color: 'var(--text-white)'}}>
              {errorDescription}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <a
            href="https://app.proofofputt.com/login"
            className="px-6 py-3 rounded-lg font-semibold text-center transition-colors"
            style={{backgroundColor: 'var(--highlighter-yellow)', color: 'var(--masters-green-dark)'}}
          >
            Try Again
          </a>
          <Link
            href="/"
            className="px-6 py-3 rounded-lg font-semibold text-center transition-colors border-2"
            style={{borderColor: 'var(--highlighter-yellow)', color: 'var(--text-white)'}}
          >
            Return Home
          </Link>
        </div>

        <div className="mt-6 p-4 rounded-lg text-xs" style={{backgroundColor: 'var(--masters-green-dark)', color: 'var(--text-white)'}}>
          <p className="mb-2"><strong>Common issues:</strong></p>
          <ul className="space-y-1 ml-4">
            <li>• Check your internet connection</li>
            <li>• Ensure cookies are enabled</li>
            <li>• Try clearing browser cache</li>
            <li>• Use a supported browser (Chrome, Firefox, Safari, Edge)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function AuthErrorPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl" style={{color: 'var(--text-white)'}}>Loading...</div>
      </div>
    }>
      <AuthErrorContent />
    </Suspense>
  );
}
