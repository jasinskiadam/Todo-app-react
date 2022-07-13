import React from 'react'

const Button = ({ name, content }) => {
    return (
        <button className={name}>{content}</button>
    );
};

export default Button;