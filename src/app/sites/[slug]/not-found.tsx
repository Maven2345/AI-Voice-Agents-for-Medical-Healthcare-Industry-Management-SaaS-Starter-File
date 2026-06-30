import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4 text-center">
      <h1 className="text-6xl font-bold text-slate-900">404</h1>
      <p className="mt-2 text-xl font-medium text-slate-600">Page Not Found</p>
      <p className="mt-1 text-sm text-slate-500">The requested resource could not be found.</p>
      <Link 
        href="/" 
        className="mt-6 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;