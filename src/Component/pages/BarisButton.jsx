// src/components/BarisButton.jsx
import React, { useState } from 'react';
import ButtonPlus from '../Elements/ButtonPlus';
import ButtonMinus from '../Elements/ButtonMinus';
import HistoryBox from '../Elements/HistoryBox';

const BarisButton = ({ currentBox, setCurrentBox }) => {
  const [score, setScore] = useState(0);
  const [history1, setHistory1] = useState([]);
  const [history2, setHistory2] = useState([]);
  const [history3, setHistory3] = useState([]);

  const addPoint = (points) => {
    if (currentBox === 1) {
      setHistory1([...history1, points]);
    } else if (currentBox === 2) {
      setHistory2([...history2, points]);
    } else if (currentBox === 3) {
      setHistory3([...history3, points]);
    }
    setScore(score + points);
  };

  return (
    <div >
         <div className="space-y-4">
        <HistoryBox points={currentBox === 1 ? history1 : []} isActive={currentBox === 1} props="1"> </HistoryBox>
        <HistoryBox points={currentBox === 2 ? history2 : []} isActive={currentBox === 2} props="2"> </HistoryBox>
        <HistoryBox points={currentBox === 3 ? history3 : []} isActive={currentBox === 3} props="3"> </HistoryBox>
      </div>

       <div className="grid grid-cols-4 w-custom1 p-4 rounded mb-4 py-2 px-4 gap-2 pt-10">
      <ButtonPlus point={1} addPoint={addPoint} onClick={() => {}} bgColor="bg-red-600">+1</ButtonPlus>
      <ButtonPlus point={2} addPoint={addPoint} onClick={() => {}} bgColor="bg-red-600">+2</ButtonPlus>
      <ButtonPlus point={3} addPoint={addPoint} onClick={() => {}} bgColor="bg-red-600">+3</ButtonPlus>
      <ButtonPlus point={4} addPoint={addPoint} onClick={() => {}} bgColor="bg-red-600">+4</ButtonPlus>

      <ButtonMinus point={1} addPoint={addPoint} onClick={() => {}} bgColor="bg-red-600">-1</ButtonMinus>
      <ButtonMinus point={2} addPoint={addPoint} onClick={() => {}} bgColor="bg-red-600">-2</ButtonMinus>
      <ButtonMinus point={5} addPoint={addPoint} onClick={() => {}} bgColor="bg-red-600">-5</ButtonMinus>
      <ButtonMinus point={10} addPoint={addPoint} onClick={() => {}} bgColor="bg-red-600">-10</ButtonMinus>
</div>
      <div className="mt-2 justify-center flex">
        <p className="text-5xl bg-red-600 text-white py-2 px-10 rounded ">{score}</p>
      </div> 
      
    </div>
  );
};

export default BarisButton;
