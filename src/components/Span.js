import React from 'react'

const Span = ({ name, content }) => {
    return (
        <span className={name}>{content}</span>
    );
};

export default Span;