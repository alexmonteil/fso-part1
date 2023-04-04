import { useState } from 'react';

// components
const Display = ({left, right}) => <div>Left: {left}, Right: {right}</div>;
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>;
const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div>The app is used by pressing the buttons !</div>
    );
  }
  
  return (
    <div>Button press history: {allClicks.join(' ')}</div>
  );
};


const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const handleLeft = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };
  const handleRight = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  const reset = () => {
    setLeft(0);
    setRight(0);
    setAll([]);
  };

  return (
    <div>
      <Display left={left} right={right} />
      <Button handleClick={handleLeft} text="Left" />
      <Button handleClick={handleRight} text="Right" />
      <Button handleClick={reset} text="reset" />
      <History allClicks={allClicks} />
    </div>
  );
}

export default App;
