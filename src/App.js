import React from 'react';
import './App.css';
import Search from './components/Search.js'
import {Input, Button, Icon,} from 'semantic-ui-react'
import Todolist from './components/Todolist';

function App() {
  const [todos, setTodos] = React.useState([]);
  const [inputval, setInputVal] = React.useState('');

  const handleEvent = (e) => {
    setInputVal(e.target.value)
  }

  const addTodos = () => {
    setTodos(prevList => [...prevList, {id: Date.now(), text:inputval}]);
    setInputVal('')
  }

  const removeTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id != id);
    setTodos(newTodos)
  }

  const todoList = todos.map((todo, idx) =>{
   return <Todolist  key ={todo.id} todo = {todo.text} onClick = {() => removeTodo(todo.id)} />   
})

  //<p onDoubleClick = {removeTodo}>X</p>

  return (
    <div className="App">
      <Search src='./assets/todo.png' onChange = {handleEvent} onClick = {addTodos} value = {inputval} />
      {todos.length <= 0 ? <p>You currently have no todos!</p> : null}
      {todoList}
    </div>
  );
}

export default App;
