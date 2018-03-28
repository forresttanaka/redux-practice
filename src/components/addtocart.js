import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../reducers/cartreducer';

// Button to add the current experiment to the cart.
const CartAddRemoveComponent = ({ onAddToCartClick, onRemoveFromCartClick, cart, currentExperiment }) => {
    const experimentInCart = cart.indexOf(currentExperiment) > -1;
    if (experimentInCart) {
        return <button onClick={onRemoveFromCartClick}>Remove From Cart</button>;
    }
    return <button onClick={onAddToCartClick}>Add to Cart</button>;
};

CartAddRemoveComponent.propTypes = {
    onAddToCartClick: PropTypes.func, //  Function to call when Add to Cart clicked
    cart: PropTypes.array,
};

CartAddRemoveComponent.defaultProps = {
    onAddToCartClick: null,
    cart: [],
};

const mapStateToProps = (state, ownProps) => ({ cart: state.cart, currentExperiment: ownProps.currentExperiment });
const mapDispatchToProps = (dispatch, ownProps) => (
    {
        onAddToCartClick: () => dispatch(addToCart(ownProps.currentExperiment)),
        onRemoveFromCartClick: () => dispatch(removeFromCart(ownProps.currentExperiment)),
    }
);

const CartAddRemove = connect(mapStateToProps, mapDispatchToProps)(CartAddRemoveComponent);

export default CartAddRemove;
