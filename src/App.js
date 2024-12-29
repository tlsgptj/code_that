import { useState } from 'react';
import Board from './Board';
import Button from './Button';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [number, setNumber] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);
  const [otherNumber, setOtherNumber] = useState(1);
  const [otherSum, setOtherSum] = useState(0);
  const [otherGameHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    setNumber(nextNum);
    setSum(sum + nextNum);
    gameHistory.push(nextNum);
    setGameHistory(gameHistory);
    setOtherNumber(nextNum);
    setOtherSum(otherSum + nextNum);
    setOtherHistory(gameHistory);
  };

  const handleClearClick = () => {
    setNumber(1);
    setSum(0); // 초기화
    setGameHistory([]);
    setOtherNumber(1);
    setOtherSum(0);
    setOtherHistory([]);
  }

  return (
    <div>
      <Button onClick={handleRollClick}>던지기</Button>
      <Button onClick={handleClearClick}>처음부터</Button>
      <div>
        <Board name="나" color="blue" num={number} sum={sum} gameHistory={gameHistory} />
        <Board name="상대" color="red" num={otherNumber} sum={otherSum} gameHistory={otherGameHistory} />
      </div>
    </div>
  );
}

export default App;
