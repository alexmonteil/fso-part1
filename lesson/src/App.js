import { useState } from 'react';

const Display = ({counter}) => <div>Watch me count: {counter}</div>;
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increment} text="+" />
      <Button handleClick={decrement} text="-" />
      <Button handleClick={reset} text="reset" />
    </div>
  );
}

export default App;
