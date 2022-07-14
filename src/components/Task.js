import React from 'react'

const Task = ({inputTextTitle, inputTextBody, todo, todos, setTodos}) => {

    const editHandler = () =>{
        setTodos(todos.filter(el => el.id !== todo.id));
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
            <span className={'task-title'}>{inputTextTitle}</span>
            <span className={'task-body'}>{inputTextBody}</span>
            <button onClick={editHandler} className={'edit-btn'}>Edit</button>
            <button onClick={completeHandler} className={'complete-btn'}>Complete</button>
        </li>
    );
}

export default Task;