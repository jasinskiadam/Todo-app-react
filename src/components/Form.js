import React from 'react';
import axios from "axios";

const Form = ({ inputTextTitle, setInputTextTitle, inputTextBody, setInputTextBody, todos, setTodos, todo }) => {

    //Handle input

    const handleChangeTitle = (e) => {
        setInputTextTitle(e.target.value);
    };

    const handleChangeBody = e => {
        setInputTextBody(e.target.value);
    };

    // Add new Todo

    const data = {
        id: Math.random()*100,
        inputTextTitle: inputTextTitle,
        inputTextBody:  inputTextBody,
        completed: false, 
        editing: false
    };

    const handleSubmit = e => {
        e.preventDefault();
            setTodos([...todos, data]);

            //POST TODOS

            axios.post("http://localhost:3000/todos", data);
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