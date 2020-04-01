import React from 'react';
import './App.css';
import Search from './components/Search.js'
import Todolist from './components/Todolist';

function App() {
  const [todos, setTodos] = React.useState([]);
  const [inputval, setInputVal] = React.useState('');

  const handleEvent = (e) => {
    setInputVal(e.target.value)
  }

  const addTodos = () => {
    setTodos(prevList => [...prevList, {id: Date.now(), text:inputval, isCompleted:false}]);
    setInputVal('')
  }

  const removeTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos)
  }

  const todoList = todos.map((todo) =>{
   return <Todolist  key ={todo.id} todo = {todo.text} onDoubleClick = {() => removeTodo(todo.id)} onClick = {() => toggleCompleted(todo.id)} />   
})

  const toggleCompleted = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return{
          ...todo, isCompleted: !todo.isCompleted
        }
      }
      return todo
    }) 
    )
  }

  return (
    <div className="App">
      <Search src='./assets/todo.png' onChange = {handleEvent} onClick = {addTodos} value = {inputval} />
      {todos.length <= 0 ? <p>You currently have no todos!</p> : null}
      {todoList}
    </div>
  );
}

export default App;
