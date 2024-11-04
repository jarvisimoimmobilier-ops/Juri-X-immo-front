// CustomInput.js
import React from 'react';

export default function CustomInput({ type = 'text', value, onChange, placeholder = '', className = '' }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-customBlue focus:border-customBlue sm:text-sm caret-customBlue ${className}`}
    />
  );
}
