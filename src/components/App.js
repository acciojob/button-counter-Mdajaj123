
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [a, fun] = useState(0);
  function increase() {
    fun(a + 1);
  }
  return (
    <div>
      <p>Button clicked {a} times</p>
      <button onClick={increase}>Click me</button>
    </div>
  )
}

export default App
