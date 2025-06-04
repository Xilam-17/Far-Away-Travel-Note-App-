import React from "react";
import Items from "./Items";

const PackingList = ({ items }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Items key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
