import axios from 'axios';
const Task = ({ title, body, setTitle, setBody, todo, todos, setTodos, API_URL }) => {

    // Update Todo item

    const updateTodo = () =>{       
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                setTitle(item.title);
                setBody(item.body);
                return {
                    ...item,
                    title: item.title,
                    body: item.body,
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
            let data;
                if(item.editing) {
                    setTitle('');
                    setBody('');
                    data = {
                        id: item.id,
                        editing: !item.editing,
                        title: title,
                        body: body,
                    };
                
                    // PATCH TODOS
                    axios.patch(`${API_URL}/${todo.id}`, data);
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
                if(item.id === todo.id) { 
                    console.log(item.id)
                    axios.patch(`${API_URL}/${item.id}`, {isComplete: !item.isComplete});  
                }
                return item;
            })
        );
    }

    // Handle delete

    const deleteHandler = () => {
        setTodos(todos.filter((item) => item.id !== todo.id));

        // DELETE TODOS 
        axios.delete(`${API_URL}/${todo.id}`)
    }

    return (
        <li className='task'>
            <span className={'task-title'}>{todo.title}</span>
            <span className={'task-body'}>{todo.body}</span>
            <button onClick={editHandler} className={'edit-btn'}>{!todo.editing ? 'Edit' : 'Save'}</button>
            <button onClick={completeHandler} className={'complete-btn'}>Complete</button>
            <button onClick={deleteHandler} className={'delete-btn'}>Delete</button>
        </li>
    );
}

export default Task;