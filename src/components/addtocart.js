import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart } from '../reducers/cartreducer';

// Button to add the current experiment to the cart.
const AddToCartComponent = ({ onAddToCartClick }) => (
    <button onClick={onAddToCartClick}>Add to Cart</button>
);

AddToCartComponent.propTypes = {
    onAddToCartClick: PropTypes.func, //  Function to call when Add to Cart clicked
};

AddToCartComponent.defaultProps = {
    onAddToCartClick: null,
};

const mapDispatchToProps = (dispatch, ownProps) => (
    { onAddToCartClick: () => dispatch(addToCart(ownProps.currentExperiment)) }
);

const AddToCart = connect(null, mapDispatchToProps)(AddToCartComponent);

export default AddToCart;
