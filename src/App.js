import './App.css';

function App() {
  return (
    <div className="App wrapper">
      <header>
        <h1>TO DO APP REACT</h1>
        <div className="input-bar">
          <input type="search" name="todo-title" placeholder="Title..."/>
          <input type="search" name="todo-body" placeholder="Body..."/>
          <button className="add-btn">Add</button>
        </div>
      </header>
        
    </div>
  );
}

export default App;
