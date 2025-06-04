import React from "react";

const Items = ({
  item: { id, description, quantity, packed },
  onDeleteitem,
  onToggleitem,
}) => {
  return (
    <li>
      <input type="checkbox" value={packed} onChange={() => onToggleitem(id)} />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteitem(id)}>❌</button>
    </li>
  );
};

export default Items;
