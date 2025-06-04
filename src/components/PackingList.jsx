import React, { useState } from "react";
import Items from "./Items";

const PackingList = ({ items, onDeleteitem, onToggleitem, onClearList }) => {
  const [sortBy, setSortBy] = useState("all");
  let sortedItems;

  if (sortBy === "all") sortedItems = items;
  if (sortBy === "packed") sortedItems = items.filter((item) => item.packed);
  if (sortBy === "unpacked") sortedItems = items.filter((item) => !item.packed);
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Items
            key={item.id}
            item={item}
            onDeleteitem={onDeleteitem}
            onToggleitem={onToggleitem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="all">All</option>
          <option value="packed">Packed</option>
          <option value="unpacked">Unpacked</option>
          <option value="description">Description</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
};

export default PackingList;
