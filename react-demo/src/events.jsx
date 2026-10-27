

function Events() {
  function handleClick() {
    console.log('Button clicked!')
  }

  return (
    <div>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default Events