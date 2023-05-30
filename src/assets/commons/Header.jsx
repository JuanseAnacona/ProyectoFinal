import React from "react";
import './styles/Header.css';
import logo from '/public/images/logo.png'



const Header = () => {
    return (
        <header> 
            <div className="Header">
            <img src={logo} alt="logo" /> <h1>Videojuegos</h1>
            <p>
                
            </p>
           
            </div>
        
        </header>
        
    );
}


export default Header;

