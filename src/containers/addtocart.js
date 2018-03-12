import { connect } from "react-redux";
import AddToCartComponent from "../components/addtocart";
import { addToCart } from "../actions/actions";

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onAddToCartClick: id => {
      return dispatch(addToCart(ownProps.currentExperiment));
    }
  }
);

const AddToCart = connect(
  null,
  mapDispatchToProps
)(AddToCartComponent);

export default AddToCart;
