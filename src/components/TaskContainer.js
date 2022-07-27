import Task from './Task';

const TaskContainer = ({ todos }) => {
  return (
    <ul className='task-container'>
      {todos.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TaskContainer;
