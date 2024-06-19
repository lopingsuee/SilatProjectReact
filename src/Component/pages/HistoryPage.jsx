import React, { useState } from 'react';
import Button from '../Elements/Button';
import HistoryBox from '../Elements/HistoryBox';


const HistoryPage = () => {
    const [history1, setHistory1] = useState([]);
    const [history2, setHistory2] = useState([]);
    const [history3, setHistory3] = useState([]);
    const [currentBox, setCurrentBox] = useState(1);
  
    const addPoint = (points) => {
      if (currentBox === 1) {
        setHistory1([...history1, points]);
      } else if (currentBox === 2) {
        setHistory2([...history2, points]);
      } else if (currentBox === 3) {
        setHistory3([...history3, points]);
      }
    };
  
    const nextBox = () => {
      setCurrentBox((prevBox) => (prevBox === 3 ? 1 : prevBox + 1));
    };
  
    return (
      <div className="min-h-screen  flex flex-col items-center py-20 bg-black">
        <div className="flex flex-col items-center w-full max-w-2 space-y-4">
          <HistoryBox points={history1} />
          <HistoryBox points={history2} />
          <HistoryBox points={history3} />
        </div>
        <div className="mt-8 flex space-x-4">
          <Button addPoint={addPoint} points={5} />
          <button onClick={nextBox} className=" text-white py-2 px-4 rounded">
            Next Box
          </button>
        </div>
      </div>
    );
  };
  
  export default HistoryPage;