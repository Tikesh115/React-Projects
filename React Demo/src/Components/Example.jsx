import React from "react";
import { useState } from "react";

const Example = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });

  const handleChange = (event) => {
    setName(event.target.value);
  }

  const handleClear = () => setName("");

  return (
    <div>
      <h1>Your Name: {name}</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Write your Name"
      />
      <button onClick={handleClear}>Clear Name</button>
    </div>
  );
};

export default Example;
