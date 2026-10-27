

function StudentCard(props) {
  return (
    <div style={{border: "1px solid black", width: "200px", height: "200px"}}>
      <h1>Student Card</h1>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
      {props.name2 && <h4>Name2: {props.name2}</h4>}
    </div>
  )
}

export default StudentCard
