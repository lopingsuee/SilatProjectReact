import React from 'react';

const ButtonPlus = (props) => {
  const { children, point, onClick, bgColor, addPoint } = props;
  return (
    <button
      onClick={() => {
        onClick();
        addPoint(point);
      }}
      className={`items-center text-white rounded py-2 px-4 ${bgColor}`}
    >
      {children}
    </button>
  );
};

export default ButtonPlus;