import React from "react";

const Items = ({ item: { id, description, quantity, packed } }) => {
  return (
    <li>
      <input type="checkbox" />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button>❌</button>
    </li>
  );
};

export default Items;
