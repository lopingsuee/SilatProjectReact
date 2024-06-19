// src/components/HistoryBox.jsx
import React from 'react';

const HistoryBox = ({ points, isActive, props},) => {
  const boxClassName = isActive ? 'bg-green-500' : 'bg-white'; // Ubah warna latar belakang jika sedang aktif

  return (
    <div className={` rounded border-2 border-black w-full font-bold ${boxClassName} p- overflow-hidden`}>
      <h2 className="text-sm">Round {props}</h2>
      <div className="flex flex-wrap break-words">
        {points.map((point, index) => (
          <p key={index} className="text-sm">
            {point}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HistoryBox;
