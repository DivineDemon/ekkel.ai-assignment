import React from 'react'

const Add = () => {
  return (
    <button onClick={() => {
      let counter = document.getElementById("counter");
      counter.innerHTML = parseInt(counter.textContent) + 1;
    }}>+</button>
  )
}

export default Add