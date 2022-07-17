import axios from 'axios';
import React from 'react'
const Task = ({ inputTextTitle, inputTextBody, setInputTextTitle, setInputTextBody, todo, todos, setTodos }) => {

    // Update Todo item

    const updateTodo = () =>{
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                setInputTextTitle(item.inputTextTitle);
                setInputTextBody(item.inputTextBody);
                return {
                    ...item,
                    inputTextTitle: item.inputTextTitle,
                    inputTextBody: item.inputTextBody,
                    editing: !item.editing
                }; 
            }
            return item;
        })
        
    );
    };

    // Save updated Todo item

    const saveTodo = () => {
        setTodos(todos.map((item) => {
                if(item.editing) {
                    setInputTextTitle('');
                    setInputTextBody('');
                    return {
                        ...item,
                        editing: !item.editing,
                        inputTextTitle: inputTextTitle,
                        inputTextBody: inputTextBody,
                    }; 
                }
                
                return item;
            })
            
        );
        
    }

    // Handle edit

    const editHandler = () => {
        const findTodo = todos.find((item) => item.id === todo.id);
        setTodos({...findTodo, editing: !findTodo.editing});
        findTodo.editing ? saveTodo() : updateTodo();

        // PUT TODOS

        axios.put(`http://localhost:3000/todos/${findTodo.id}`, findTodo)        
    }

    // Handle complete

    const completeHandler = () => {
        setTodos(todos.map((item) => {
                if(item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
    }

    // Handle delete

    const deleteHandler = () => {
        setTodos(todos.filter((item) => item.id !== todo.id));

        // DELETE TODOS 
        axios.delete(`http://localhost:3000/todos/${todo.id}`)
    }

    return (
        <li className={`task ${todo.completed ? 'completed' : ''}`}>
            <span className={'task-title'}>{todo.inputTextTitle}</span>
            <span className={'task-body'}>{todo.inputTextBody}</span>
            <button onClick={editHandler} className={'edit-btn'}>{!todo.editing ? 'Edit' : 'Save'}</button>
            <button onClick={completeHandler} className={'complete-btn'}>Complete</button>
            <button onClick={deleteHandler} className={'delete-btn'}>Delete</button>
        </li>
    );
}

export default Task;