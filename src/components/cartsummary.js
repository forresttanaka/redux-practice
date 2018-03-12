import React from "react";

const CartSummaryComponent = ({ cart }) => (
  <div>
    <h2>{cart.length} cart entries</h2>
    <div>
      {cart.join(', ')}
    </div>
  </div>
);

export default CartSummaryComponent;
