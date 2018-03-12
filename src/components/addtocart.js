import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../reducers/cartreducer";

let AddToCart = ({ onAddToCartClick }) => (
  <button onClick={onAddToCartClick}>Add to Cart</button>
);

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onAddToCartClick: id => {
      return dispatch(addToCart(ownProps.currentExperiment));
    }
  }
);

AddToCart = connect(null, mapDispatchToProps)(AddToCart);

export default AddToCart;
