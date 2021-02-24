import './App.css';
import React,{useState, useEffect} from 'react'


//imported components
import Form from "./components/Form"
import TodoList from "./components/TodoList"

function App() {
  //states
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([])
  const [status,setStatus] = useState("all")
  const [filteredTodos,setFilteredTodos] = useState([])

  
  useEffect(()=>{
    getTodos()
  },[])
  useEffect(()=>{
    filteredHandler()
    saveTodos()
  },[todos,status])


//funciones
const filteredHandler = ()=>{
  switch(status){
    case 'completed': setFilteredTodos(todos.filter(todo => todo.completed === true))
    break;
    case 'uncompleted': setFilteredTodos(todos.filter(todo => todo.completed === false))
    break;
    default: setFilteredTodos(todos);
    break
  }
}

const saveTodos =()=>{
  localStorage.setItem("todos",JSON.stringify(todos));
}
  
const getTodos = () =>{
    if(localStorage.getItem("todos")=== null){
      localStorage.setItem("todos",JSON.stringify([]))
    }else{
      let local= JSON.parse(localStorage.getItem("todos"))
      setTodos(local)
    }
  }
  return (

    <div className="App">
      <h1>Tomas To do List </h1>
      <Form setInputText={setInputText} todos={todos} setTodos={setTodos} inputText= {inputText} setStatus={setStatus}/>
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
      
    </div>
  );
}

export default App;
