import React from 'react'
import ProductBasededatos from './ProductBasedatos'
import './StylesPages/Juegos.css'


const ProductList = () => {
  return (
    <div className="container-items">
        {ProductBasededatos.map(product => (
            <div className='item' key= {product.id}>

                <figure>
					<img
						src={product.foto}
						alt={product.juego}
					/>
				</figure>

				<div className="info-product">
					<h2>{product.juego}</h2>
					<p className="precio">${product.precio}</p>
					<button className="btn-add-cart">Añadir al carrito</button>
				</div>

            </div>
        ))}</div>
  )
}

export default ProductList