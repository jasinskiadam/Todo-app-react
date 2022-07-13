import './App.css';
import { useState } from 'react';
import Header from './components/Header'
import Main from './components/Main';

function App() {
  const [inputTitle, setInputTitle] = useState("");
  return (
    <div className="App wrapper">
        <Header />
        <Main />
    </div>
  );
}

export default App;
