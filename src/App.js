import "./styles.css";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [state, setState] = useState([
    { id: 1, name: "abc" },
    { id: 2, name: "pqr" },
    { id: 3, name: "xyz" }
  ]);

  const [input, setInput] = useState("");
  return (
    <div className="App">
      <h1>List component</h1>
      <ul>
        {state.map((e1, i) => (
          <li key={e1.id}>{e1.name}</li>
        ))}
      </ul>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={(e) => {
          setState([...state, ...[{ id: uuidv4(), name: input }]]);
          setInput("");
        }}
      >
        Add user
      </button>
    </div>
  );
}
