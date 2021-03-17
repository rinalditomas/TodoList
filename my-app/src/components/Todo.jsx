import React from 'react'

const Todo = ({text, todo, todos, setTodos}) =>{
    const deleteHandler = () =>{
        setTodos(todos.filter(element => element.id !== todo.id))
    }
    const completeHandler = () =>{
        setTodos(todos.map((item)=>{
           if(item.id === todo.id){
               return{
                   ...item,completed: !item.completed
               }
           }
           return item;
        }))
    }
    
    return (
        <div>
            <li className ={`todo-item ${todo.completed ? "completed":""}`}> {text} </li>
            <button onClick ={completeHandler}>done</button>
            <button onClick ={deleteHandler}>delete</button>
        </div>
    )
}

export default Todo;