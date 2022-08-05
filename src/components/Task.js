import axios from 'axios';
const Task = ({ inputTextTitle, inputTextBody, setInputTextTitle, setInputTextBody, todo, todos, setTodos }) => {

    // Update Todo item

    const updateTodo = () =>{       
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                setInputTextTitle(item.inputTextTitle);
                setInputTextBody(item.inputTextBody);
                return {
                    ...item,
                    inputTextTitle: item.inputTextTitle,
                    inputTextBody: item.inputTextBody,
                    editing: !item.editing
                }; 
            }
            return item;
        })
        );
    };


    // Save updated Todo item
    
    const saveTodo = () => {
          setTodos(todos.map((item) => {

            let data = {
                id: item.id,
                editing: !item.editing,
                inputTextTitle: inputTextTitle,
                inputTextBody: inputTextBody,
            };

            if(item.editing) {
                setInputTextTitle('');
                setInputTextBody('');
                // PATCH TODOS
                axios.patch(`http://localhost:3000/todos/${todo.id}`, data);
            }
            else data = item;
            
            return data;
            }));
    }

    // Handle edit

    const editHandler = () => {
        const findTodo = todos.find((item) => item.id === todo.id);
        setTodos({...findTodo, editing: !findTodo.editing});      
        findTodo.editing ? saveTodo() : updateTodo(); 
    }

    // Handle complete

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            const data = { ...item, completed: !item.completed };
                if(item.id === todo.id) {
                    axios.patch(`http://localhost:3000/todos/${todo.id}`, data);
                    return data;
                }
            return item;
            })
        );
    }

    // Handle delete

    const deleteHandler = () => {
        setTodos(todos.filter((item) => item.id !== todo.id));

        // DELETE TODOS 
        axios.delete(`http://localhost:3000/todos/${todo.id}`)
    }

    return (
        <li className={`task ${todo.completed ? 'completed' : ''}`}>
            <span className={'task-title'}>{todo.inputTextTitle}</span>
            <span className={'task-body'}>{todo.inputTextBody}</span>
            <button onClick={editHandler} className={'edit-btn'}>{!todo.editing ? 'Edit' : 'Save'}</button>
            <button onClick={completeHandler} className={'complete-btn'}>Complete</button>
            <button onClick={deleteHandler} className={'delete-btn'}>Delete</button>
        </li>
    );
}

export default Task;