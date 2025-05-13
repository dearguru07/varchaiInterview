import { useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState("");
  const [text, setText] = useState("");
  const handleBtn = (data) => {
    setData(data);
  };
  return (
    <div className="App">
      <label> Enter a Text :</label>
      <input
        type="text"
        onChange={(e) => {
          handleBtn(e.target.value);
        }}
        value={data}
      />
      <button
        onClick={() => {
          setText((prev) => (prev, data));
        }}
      >
        Submit
      </button>
      <h5>{text}</h5>
    </div>
  );
}
