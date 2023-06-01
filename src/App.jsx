
import './App.css'
import Header from './assets/commons/header'
import Footer from './assets/commons/Footer'
import Navegador from './assets/commons/Navegador'
import Home from './Pages/Home'
import ProductBasededatos from './assets/basedatos/ProductBasedatos';

function App() {
    return (
<div> 
<Header/>
<Navegador/>
<Home/>
{ProductBasededatos.map((producto) => (
        <h2 key={producto.juego}>Juego: {producto.juego}</h2>

      ))}
<Footer/>
</div>

    )
}

export default App
