import {BrowserRouter as Router, Route, Routes,useLocation} from "react-router-dom";
import React from "react";
import Form from "./com/Form";
import Nav from "./com/Nav";
import Todo from "./com/todo";
import Tod from "./com/Todoit";
import Fot from "./com/Footer";
import LOG from "./com/Login";
import Add from "./com/addimg";
import Home from "./app/Home";
import AppN from "./app/Navh";
import Order from "./app/order";
import User_login from "./app/User_login";
import User_sign from "./app/User_sign";
import Prof from "./app/Profile";

  function Appcont() {
    const location = useLocation();

  return (
    <>
    {/*Show Nav only on home page*/}
       {location.pathname === "/" && <AppN/>}

    
       {/*Show Nav only on specific pages*/}
        {location.pathname !== "/" && location.pathname !== "/form" && 
        location.pathname !=="/user_login" && location.pathname !=="/user_sign" &&
        location.pathname !=="/login" && location.pathname !=="/order" && location.pathname !=="/profile" && <Nav/> }
        
        <Routes>
          <Route path="/" element={<Home/>} />

          <Route path="/login" element={<LOG/>} />
          <Route path="/todo" element={<Todo/>} />
          <Route path="/todoit" element={<Tod/>} />
          <Route path="/form" element={<Form/>} />
          <Route path="/addimg" element={<Add/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/user_login" element={<User_login/>} />
          <Route path="/user_sign" element={<User_sign/>} />
          <Route path="/profile" element={<Prof/>} />
        </Routes>
        {/*Show footer only on home page*/}
      {location.pathname !=="/login" && <Fot/>}
      
      
      
    
  
    </>
  );
}
export default function App() {
  return <Appcont />;  // ✅ No <Router> here
}

