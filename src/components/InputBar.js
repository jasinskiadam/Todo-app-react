import React from 'react';
import Input from './Input';
import Button from './Button';

const InputBar = () => {
    return (
        <div className='input-bar'>
            <Input name={'todo-title'} placeholder={'Title...'} />
            <Input name={'todo-body'} placeholder={'Body...'}/>
            <Button name={'add-btn'} content={'Add'}/>
        </div>
    );
};

export default InputBar;