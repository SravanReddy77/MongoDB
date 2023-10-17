import React, {useState, useEffect} from "react";
import axios from "axios";
import "./css/homepage.css"

function Homepage () {
    const [users, setUsers] = useState(null);
    const [count, setCount] = useState(0);
        const configuration = {
            method: "get",
            url: "http://localhost:4000/users",
          };
          axios(configuration)
          .then((result) => {

            setUsers(result);
          })
          .catch((error) => {
            error = new Error();
          });
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 1000);
    

    return(
        <div className="homebody">
            <h1>Home Page</h1>
            {
                users.result ? users.result.map = (email, username) => {
                 var Email  =users.result.email;
                }: null
            }
        </div>
    )
}

export default Homepage;