import Task from './Task';
import { useContext } from 'react';
import { TaskContext } from '../providers/TodoProvider';

const TaskContainer = () => {
  const { state } = useContext(TaskContext);

  return (
    <ul className='task-container'>
      {state.todos.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TaskContainer;
