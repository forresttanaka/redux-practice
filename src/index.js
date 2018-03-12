import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CartSummary from "./components/cartsummary";
import AddToCart from "./components/addtocart";
import { cartApp } from "./reducers/cartreducer";


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
/* These presentational components do not exist within the Redux world -- they keep their own state
   and use global data instead of data in the store. */

// Button to select an experiment in the database to make the current one..
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
const ItemSelector = ({ database, currentExperiment, item, onItemClick }) => (
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

const DisplayItem = ({ item }) => (
  <div>
    <h3>{item.name}</h3>
    <p>ID: {item.id}</p>
  </div>
);

// Top-level app.
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentExperiment: 0, // Currently selected experiment in the database
    };
    this.onItemClick = this.onItemClick.bind(this);
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
            <AddToCart currentExperiment={this.state.currentExperiment} />
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
