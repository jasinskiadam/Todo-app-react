import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import TaskContainer from './components/TaskContainer';

function App() {
  
  const [inputTextTitle, setInputTextTitle] = useState('');
  const [inputTextBody, setInputTextBody] = useState('');
  const [todos, setTodos] = useState([]);
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
        <TaskContainer setTodos={setTodos} todos={todos}/>
      </main>
    </div>
  );
}

export default App;
