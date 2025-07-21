import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    if (count == 20) {
      alert("must less than 20");
    } else {
      setCount(count + 1);
    }
  };
  const removeValue = () => {
    if (count == 0) {
      alert("must be above 0");
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1> Sarker says hi you {count} times</h1>
      <button onClick={addValue}> add one more</button>
      <button onClick={removeValue}> add one more</button>
    </>
  );
}

export default App;
