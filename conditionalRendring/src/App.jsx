/*From main Branch*/
import { useState } from "react";

import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setNumber(value);

    value % 2 === 0
      ? setResult(
          <span>
            {value} is an <span style={{ color: "green" }}>even </span>number.
          </span>
        )
      : setResult(
          <span>
            {value} is an <span style={{ color: "red" }}>odd </span>number.
          </span>
        );
  };

  return (
    <>
      <h1>conditional rendring</h1>
      <input style={{padding:6, marginBottom:20}} type="number" value={number} onChange={handleChange} />
      <div style={{fontWeight:"bold"}}>{result}</div>
    </>
  );
}

export default App;
