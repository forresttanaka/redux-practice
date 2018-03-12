/* REDUX ACTION TYPES */
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

/* REDUX ACTION CREATORS */
export function addToCart(id) {
  return { type: ADD_TO_CART, id };
}

export function removeFromCart(id) {
  return { type: REMOVE_FROM_CART, id };
}
