import React from "react";
import { Link } from 'react-router-dom';




const Navegador = ()=>{

    return(
        <>
            <nav>
                <Link to={"/"}>
                    <h2>Inicio</h2>
                </Link>

                <Link to={"/juegos"}>
                    <h2>Juegos</h2>
                </Link> 

                <Link to={"/carrito"}>
                    <h2>Carrito</h2>
                </Link>

                <Link to={"https://youtu.be/dQw4w9WgXcQ"}>
                    <h2>Contacto</h2>
                </Link>
               
            </nav>
        </>
    )
};
export default Navegador;