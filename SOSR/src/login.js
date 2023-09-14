import React from "react";
import "./css/login.css"
import Homepage from "./homepage";
import Register from "./register";

function Login () {
    function Submit  ()   {
         alert("You are logged in!")
    }
    return(
        <div className="body">
        <div className="mainclass">
        <h1 className="header">Welcome to New Castle</h1>
            <h1 className="header">Login Page</h1>
            
            <input className = "input" type = "text" name = "Username" placeholder="Username"/><br /><br/>
            <input className = "input" type = "password" name = "Password" placeholder="Password" /><br /><br/>
           <a href = "./homepage"> <button className="button-5" onClick={Homepage} type = "submit"> Submit </button></a>
           <a href = "./register"> <button className="button-5" onClick={Register} type = "submit"> Register </button></a><br /><br/><br /><br/><br /><br/><br /><br/><br/>
        </div>
        </div>
    )
}

export default Login;