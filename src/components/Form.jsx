import React from 'react';

const Form = ({setInputText, todos, setTodos, inputText,setStatus })=>{
    const inputTextHandler = (e)=> {
        setInputText(e.target.value)
    }
    const submitToDoHandler =(e) =>{
        e.preventDefault();
        setTodos([...todos,{text: inputText, completed: false, id:Date.now()}]);
        setInputText("")

    }
    const statusHandler = (e)=> {
        const status = e.target.value
        setStatus(status)
    }
    
    
    return(
        <form action="">
            <input type="text"
                onChange ={inputTextHandler}
                placeholder ="Enter a task"
                value={inputText}
            />
            <button type ="submit" onClick ={submitToDoHandler}>
                <i>ADD</i>
            </button >
            <select name="todos" id="" onChange ={statusHandler}>
                    <option  value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
            </select>
   

        </form>
    );
}
export default Form;