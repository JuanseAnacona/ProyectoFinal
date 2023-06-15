import React from "react";
import CartItem from "./CartItem";

const CartList = ({
  cartItems,
  handleAddItemToCart,
  handleRemoveItemFromCart,
}) => {
  const calculateTotal = cartItems.reduce(
    (sum, item) => sum + item.amount * item.price,
    0
  );

  return (
    <aside>
      <h1>Carrito de compras</h1>
      {cartItems.length === 0 ? (
        <h3>No hay productos agregados al carrito todavía...</h3>
      ) : null}
      <div>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
          />
        ))}
      </div>
      <h2>Total: {calculateTotal.toFixed(2)}</h2>
    </aside>
  );
};

export default CartList;
