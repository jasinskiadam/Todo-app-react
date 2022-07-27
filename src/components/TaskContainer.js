import Task from './Task';
import { useContext } from 'react';
import { TaskContext } from './TaskProvider';

const TaskContainer = () => {
    const {todos } =
    useContext(TaskContext);
  return (
    <ul className='task-container'>
      {todos.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TaskContainer;
