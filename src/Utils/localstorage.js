const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};
const addToLocalStorage = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  //   save to local storage
  saveCartToLocalStorage(cart);
};
const removeFromLocalStorage = (id) => {
  const cart = getStoredCart();
  const remaining = cart.filter((idx) => idx !== id);
  saveCartToLocalStorage(remaining);
};
const saveCartToLocalStorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

export { addToLocalStorage, getStoredCart, removeFromLocalStorage };
