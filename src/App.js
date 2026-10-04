import './index.css';
import React, { useState, useEffect } from 'react';
import NewToDoForm from './components/NewToDoForm.jsx';
import ToDoList from './components/ToDoList';
import { eventWrapper } from '@testing-library/user-event/dist/utils/index.js';


function App() {
  const [NewItem, SetNewItem] = useState('')
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem('ITEMS')
    
    if(localValue === null){
      return[]
    }
    
    return JSON.parse(localValue)
  })

  useEffect(()=>{
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

  const handleSubmit = (event)=> {
    event.preventDefault()
    setTodos(prevTodos=>[...prevTodos,
      {id: crypto.randomUUID(),
      title: NewItem,
      completed: false}
    ])
    SetNewItem('')
  }

  const toggleTodo = (id, completed)=>{
    setTodos(currentTodos => 
      currentTodos.map(todo=>{
        if(todo.id === id){
          return{...todo, completed: completed}
        }
        return todo
      })
    )

  }

  const deleteTodo = (id)=>{
    setTodos((currentTodos) =>{
      return currentTodos.filter((todo)=> todo.id !== id)
    })
  }
  return (
    <div className="App">
      <NewToDoForm NewItem={NewItem} SetNewItem={SetNewItem} handleSubmit={handleSubmit}/>
      <h1 className='header'>Todo List</h1>
    <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
