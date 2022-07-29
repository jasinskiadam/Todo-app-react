import { useReducer, useContext } from 'react';
import { TaskContext } from '../providers/TaskProvider';
import axios from 'axios';

const actionTypes = {
  addTodo: 'ADD_TODO',
  deleteTodo: 'DELETE_TODO',
};

// const newTodo = (todo) => {
//   return {
//     id: todo.id,
//     title: todo.title,
//     body: todo.body,
//     isComplete: todo.isComplete,
//     editing: todo.editing,
//   };
// };

const reducer = (state= {todos: []}, action) => {
  switch (action.type) {
    case actionTypes.addTodo:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case actionTypes.deleteTodo:
      return {
        ...state,
        todos: state.filter((todo) => todo.id !== action.payload),
        api: action.api,
      };
    default:
      return state;
  }
};

export const useTask = (initialState) => {
  const {  BASE_URL,state} = useContext(TaskContext);
  const [test, dispatch] = useReducer(reducer, state);

  // ADD TODO
  const handleAdd = (todo) => {
    dispatch({
      type: actionTypes.addTodo,
      //payload: console.log([...state,todo]),//[console.log(`state aft`,...todos), console.log(`payload aft`,todo)],
      payload: console.log(`todo`,todo),
      //api: axios.post(`${BASE_URL}`, todo),
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: actionTypes.deleteTodo,
      payload: id,
      api: axios.delete(`${BASE_URL}/${id}`),
    });
  };

  return {
    state,
    handleAdd,
    handleDelete,
  };
};
