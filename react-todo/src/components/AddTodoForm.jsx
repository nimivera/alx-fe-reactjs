import React, { useState } from "react";

export default function AddTodoForm({ onAdd }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
