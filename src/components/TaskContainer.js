import React from 'react'
import Task from './Task';

const TaskContainer = ({ todos, setTodos, todo }) => {
    return (
        <ul className="task-container">
            {todos.map((todo) => (
                <Task 
                    key={todo.id}
                    setTodos={setTodos}
                    todos={todos}
                    todo={todo}
                    inputTextTitle={todo.inputTextTitle}
                    inputTextBody={todo.inputTextBody}
                />
            ))}
        </ul>
    );
};

export default TaskContainer;