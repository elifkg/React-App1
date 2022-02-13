import React from 'react'
import './topbar.css'
import { Link } from 'react-router-dom';

export default function Topbar() {

   const user= true;
    return (
        <div div className="top">
            
              <div className="topleft">
              <i  className= "topbarIcon fab fa-facebook-square"></i>
              <i className="topbarIcon fab fa-twitter"></i>
              <i className="topbarIcon fa-brands fa-instagram"></i>
              </div>
                <div className="topcenter"></div>
                <ul className="topList">

                <li className="toplistItem"> <Link to="/" className="link">HOME</Link>  </li>
                <li className="toplistItem"> <Link to="/register" className="link">REGISTER</Link> </li>
                <li className="toplistItem"> <Link to="/login" className="link">LOGIN</Link> </li>
                <li className="toplistItem"> <Link to="/write" className="link">WRITE</Link> </li>
                <li classname="toplistItem">
                  {user && "logout"}
                </li>
                </ul>

                   <div className="topright">
                   <img className="topimage" src="logo192.png " alt=""
                   
                  />
                    <i className="topSearchIcon fas fa-search"></i>
                     
                   </div>
                     </div>
    )
}
