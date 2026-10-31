import { useState } from "react";

function Create() {
    let init = {
        email: "",
        password: ""
    }
    const [user, setUser] = useState([]);
    const [form, setForm] = useState(init);

    function handleSubmit(e) {
        e.preventDefault();
        setUser([...user, form]);
        console.log(user);
    }

function HandleChange(e) {
    let {name, value } = e.target;
    setForm({
        ...form,
        [name]: value
    })

}


  return (
    <div style={{ border: '1px solid #000000', padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <input name="email" onChange={HandleChange} type="text" placeholder="Enter email" />
        <br />
        <input name="password" onChange={HandleChange} type="text" placeholder="Enter password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Create
