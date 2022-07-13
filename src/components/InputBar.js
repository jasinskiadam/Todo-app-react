import React from 'react';
import Input from './Input';

const InputBar = () => {
    return (
        <div className="input-bar">
        <Input />
        <Input />
        <button className="add-btn">Add</button>
        </div>
    );
};

export default InputBar;