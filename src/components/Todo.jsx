import React, { useState, useEffect } from 'react';

// Main App component
const Todo = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState(() => {
    // Initialize state from localStorage
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [isEdit, setIsEdit] = useState(false);
  const [editTodoId, setEditTodoId] = useState(null);
  const [message, setMessage] = useState('');

  // Save todos to localStorage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Handle message display
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTask = task.trim();
    if (!trimmedTask) {
      setMessage("Task cannot be empty!");
      return;
    }

    if (isEdit) {
      // Update existing task
      setTodos(todos.map(todo => 
        todo.id === editTodoId ? { ...todo, text: trimmedTask } : todo
      ));
      setIsEdit(false);
      setEditTodoId(null);
    } else {
      // Add new task
      const newTodo = {
        id: Date.now(),
        text: trimmedTask,
        completed: false,
      };
      setTodos([newTodo, ...todos]);
    }
    setTask('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = (todo) => {
    setIsEdit(true);
    setEditTodoId(todo.id);
    setTask(todo.text);
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl p-6 md:p-8 transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6 font-sans">
          <span className="text-blue-600">My</span> To-Do List
        </h1>

        {message && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg text-center mb-4 transition-all duration-300">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              className="flex-grow p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              placeholder="Add or edit a task..."
              value={task}
              onChange={handleTaskChange}
            />
            <button
              type="submit"
              className={`p-2 rounded-lg text-white font-semibold transition-all duration-300 ease-in-out ${
                isEdit ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              {isEdit ? 'Update' : 'Add'}
            </button>
          </div>
        </form>

        <ul className="space-y-4">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <li
                key={todo.id}
                className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center justify-between transition-transform transform hover:scale-[1.01]"
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleComplete(todo.id)}
                    className="form-checkbox h-5 w-5 text-blue-500 rounded-md transition-colors cursor-pointer"
                  />
                  <span 
                    className={`text-lg font-medium text-gray-800 ${
                      todo.completed ? 'line-through text-gray-400' : ''
                    }`}
                  >
                    {todo.text}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(todo)}
                    className="p-2 bg-yellow-400 text-white rounded-full hover:bg-yellow-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    title="Edit"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zm-3.5 3.5a1 1 0 011.414 0L15 10.586V14h3v3h-3v3H9.414L6 16.586l.707-.707a1 1 0 011.414 0l1.414 1.414 2.121-2.121 2.122 2.121-2.121 2.121-2.828-2.828a1 1 0 010-1.414l2.828-2.828z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="p-2 bg-red-400 text-white rounded-full hover:bg-red-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                    title="Delete"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">No tasks yet. Get started by adding one above!</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
