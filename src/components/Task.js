import React from 'react'

const Task = ({inputTextTitle, inputTextBody}) => {
    return (
        <li className='task'>
            <span className={'task-title'}>{inputTextTitle}</span>
            <span className={'task-body'}>{inputTextBody}</span>
            <button className={'edit-btn'}>Edit</button>
            <button className={'complete-btn'}>Complete</button>
        </li>
    );
}

export default Task;