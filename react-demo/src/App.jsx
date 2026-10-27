import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  function handleClick() {
    setCount(count + 1)
  }
  function handleChange(e){
    setText(e.target.value)
  }
  function handleReset() {
    setCount(0)
  }
  function handleResetText() {
    setText('')
  }

  return (
    <div className="App">
      <div className="counter">
      <p>You clicked {count} times</p>
       <button onClick={handleClick}>
        Click me
      </button> 
      <button onClick={handleReset}>
        Reset
      </button>
      </div>
      <div className="text-input">
      <input type="text" value={text} onChange={handleChange} />  
      <h1>{text}</h1>
      <button onClick={handleResetText}>
        Reset Text
      </button>
      </div>
    </div>
  )
}

export default App
