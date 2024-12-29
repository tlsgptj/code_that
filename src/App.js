import { useState } from 'react';
import Dice from './Dice';
import Button from './Button';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [number, setNumber] = useState(1);

  const handleRollClick = () => {
    const nextNum = random(6);
    setNumber(nextNum);
  };

  const handleClearClick = () => {
    setNumber(1);
  }

  return (
    <div>
      <Button onClick={handleRollClick}>던지기</Button>
      <Button onClick={handleClearClick}>처음부터</Button>
      <Dice color="red" num={number} />
    </div>
  );
}

export default App;
