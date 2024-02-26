import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div className="cart-container">
      <h4>Bottles in your cart: {cart.length}</h4>
      <div className="cart">
        {cart.map((bottle, index) => (
          <div key={index}>
            <img src={bottle.img} alt="" />
            <h3>{bottle.name}</h3>
            <button
              onClick={() => {
                handleRemoveFromCart(bottle.id);
              }}
            >
              Remove item
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
