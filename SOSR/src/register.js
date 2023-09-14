import React, {useState} from "react";
import Login from "./login";
import { redirect } from "react-router-dom";
import axios from "axios";

function Register () {
const [username, setUsername] = useState();
const [password, setPassword] = useState();
const [email, setEmail] = useState();
const [register, setRegister] = useState(false);
const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "http://localhost:4000/register",
      data: {
        email,
        password,
        username,
      },
    };
    axios(configuration)
    .then((result) => {
      setRegister(true);
    })
    .catch((error) => {
      error = new Error();
    });

  }
    return(
        <div className="body">
        <div className="mainclass">
            <h1 className="header">Register Page</h1>
            
            <input className = "input" type = "text" name = "Username" placeholder="Username" value={username} onChange = {(e) => setUsername(e.target.value)}/><br /><br/>
            <input className = "input" type = "text" name = "Email" placeholder="Email" value={email} onChange = {(e) => setEmail(e.target.value)}/><br /><br/>
            <input className = "input" type = "password" name = "Password" placeholder="Password" value = {password} onChange = {(e) => setPassword(e.target.value)}/><br /><br/>
           <a href = "./"> <button className="button-5" onClick={(e) => handleSubmit(e)} type = "submit"> Submit </button></a>
           {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}
        </div>
        </div>
    ) 
}


export default Register;