import React from 'react';

// Previous code would be here

function Button({ label, onClick }) {
  return (
    <button
      className="px-4 py-2 m-2 text-white bg-blue-500 rounded hover:bg-blue-700"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;

// Continue with the rest of the previous code if any
