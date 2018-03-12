import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CartSummaryComponent = ({ cart }) => (
    <div>
        <h2>{cart.length} cart entries</h2>
        <div>
            {cart.join(', ')}
        </div>
    </div>
);

CartSummaryComponent.propTypes = {
    cart: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({ cart: state.cart });

const CartSummary = connect(mapStateToProps)(CartSummaryComponent);

export default CartSummary;
