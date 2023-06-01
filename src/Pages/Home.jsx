import React from "react";
import './StylesPages/home.css'

const Home = () => {
    return (
        <div>

    <section className="banner">

        <div className="slider">
            <ul>
                <li><img src="https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2022/12/valorant-diciembre-2022-pase-gratis-evento-beta-swiftplay.jpg?w=1920&ssl=1" alt="" /></li>
                <li><img src="src\assets\commons\styles\Banner 2.png" alt="" /></li>
                <li><img src="src\assets\commons\styles\Banner 3.png" alt="" /></li>
            </ul>
        </div>
        <div className="Texto"> 
        <h2>Bienvenido a Mega Games</h2>
                <p> Estamos encantados de recibirte en nuestro mundo virtual lleno de emoción y aventuras. Aquí encontrarás todo lo que necesitas para satisfacer tu pasión por los juegos. Ya sea que te gusten  de acción, estrategia, aventuras o deportes, tenemos una amplia selección de títulos para todas las plataformas. Navega por nuestras estanterías digitales y descubre los últimos lanzamientos, clásicos atemporales y títulos exclusivos que te llevarán a mundos imaginarios y desafiantes.</p>

        </div>
        </section>
        
        </div>
    );
    }

export default Home;