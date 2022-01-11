import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [value, setValue] = useState("ntrcn");

  return (
    <div>
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <br />

      <Counter />
    </div>
  );
}

export default App;
