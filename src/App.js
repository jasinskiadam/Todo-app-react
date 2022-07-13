import { useState } from 'react';
import './App.css';
import Header from './components/Header'

function App() {
  const [inputTitle, setInputTitle] = useState("");
  return (
    <div className="App wrapper">
        <Header />
    </div>
  );
}

export default App;
