import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CartSummary from "./containers/cartsummary";
import AddToCart from "./containers/addtocart";
import DisplayItem from "./components/displayitem";
import cartApp from "./reducers/cartreducer";

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

const initialCart = { cart: [] };

let store = createStore(cartApp, initialCart);

/* PRESENTATIONAL COMPONENTS */
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
// Right now the only things that care about the cart are CartSummary
// and AddToCart.

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentExperiment: 0
    };
    this.onAddToCartClick = this.onAddToCartClick.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
  }

  onAddToCartClick() {
    this.props.cart.push(this.state.currentExperiment);
  }

  onItemClick(experimentId) {
    this.setState({ currentExperiment: experimentId });
  }

  render() {
    const { database } = this.props;

    return (
      <div>
        <Provider store={store}>
          <div>
            <ItemSelector
              database={database}
              currentExperiment={this.state.currentExperiment}
              onItemClick={this.onItemClick}
            />
            <CartSummary />
            <AddToCart />
            <DisplayItem item={database[this.state.currentExperiment]} />
          </div>
        </Provider>
      </div>
    );
  }
}

render(
  <App database={database} cart={initialCart} />,
  document.getElementById("root")
);
