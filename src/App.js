import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import Form from './components/Form';
import TaskContainer from './components/TaskContainer';

function App() {
  
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [todos, setTodos] = useState([]);

// GET TODOS

  const getTodos = () =>
    axios
      .get("http://nestapi-env.eba-9kgvuxij.eu-central-1.elasticbeanstalk.com/todos")
      .then((resp) => setTodos(resp.data));

  useEffect(() => {
    getTodos();
  }, []); 

  return (
    <div className="App wrapper">
      <header>
        <h1>TO DO APP REACT</h1>
        <Form 
          todos={todos}
          setTodos={setTodos}
          title={title}
          setTitle={setTitle}
          body={body}
          setBody={setBody}
          />
      </header>
      <main>
        <TaskContainer 
          todos={todos}
          setTodos={setTodos} 
          title={title}
          setTitle={setTitle}
          body={body} 
          setBody={setBody}
        />
      </main>
    </div>
  );
}

export default App;
