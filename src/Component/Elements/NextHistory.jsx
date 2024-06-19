// src/components/NextHistoryButton.jsx
import React from 'react';

const NextHistory = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-black text-white font-semibold py-2 px-4 rounded">
      Next Round
    </button>
  );
};

export default NextHistory;
