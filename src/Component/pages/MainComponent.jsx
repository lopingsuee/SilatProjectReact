// src/components/App.jsx
import React, { useState } from 'react';
import BarisButton from './BarisButton';
import BarisButton1 from './BarisButton1';
import NextHistory from '../Elements/NextHistory';
import Timer from '../Elements/Timer';

const App = () => {
  const [currentBox, setCurrentBox] = useState(1);

  const nextBox = () => {
    setCurrentBox((prevBox) => (prevBox === 3 ? 1 : prevBox + 1));
  };

  return (
    <div className="flex  items-center w-full ml-2  custom:flex">

      <div className="block custom:hidden fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="text-center text-white p-4">
        <h1 className="text-4xl font-semibold mb-4">Rotate your phone</h1>
        <p className="text-lg">Please rotate your device to use the content.</p>
      </div>
    </div>


      <div className="mt-10 mb-24">
        <BarisButton currentBox={currentBox} setCurrentBox={setCurrentBox} />
      </div >
      <div className='flex-col  pb-5'>
      <div className='justify-center flex mb-5'>
          <img src={"/assets/images/tampilan.png"} alt="dadhau"  style={{ width: '100px', height: 'auto', borderRadius: '8px' }}/>
        </div>
      <div className='justify-center flex'>
      <NextHistory onClick={nextBox} /> 
      </div>
        <div className='justify-center pt-12 '>
        <Timer />
        </div>
        </div>
      <div className="mt-10 mb-24">
        <BarisButton1 currentBox={currentBox} setCurrentBox={setCurrentBox} />
      </div>
    </div>
  );
};

export default App;
