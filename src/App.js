import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import Form from './components/Form';
import TaskContainer from './components/TaskContainer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [todos, setTodos] = useState([]);

  const API_URL = 'http://nestapi-env.eba-9kgvuxij.eu-central-1.elasticbeanstalk.com/todos';

// GET TODOS

  const getTodos = () =>
    axios
      .get(API_URL)
      .then((resp) => setTodos(resp.data));

  useEffect(() => {
    getTodos();
  }, []); 

  return (
    <Router>
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
            API_URL={API_URL}
            />
        </header>
        
        <main>
          <Routes>
            <Route 
              path="/todos" 
              element={
                <TaskContainer 
                todos={todos}
                setTodos={setTodos} 
                title={title}
                setTitle={setTitle}
                body={body} 
                setBody={setBody}
                API_URL={API_URL}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
