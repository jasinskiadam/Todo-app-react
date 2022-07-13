import React from 'react'

const Input = (name, placeholder) => {
    const inputTextHandler = e => {
        console.log(e.target.value);
    };
    return (
        <input type="search" onChange={inputTextHandler} name={name} placeholder={placeholder} />
    );
};

export default Input;