import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import {
  addToLocalStorage,
  getStoredCart,
  removeFromLocalStorage,
} from "../../Utils/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [cart, setCart] = useState([]);
  const [bottles, setBottles] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  const handleAddToCart = (bottle) => {
    // this is state variable, we cannot just do cart.push(). First, we need to copy the elements of current curt. Then add the new elements.
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLocalStorage(bottle.id);
  };
  const handleRemoveFromCart = (id) => {
    // remove from visual cart
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    //remove from local storage
    removeFromLocalStorage(id);
  };

  //load cart from local storage
  useEffect(() => {
    console.log(bottles.length);
    if (bottles.length > 0) {
      const storedCart = getStoredCart();
      console.log(storedCart, bottles);
      // finding the bottles added in cart
      const savedCart = [];
      for (const id of storedCart) {
        console.log(id);
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      console.log(savedCart);
      setCart(savedCart);
    }
    //   }, []);
  }, [bottles]);
  // Why did we add the dependency i.e useEffect(()=>{...},[bottles])?
  // At first console.log(bottles.length) was showing 0. That's because when this useEffect was running, by that time, bottles array did not get updated. Moral: 2 useEffects work separately, not dependent on each other. That is why we set the dependency [bottles]. Now when bottles array get updated, this useEffect will run again, and console.log(bottles.length) will show output 10. This is the reason for this useEffect running twice.

  return (
    <>
      <h3>Check out these awesome {bottles.length} bottles!</h3>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </>
  );
};

export default Bottles;
