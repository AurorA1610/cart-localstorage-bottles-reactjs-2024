import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className="cart-container">
      <h4>Bottles in your cart: {cart.length}</h4>
      <div className="cart">
        {cart.map((bottle) => (
          <div>
            <img src={bottle.img} alt="" />
            <h3>{bottle.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
