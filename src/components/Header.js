import React from 'react';

const Header = () => {
    return(
        <header>
            <h1>TO DO APP VANILLA JS</h1>
            <div class="input-bar">
                <input type="search" name="todo-title" placeholder="Title...">
                <input type="search" name="todo-body" placeholder="Body...">
                <button class="add-btn">Add</button>
            </div>
        </header>
    );
}