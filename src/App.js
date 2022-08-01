import {useState} from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([
    {name: 'Buy shopping', priority: 'high'},
    {name: 'Clean bathroom', priority: 'low'},
    {name: 'Feed dog', priority: 'low'},        
  ]);

  const [newTodo, setNewTodo] = useState('');
  const [newPriority, setNewPriority] = useState();

  const todoNodes = todos.map( (todo, index) => {
    return (
      <li key={index} className={todo.priority==='high' ? 'high-priority' : 'low-priority'}>
        <span>
          {todo.name}
        </span>
      </li>
    );
  });

  const handleTodoInput = (event) => {
    setNewTodo(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setNewPriority(event.target.value);
  };

  const saveNewTodo = (event) => {
    event.preventDefault();
    const copyTodo = [...todos];
    copyTodo.push({
      name: newTodo,
      priority: newPriority
    });
    setTodos(copyTodo);
    setNewTodo('');
  }

  return (
    <>
      <h1>Todo List</h1>
      <hr></hr>

      <form onSubmit={saveNewTodo}>
        <label htmlFor='new-todo'></label>

        <input id='new-todo' type='text' value={newTodo} onChange={handleTodoInput}/>

        <label htmlFor='high-priority'>High Priority</label>
        <input id='high-priority' type='radio' name='priority' value='high' onChange={handlePriorityChange}/>

        <label htmlFor='low-priority'>Low Priority</label>
        <input id='low-priority' type='radio' name='priority' value='low' onChange={handlePriorityChange}/>

        <input type='submit' value='Save item'/>
      </form>

      <ul>
        {todoNodes}
      </ul>
    </>
  );
};

export default App;
