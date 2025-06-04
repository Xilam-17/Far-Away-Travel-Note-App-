import React from "react";

const Stats = ({ items }) => {
  if (items.length === 0)
    return (
      <p className="stats">Start adding some items to your packing list 🧳</p>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage =
    numItems === 0 ? 0 : Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItems} items on your list and already packed ${packedItems} (${percentage}%).`}
      </em>
    </footer>
  );
};

export default Stats;
