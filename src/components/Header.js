import React from "react";
import "./Header.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

const Header = () => {
  return (
    <header className="header" >
        
        <h6  className="text" onClick={()=>{window.open('https://www.geektrust.in')}}>GeekTrust Home</h6>
    
        <h6 className="text" onClick={()=>{window.location.reload()}} >Reset</h6>
    
      
    </header>
  );
};

export default Header;
