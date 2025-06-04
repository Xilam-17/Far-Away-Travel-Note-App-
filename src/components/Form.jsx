import React, { useState } from "react";

const Form = ({ onAddItem }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItem(newItem);
    setDescription("");
    setQuantity("");
  };
  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>📃 What do you need for your trip?</h3>
      <input
        type="number"
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Items.."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
