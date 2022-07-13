import React from 'react'
import Button from './Button';
import Span from './Span';

const Task = () => {
    return (
        <li className='task'>
            <Span name={'task-title'} content={'Test title'} />
            <Span name={'task-body'} content={'Test body'} />
            <Button name={'edit-btn'} content={'Edit'} />
            <Button name={'complete-btn'} content={'Complete'} />
        </li>
    );
}

export default Task;