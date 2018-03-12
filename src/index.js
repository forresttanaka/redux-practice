import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CartSummary from "./containers/cartsummary";
import AddToCart from "./containers/addtocart";
import DisplayItem from "./components/displayitem";
import cartApp from "./reducers/cartreducer";


// Database of items to add to the shopping cart.
const database = [
  {
    id: 0,
    name: "ENCSR000AAA"
  },
  {
    id: 1,
    name: "ENCSR001AAA"
  },
  {
    id: 2,
    name: "ENCSR002AAA"
  },
  {
    id: 3,
    name: "ENCSR003AAA"
  }
];


// Redux store initialization.
const initialCart = { cart: [] };
let store = createStore(cartApp, initialCart);


/* PRESENTATIONAL COMPONENTS */

// Button to select which item is the current item in the database.
class ItemSelectorButton extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.item.id);
  }

  render() {
    const { item, disabled } = this.props;

    return (
      <button disabled={disabled} onClick={this.onClick}>
        {item.name}
      </button>
    );
  }
}

// Section to display all database item selector buttons.
let ItemSelector = ({ database, currentExperiment, item, onItemClick }) => (
  <div>
    {database.map(item => (
      <ItemSelectorButton
        key={item.id}
        item={item}
        disabled={item.id === currentExperiment}
        onClick={onItemClick}
      />
    ))}
  </div>
);

/* Top-level app */
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentExperiment: 0, // Currently selected experiment in the database
    };
    this.onAddToCartClick = this.onAddToCartClick.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
  }

  onAddToCartClick() {
    // Handle an Add to Cart button click. Pushes the id of the current experiment to the end of
    // the cart.
    this.props.cart.push(this.state.currentExperiment);
  }

  onItemClick(experimentId) {
    // Handle a click in one of the experiment-selector buttons.
    this.setState({ currentExperiment: experimentId });
  }

  render() {
    const { database } = this.props;

    return (
      <div>
        <ItemSelector
          database={database}
          currentExperiment={this.state.currentExperiment}
          onItemClick={this.onItemClick}
        />
        <Provider store={store}>
          <div>
            <CartSummary />
            <AddToCart />
          </div>
        </Provider>
        <DisplayItem item={database[this.state.currentExperiment]} />
      </div>
    );
  }
}

render(
  <App database={database} cart={initialCart} />,
  document.getElementById("root")
);
