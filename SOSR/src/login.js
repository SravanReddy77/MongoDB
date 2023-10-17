import React, {useState, useEffect, Redirect} from "react";
import "./css/login.css"
import Homepage from "./homepage";
import { useNavigate } from "react-router-dom";
import Register from "./register";
import axios from "axios";


function Login () {
  const navigate = useNavigate();
    function handleSubmit  ()   {
        const configuration = {
            method: "post",
            url: "http://localhost:4000/login",
            data: {
              email,
              password,
            },
          };
          axios(configuration)
          .then((result) => {
            setLogin(true);
            navigate("/homepage");
          })
          .catch((error) => {
            error = new Error();
          });
          }
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
    return(
        <div className="body">
        <h1 className="header">Welcome to New Castle</h1>
            <h1 className="header">Login Page</h1>
            
            <input className = "input" type = "email" name = "email" value={email} placeholder="email" onChange ={(e) => setEmail(e.target.value)}/><br /><br/>
            <input className = "input" type = "password" name = "Password" value = {password} placeholder="Password" onChange ={(e) => setPassword(e.target.value)} /><br /><br/>
           <button className="button-5" type = "submit" onClick={(e) => handleSubmit(e)}> Login </button>
           <a href = "./register"> <button className="button-5" onClick={Register} type = "submit"> Register </button></a>
           {login ?   (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}
        </div>
    )
}

export default Login;