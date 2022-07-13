import React from 'react'

const Button = ({clName,content}) => {
    return (
        <button className={clName}>{content}</button>
    );
};

export default Button;