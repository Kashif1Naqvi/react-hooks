import React,{useState} from 'react';
import './App.css';

function App() {
  let [counter,setCounter,] = useState(0)
 let increment = () => {
    (counter >= 10) ?  alert("greater than 10 number's not allowed") : setCounter(counter + 1)
  }
let decrement = () => {
  (counter <= 0) ?  alert("greater than 0 number's allowed") : setCounter(counter - 1)
}
  return (
    <div className="App">
      <header className="App-header">
      <button
          onClick={increment}
          className="btn btn-primary"
        >
          increment
        </button><br />
        <p>
          counter is: {counter}
        </p>
        <br />
        <button
          onClick={decrement}
          className="btn btn-primary"
        >
          decrement
        </button>
      </header>
    </div>
  );
 
 
}

export default App;
