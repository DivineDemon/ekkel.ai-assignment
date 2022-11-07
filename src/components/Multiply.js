import React from 'react'

const Multiply = () => {
  return (
    <button onClick={() => {
      let counter = document.getElementById("counter");
      let multiplier = parseInt(counter.textContent);
      counter.innerHTML = parseInt(counter.textContent) * multiplier;
    }}>*</button>
  )
}

export default Multiply;