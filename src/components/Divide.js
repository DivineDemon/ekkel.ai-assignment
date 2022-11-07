import React from 'react'

const Divide = () => {
  return (
    <button onClick={() => {
      let counter = document.getElementById("counter");
      let divider = parseInt(counter.textContent);
      counter.innerHTML = parseInt(counter.textContent) / divider;
    }}>/</button>
  )
}

export default Divide