import React from "react";
import "./styles/Footer.css";
import ContactForm from "./Form";





const Footer = () => {
    return (
        <footer> 
            <div className="Footer">
                <p>
                    Mega Games 2023 Todos los derechos reservados
                </p>
                <ContactForm/>
            </div>
        
        </footer>
        
    );
}


export default Footer;