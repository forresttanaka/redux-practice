import React from "react";
import { connect } from "react-redux";

let CartSummary = ({ cart }) => (
  <div>
    <h2>{cart.length} cart entries</h2>
    <div>
      {cart.join(', ')}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

CartSummary = connect(mapStateToProps)(CartSummary);

export default CartSummary;
