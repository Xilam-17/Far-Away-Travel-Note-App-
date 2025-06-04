import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

const App = () => {
  const [items, setItems] = useState([]);
  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
};

export default App;
