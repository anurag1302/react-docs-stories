import { useState } from "react";
import Square from "./components/Square";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const arr = Array.from(Array(9), (_, i) => i + 1);

  return (
    <>
      <h1>Tic Tac Toe</h1>
      {/* {arr.map((item) => {
        return <Square key={item} />;
      })} */}
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

export default App;
