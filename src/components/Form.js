import React from 'react';

const Form = ({ inputTextTitle, setInputTextTitle, inputTextBody, setInputTextBody, todos, setTodos }) => {

    const handleChangeTitle = (e) => {
        setInputTextTitle(e.target.value);
    };

    const handleChangeBody = e => {
        setInputTextBody(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
            setTodos([
                ...todos, {
                    id: Math.random()*100,
                    inputTextTitle: inputTextTitle,
                    inputTextBody:  inputTextBody,
                    completed: false, 
                    editing: false
                }
            ])
            setInputTextBody('');
            setInputTextTitle('');
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