import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Homepage from "./homepage";
import Register from "./register";


 function Routing () {
    return (
        <BrowserRouter>
        <Routes>
        <Route path = "/login" element= {<Login />} />
        <Route path = "/register" element= {<Register />} />
        <Route path = "/homepage" element= {<Homepage />} />
        </Routes>
        
        </BrowserRouter>
    )
}
export default Routing;