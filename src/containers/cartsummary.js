import { connect } from "react-redux";
import CartSummaryComponent from "../components/cartsummary";

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const CartSummary = connect(mapStateToProps)(CartSummaryComponent);

export default CartSummary;
