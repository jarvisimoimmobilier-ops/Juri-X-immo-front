// CustomButton.js
import React from 'react';

export default function CustomButton({ type = 'button', onClick, children, className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-customBlue border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customBlue hover:bg-indigo-500 ${className}`}
    >
      {children}
    </button>
  );
}
