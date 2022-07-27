import React, {useContext}from 'react';
import axios from "axios";
import { API_URL } from '../API';
import { TaskContext } from '../providers/TaskProvider';
import { useForm } from '../hooks/useForm';

const initialFormState = {
    title: '',
    body: '',
}

const Form = () => {
    const {title, body, todos, setTodos } = useContext(TaskContext);
    const {formValues, handleInputChange, handleClearForm} = useForm(initialFormState);


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
            handleClearForm(initialFormState);
    };

    return (
            <form className='input-bar'>
                <input 
                    name='Title'
                    value={title}
                    onChange={handleInputChange}
                    className={'todo-title'}
                    placeholder={'Title...'} 
                />
                <input 
                    name='Body'
                    value={body} 
                    onChange={handleInputChange} 
                    className={'todo-body'} 
                    placeholder={'Body...'}
                />
                <button onClick={handleSubmit} className={'add-btn'}>Add</button>
            </form>
    );
};

export default Form;