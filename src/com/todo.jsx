import React, { useState, useEffect } from 'react';

export default function Todo() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) setTodo(savedTodos);
  }, []);

  const change = (e) => setText(e.target.value);

  const addTodo = () => {
    if (text.trim() !== '') {
      const newTodos = [...todo, text.trim()];
      setTodo(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
      setText('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todo.filter((_, i) => i !== index);
    setTodo(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <div className="min-h-screen bg-orange-100 flex flex-col items-center justify-start py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">📝 Todo List</h1>

      <div className="w-full max-w-md flex gap-2 mb-6">
        <input
          value={text}
          onChange={change}
          type="text"
          placeholder="Enter a task"
          className="flex-grow p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button
          onClick={addTodo}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md bg-white shadow-lg rounded-lg p-4 space-y-3">
        {todo.map((item, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                onChange={() => removeTodo(index)}
                className="w-5 h-5 text-cyan-600"
              />
              <span className="text-lg text-gray-700">{item}</span>
            </div>
            <button
              onClick={() => removeTodo(index)}
              className="text-sm text-red-500 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
