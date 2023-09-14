import React, {useState} from "react";
import Login from "./login";
import { redirect } from "react-router-dom";

function Register () {
const [username, setUsername] = useState();
const [password, setPassword] = useState();
const [email, setEmail] = useState();
const [register, setRegister] = useState(false);
const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
        method: "post",
        url: "./",
        data: {
          email,
          password,
        },
      };
  }
    return(
        <div className="body">
        <div className="mainclass">
            <h1 className="header">Register Page</h1>
            
            <input className = "input" type = "text" name = "Username" placeholder="Username" onChange = {(e) => setUsername(e.target.value)}/><br /><br/>
            <input className = "input" type = "text" name = "Email" placeholder="Email"onChange = {(e) => setEmail(e.target.value)}/><br /><br/>
            <input className = "input" type = "password" name = "Password" placeholder="Password" onChange = {(e) => setPassword(e.target.value)}/><br /><br/>
           <a href = "./"> <button className="button-5" onClick={(e) => handleSubmit(e)} type = "submit"> Submit </button></a>

        </div>
        </div>
    )
}


export default Register;