import React from 'react'
import Task from './Task';

const TaskContainer = ({ todos }) => {
    return (
        <ul className="task-container">
            {todos.map((todo) => (
                <Task 
                    id={todo.id}
                    inputTextTitle={todo.inputTextTitle}
                    inputTextBody={todo.inputTextBody}
                />
            ))}
        </ul>
    );
};

export default TaskContainer;