import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { addToCart } from "../reducers/cartreducer";

// Button to add the current experiment to the cart.
let AddToCart = ({ onAddToCartClick }) => (
  <button onClick={onAddToCartClick}>Add to Cart</button>
);

AddToCart.propTypes = {
  onAddToCartClick: PropTypes.func, //  Function to call when Add to Cart clicked
};

AddToCart.defaultProps = {
  onAddToCartClick: null,
};

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onAddToCartClick: id => {
      return dispatch(addToCart(ownProps.currentExperiment));
    }
  }
);

AddToCart = connect(null, mapDispatchToProps)(AddToCart);

export default AddToCart;
