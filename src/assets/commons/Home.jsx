import React from "react";
import "./styles/Home.css"

const Home = () => {
    return (
        <div>
            <section className="banner">
                <h2>Bienvenido a nuestra tienda de videojuegos</h2>
                <p>Explora nuestra amplia selección de juegos y encuentra las últimas novedades.</p>
                <a href="#" className="cta-button">Ver juegos</a>
            </section>

            <section className="games">
                <h2>Últimos juegos destacados</h2>
                <div className="game-card">
                    <img src="./public/images/Halo.jfif" alt="Juego 1" />
                    <h3>Halo infinite</h3>
                    <p>Halo Infinite es un videojuego de disparos en primera persona de la franquicia de videojuegos de ciencia ficción creada por Bungie Studios y actualmente desarrollada por 343 Industries. Es exclusivo para las plataformas Xbox One, Microsoft Windows y Xbox Series X|S. El juego es desarrollado por 343 Industries y distribuido por Xbox Game Studios. El juego es secuela de la historia de Halo 5: Guardians y Halo Wars 2 pero catalogado por 343 Industries como un reinicio espiritual para la saga Halo, o el inicio de una nueva era de Halo, se sabe que será un juego con inspiración de mundo abierto recordando a Halo CE que tenía un factor de exploración pero que en secuelas se fue volviendo más lineal.
                        El jefe Maestro el gran héroe de la humanidad y personaje principal de la saga se enfrentara a un grupo sanguinario y temible que alguna vez fueron parte del Covenant llamados los Desterrados, estos fueron integrados desde Halo Wars 2 y en las novelas del universo de Halo, ahora debutando como la amenaza principal en Halo Infinite.</p>
                    <a href="#" className="buy-button">Comprar</a>
                </div>
                <div className="game-card">
                    <img src="game2.jpg" alt="Juego 2" />
                    <h3>Juego 2</h3>
                    <p>Descripción del juego 2.</p>
                    <a href="#" className="buy-button">Comprar</a>
                </div>
                {/* Agrega más juegos aquí */}
            </section>
        </div>
    );
};

export default Home;