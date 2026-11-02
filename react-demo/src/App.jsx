// import Create from "./create.jsx"
// import List from "./list.jsx"
import { useState, useEffect } from "react";


function App() {
  const [data, setData] = useState(0);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log("useEffect called");
  },[flag]);
  return (
    <div className="App">
      <h1>hello we are learning forms</h1>
      {/* <Create /> */}
      {/* {<List />} */}
      <h1>{data}</h1>
      <button onClick={() => setData(data + 1)}>click me</button>
      <h1>{flag && "squad 169 and 168"}</h1>
      <button onClick={() => setFlag(!flag)}>Toggle Flag</button>
    </div>
  )
}

export default App
