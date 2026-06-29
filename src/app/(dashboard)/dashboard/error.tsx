"use client";

import React from 'react';

const error = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-50 p-4">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-slate-900">Something went wrong!</h2>
        <p className="mt-2 text-sm text-slate-600">There was an error loading your dashboard panel.</p>
      </div>
    </div>
  );
};

export default error;