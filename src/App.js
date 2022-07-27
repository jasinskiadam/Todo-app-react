import './App.css';
import Form from './components/Form';
import TaskContainer from './components/TaskContainer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Welcome from './components/Welcome';
import { TaskProvider } from './providers/TaskProvider';

function App() {
  return (
    <Router>
      <TaskProvider>
        <div className='App wrapper'>
          <header>
            <h1>TO DO APP REACT</h1>
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/todos'>Todos</Link>
            </nav>
            <Form />
          </header>
          <main>
            <Routes>
              <Route path='/todos' element={<TaskContainer />} />
              <Route path='/' element={<Welcome />} />
            </Routes>
          </main>
        </div>
      </TaskProvider>
    </Router>
  );
}

export default App;
