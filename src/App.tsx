import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);

  const onText = (e: any) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    setVisible(true);
  };

  return (
    <div className="App">
      <input type="text" onChange={onText} />
      <button onClick={handleClick}>Show</button>
      <br />
      {visible && <p>{text}</p>}
    </div>
  );
}

export default App;
