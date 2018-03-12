import { connect } from "react-redux";
import AddToCartComponent from "../components/addtocart";
import { addToCart } from "../actions/actions";

const mapDispatchToProps = dispatch => (
  { onAddToCartClick: id => dispatch(addToCart(id)) }
);

const AddToCart = connect(
  null,
  mapDispatchToProps
)(AddToCartComponent);

export default AddToCart;
