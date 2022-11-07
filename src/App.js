import React from "react";

// Arithmetic Components
import Add from './components/Add';
import Subtract from './components/Subtract';
import Multiply from './components/Multiply';
import Divide from './components/Divide';


function App() {
  return (
    <div className="App">
      <h1 id="counter">0</h1>
      <div>
        <Add />
        <Subtract />
        <Multiply />
        <Divide />
      </div>
    </div>
  );
}

export default App;
