import React from 'react';

const Form = ({ updateTodo, inputTextTitle, setInputTextTitle, inputTextBody, setInputTextBody, todos, setTodos, editTodo, setEditTodo }) => {

    const handleChangeTitle = (e) => {
        console.log(e.target.value);
        setInputTextTitle(e.target.value);
    }

    const handleChangeBody = e => {
        console.log(e.target.value);
        setInputTextBody(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(!editTodo){
            setTodos([
                ...todos, {
                    id: Math.random()*100,
                    inputTextTitle: inputTextTitle,
                    inputTextBody:inputTextBody,
                    completed: false, 
                    editing: false
                }
            ])
            setInputTextBody('');
            setInputTextTitle('');
        }
        else {
            updateTodo(editTodo.id, inputTextBody, inputTextTitle, editTodo.completed)
        }
    };
    return (
            <form className='input-bar'>
                <input 
                    value={inputTextTitle}
                    onChange={handleChangeTitle}
                    className={'todo-title'}
                    placeholder={'Title...'} 
                />
                <input 
                    value={inputTextBody} 
                    onChange={handleChangeBody} 
                    className={'todo-body'} 
                    placeholder={'Body...'}
                />
                <button onClick={handleSubmit} className={'add-btn'}>Add</button>
            </form>
    );
};

export default Form;