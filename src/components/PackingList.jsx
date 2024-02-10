import "../styles/packing-lists.module.css";
import { useState } from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function FarAway() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(itemId) {
    // Filter out the item with the specified ID
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  }

  return (
    <div className="main-app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <LuggageList items={items} onDeleteItem={handleDeleteItem} />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h2>To-do List 📋</h2>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("1");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity: Number(quantity),
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);

    setDescription("");
    setQuantity("1");
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }

  return (
    <form className="" onSubmit={handleSubmit}>
      <p>Add an item and quantity to your to-do list</p>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onKeyPress={handleKeyPress} // Call handleKeyPress on Enter key press
      />
      <button type="submit">Add</button>
    </form>
  );
}

function LuggageList({ items, onDeleteItem }) {
  return (
    <div className="todo-item">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem }) {
  return (
    <li>
      <button onClick={() => onDeleteItem(item.id)}>❎</button>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
    </li>
  );
}

function Stats({ items }) {
  return (
    <footer className="">
      <em> You have {items.length} items on your list.</em>
    </footer>
  );
}
