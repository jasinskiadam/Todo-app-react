import React from 'react'
const Task = ({ inputTextTitle, inputTextBody, todo, todos, todoTitle, todoBody,setTodos, setInputTextTitle,setInputTextBody }) => {

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

    const editHandler = () => {
        const findTodo = todos.find((item) => item.id === todo.id);
        setTodos({...findTodo, editing: !findTodo.editing});
        !findTodo.editing ? updateTodo() :saveTodo();
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
            <span className={'task-title'}>{todoTitle}</span>
            <span className={'task-body'}>{todoBody}</span>
            <button onClick={editHandler} className={'edit-btn'}>{!todo.editing ? 'Edit' : 'Save'}</button>
            <button onClick={completeHandler} className={'complete-btn'}>Complete</button>
        </li>
    );
}

export default Task;