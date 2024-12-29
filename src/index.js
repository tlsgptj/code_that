import ReactDOM from "react-dom";


function handleClick() {
  console.log('가위바위보!');
}

ReactDOM.render(
  <>
    <h1 id="title">가위바위보</h1>
    <h2>{getResult(me, other)}</h2>
    <button onClick={handleClick}>가위</button>
    <button onClick={handleClick}>바위</button>
    <button onClick={handleClick}>보</button>
  </>
  , document.getElementById("root")
);
