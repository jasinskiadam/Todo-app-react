import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import Form from './components/Form';
import TaskContainer from './components/TaskContainer';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { API_URL } from './API';
import Welcome from './components/Welcome';

function App() {
  
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [todos, setTodos] = useState([]);

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
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/todos'>Todos</Link>
          </nav>
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
            <Route path='/' element={<Welcome />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
