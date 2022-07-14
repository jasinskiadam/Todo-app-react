import React from 'react'

const Task = ({inputTextTitle, inputTextBody, todo, todos, setTodos}) => {

    const editHandler = () => {
        setTodos(todos.map((item) => {
                if(item.id === todo.id) {
                    return {
                        ...item,
                        editing: !item.editing,
                    };
                }
                return item;
            })
        );
    }

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

    return (
        <li className={`task ${todo.completed ? 'completed' : ''}`}>
            <span className={'task-title'}>{todo.editing? todo.inputTextTitle : inputTextTitle}</span>
            <span className={'task-body'}>{inputTextBody}</span>
            <button onClick={editHandler} className={'edit-btn'}>{todo.editing ? 'Save' : 'Edit'}</button>
            <button onClick={completeHandler} className={'complete-btn'}>Complete</button>
        </li>
    );
}

export default Task;