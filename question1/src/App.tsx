import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="counter-app">
      <h1>Counter Application</h1>
      <div className="count-display">
        <h2>{count}</h2>
      </div>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  )
}

export default App
