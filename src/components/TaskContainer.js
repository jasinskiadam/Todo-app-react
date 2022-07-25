import React from 'react'
import Task from './Task';

const TaskContainer = ({ todos, setTodos, setBody, setTitle, title, body, API_URL }) => {
    
    return (
        <ul className="task-container">
            {todos.map((todo) => (
                <Task 
                    key={todo.id}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                    title={title}
                    setTitle={setTitle}
                    setBody={setBody}
                    body={body}
                    API_URL={API_URL}
                />
            ))}
        </ul>
    );
};

export default TaskContainer;