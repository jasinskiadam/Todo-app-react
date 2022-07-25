import React from 'react';
import axios from "axios";
import { API_URL } from '../API';

const Form = ({ title, setTitle, body, setBody, todos, setTodos, todo }) => {

    //Handle input 

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleChangeBody = e => {
        setBody(e.target.value);
    };

    // Add new Todo

    const data = {
        id: `62d9459af23${Math.random().toString(16).slice(2)}`,
        title: title,
        body:  body,
        isComplete: false, 
        editing: false
    };

    const handleSubmit = e => {
        e.preventDefault();
            setTodos([...todos, data]);

            //POST TODOS
            axios.post(`${API_URL}`, data);
            setBody('');
            setTitle('');
    };

    return (
            <form className='input-bar'>
                <input 
                    value={title}
                    onChange={handleChangeTitle}
                    className={'todo-title'}
                    placeholder={'Title...'} 
                />
                <input 
                    value={body} 
                    onChange={handleChangeBody} 
                    className={'todo-body'} 
                    placeholder={'Body...'}
                />
                <button onClick={handleSubmit} className={'add-btn'}>Add</button>
            </form>
    );
};

export default Form;