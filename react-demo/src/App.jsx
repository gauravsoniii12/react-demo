
import StudentCard from './studentcard'

function App() {
  let name = "gaurav"
  return (
    <div>
      <div>
      <h1>Hello React {name}</h1>
      <StudentCard name="gaurav" email="gaurav@example.com" />
      <StudentCard name="john" email="john@example.com" />
      <StudentCard name2="monika"/>
      </div>
    </div>
  )
}

export default App
