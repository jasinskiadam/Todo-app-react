import React from 'react'
import Task from './Task';

const TaskContainer = ({ todos, setTodos, editTodo, setEditTodo, setInputTextBody, setInputTextTitle, inputTextTitle, inputTextBody, todoTitle, todoBody }) => {
    
    return (
        <ul className="task-container">
            {todos.map((todo) => (
                <Task 
                    key={todo.id}
                    setTodos={setTodos}
                    todos={todos}
                    todo={todo}
                    todoTitle={todo.inputTextTitle}
                    todoBody={todo.inputTextBody}
                    inputTextTitle={inputTextTitle}
                    inputTextBody={inputTextBody}
                    setInputTextTitle={setInputTextTitle}
                    setInputTextBody={setInputTextBody}
                    setEditTodo={setEditTodo}
                    editTodo={editTodo}
                />
            ))}
        </ul>
    );
};

export default TaskContainer;