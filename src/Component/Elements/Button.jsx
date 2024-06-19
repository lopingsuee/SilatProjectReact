import React from 'react';

const Button = ({ addPoint, points }) => {
  return (
    <button
      onClick={() => addPoint(points)}
      className="bg-blue-500 text-white py-2 px-4 rounded"
    >
      Add {points} Points
    </button>
  );
};

export default Button;