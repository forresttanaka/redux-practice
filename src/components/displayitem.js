import React from "react";

const DisplayItem = ({ item }) => (
  <div>
    <h3>{item.name}</h3>
    <p>ID: {item.id}</p>
  </div>
);

export default DisplayItem;
