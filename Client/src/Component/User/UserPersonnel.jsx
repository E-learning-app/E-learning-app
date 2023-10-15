import React, { useState } from 'react';
import { useTodoContext } from './TodoContext';

const UserPersonnel = () => {
  const { todos, setTodos } = useTodoContext();
  const [todoInput, setTodoInput] = useState('');

  const addTodo = () => {
    if (todoInput.trim() !== '') {
      setTodos([...todos, todoInput]);
      setTodoInput('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2 style={{ fontSize: '24px' }}>Todo List</h2>
      <div style={{ marginTop: '10px' }}>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Add a new todo"
          style={{ padding: '5px', marginRight: '10px' }}
        />
        <button
          onClick={addTodo}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            cursor: 'pointer',
          }}
        >
          Add
        </button>
      </div>
      <ul style={{ listStyleType: 'none', padding: '0', textAlign: 'center' }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              border: '1px solid #ccc',
              padding: '10px',
              marginTop: '10px',
            }}
          >
            {todo}
            <button
              onClick={() => removeTodo(index)}
              style={{
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                cursor: 'pointer',
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPersonnel;
