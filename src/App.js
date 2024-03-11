import './App.css';

import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const addItem = () => {
    if (inputText.trim() !== "") {
      if (editIndex !== null) {
        const updatedItems = [...items];
        updatedItems[editIndex].text = inputText;
        updatedItems[editIndex].updateCount++;
        setItems(updatedItems);
        setInputText("");
        setEditIndex(null);
      } else {
        setItems([...items, { text: inputText, updateCount: 0 }]);
        setInputText("");
      }
    }
  };

  const editItem = (index) => {
    setInputText(items[index].text);
    setEditIndex(index);
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Enter item"
      />
      <button onClick={addItem}>{editIndex !== null ? "Update" : "Add"}</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.text} (Updated {item.updateCount} times)
            <button onClick={() => editItem(index)}>Edit</button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;