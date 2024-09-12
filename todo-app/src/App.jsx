import { useState } from "react";
import './App.css';

export default function App() {

  const [item, setItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e){
    e.preventDefault();

    setTodos(currentTodos => {
      return [...currentTodos, {id: crypto.randomUUID(), title: item, completed: false},
      ]
    })
    setItem("");
  };

  function handleDelete(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    });
  }

  function handleCheckboxChange(id) {
    setTodos(currentTodos =>
      currentTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  

  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={item} onChange={e => setItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn-add-item" > Add </button>
      </form>

        <h1 className="header">Todo List</h1>
        <div className="items">
        
          <ul className="list" type="none">
            {todos.map(todo => (
                <li key={todo.id}>
                  <label>
                  <input type="checkbox" checked={todo.completed} onChange={() => handleCheckboxChange(todo.id)}/> {todo.title} 
                  </label>
                  <button className="delete-btn" onClick={() => handleDelete(todo.id)}> Delete </button>
                </li>
              )
              )}
          </ul>
        
        </div>
    
    </>
    
  );
}
