import React from "react";
import Items from "./Items";

const PackingList = ({ items, onDeleteitem, onToggleitem }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Items
            key={item.id}
            item={item}
            onDeleteitem={onDeleteitem}
            onToggleitem={onToggleitem}
          />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
