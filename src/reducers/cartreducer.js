/* REDUX REDUCERS */
const cartApp = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (!state.cart) {
        return { cart: [action.id] };
      }
      return { cart: state.cart.concat([action.id]) };
    case "REMOVE_FROM_CART":
      const doomedIndex = state.cart.indexOf(action.id);
      if (doomedIndex !== -1) {
        return {
          cart: state.cart
            .slice(0, doomedIndex)
            .concat(state.cart.slice(doomedIndex + 1))
        };
      }
      return state;
    default:
      return state;
  }
};

export default cartApp;
