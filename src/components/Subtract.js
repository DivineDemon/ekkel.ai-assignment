import React from 'react'

const Subtract = () => {
  return (
    <button onClick={() => {
      let counter = document.getElementById("counter");
      counter.innerHTML = parseInt(counter.textContent) - 1;
    }}>-</button>
  )
}

export default Subtract