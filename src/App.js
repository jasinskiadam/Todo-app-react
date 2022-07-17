import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import Form from './components/Form';
import TaskContainer from './components/TaskContainer';

function App() {
  
  const [inputTextTitle, setInputTextTitle] = useState('');
  const [inputTextBody, setInputTextBody] = useState('');
  const [todos, setTodos] = useState([]);

// GET TODOS

  const getTodos = () =>
    axios
      .get("http://localhost:3000/todos")
      .then((resp) => setTodos(resp.data));

  useEffect(() => {
    getTodos();
  }, []);

  

  return (
    <div className="App wrapper">
      <header>
        <h1>TO DO APP REACT</h1>
        <Form 
          inputTextTitle={inputTextTitle}
          inputTextBody={inputTextBody}
          setInputTextTitle={setInputTextTitle}
          setInputTextBody={setInputTextBody}
          todos={todos}
          setTodos={setTodos}
          />
      </header>
      <main>
        <TaskContainer 
          setTodos={setTodos} 
          todos={todos} 
          setInputTextTitle={setInputTextTitle}
          setInputTextBody={setInputTextBody}
          inputTextTitle={inputTextTitle}
          inputTextBody={inputTextBody}
        />
      </main>
    </div>
  );
}

export default App;
