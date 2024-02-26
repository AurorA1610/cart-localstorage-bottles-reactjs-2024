import React from "react";
import "./Bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, price, img } = bottle;
  return (
    <div className="bottle">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>price: ${price}</p>
      {/* <button onClick={handleAddToCart}>Purchase</button>
            Here we cannot track which item is added. we cannot write onClick={handleAddToCart()} because it will call the function before even clicking on the button. So we create an anonymous function to call this function. See next line.
      */}
      <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};

export default Bottle;
