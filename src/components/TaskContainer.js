import React from 'react'
import Task from './Task';

const TaskContainer = ({ todos, setTodos, setInputTextBody, setInputTextTitle, inputTextTitle, inputTextBody }) => {
    
    return (
        <ul className="task-container">
            {todos.map((todo) => (
                <Task 
                    key={todo.id}
                    setTodos={setTodos}
                    todos={todos}
                    todo={todo}
                    inputTextTitle={inputTextTitle}
                    inputTextBody={inputTextBody}
                    setInputTextTitle={setInputTextTitle}
                    setInputTextBody={setInputTextBody}
                />
            ))}
        </ul>
    );
};

export default TaskContainer;