import { useReducer, useContext } from 'react';
import { TaskContext } from '../providers/TaskProvider';
import axios from 'axios';

const actionTypes = {
  addTodo: 'ADD TODO',
  deleteTodo: 'DELETE TODO',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.addTodo:
      return {
        ...state,
        todos: [console.log(...state), console.log(action.payload)],
        api: action.api
      };
    case actionTypes.deleteTodo:
      return {
        ...state,
        todos: state.filter(todo => todo.id !== action.payload),
        api: action.api
      };
    default:
      return state;
  }
};

export const useTask = (initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { todos, BASE_URL } = useContext(TaskContext);

    // ADD TODO
    const handleAdd = (todo) => {
      dispatch({
        type: actionTypes.addTodo,
        payload: {...todos, todo},
        api: axios.post(`${BASE_URL}`, todo),
      });
    };

    const handleDelete = (id) => {
      dispatch({
        type: actionTypes.deleteTodo,
        payload: id,
        api: axios.delete(`${BASE_URL}/${id}`),
      })
    } 

  return {
    state,
    handleAdd,
    handleDelete
  };
};
