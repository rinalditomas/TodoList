import React from 'react'

//imported components
import Todo from "./Todo"

const TodoList= ({todos,setTodos,filteredTodos})=>{

    return (
        <div className= "container">
            <ol>
             {filteredTodos.map((todo) => (
                 <Todo
                    todos={todos} 
                setTodos={setTodos} 
                 key={todo.id} 
                 text={todo.text}
                 todo={todo} />
                    ))}
            </ol>
        </div>
    );
}

export default TodoList;