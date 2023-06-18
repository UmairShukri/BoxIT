import React from 'react';

export default function Price({ visible, onClose }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="p-4 w-full max-w-md bg-gray-200 rounded-lg">
        <h1 className="text-center font-bold text-xl">TOTAL AMOUNT</h1>
        <p className="text-center">100LKR</p>
        <button onClick={onClose} className="block mx-auto mt-4 px-4 py-2 bg-green-500 text-white rounded-md font-bold">
          Close
        </button>
      </div>
    </div>
  );
}
