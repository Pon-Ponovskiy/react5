import React from "react";


function ToDoItem({todo, toggleTodo, deleteTodo}){
    
    return(
        <li>
            <label htmlFor={todo.id}>
                {todo.title}
                <input type="checkbox" id={todo.id} checked={todo.completed} onChange={(event)=> toggleTodo(todo.id, event.target.checked)} />
            </label>

            <button className="btn-btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    )
}

export default ToDoItem;