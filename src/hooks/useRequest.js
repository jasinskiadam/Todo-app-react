import { useReducer, useEffect } from 'react';
import axios from 'axios';

const actionTypes = {
  getSuccess: 'GET_SUCCESS',
  getError: 'GET_ERROR',
};

const initialState = {
  todos: [],
  loading: true,
  error: null,
};

const reducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case actionTypes.getSuccess:
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
        loading: false,
        error: null,
      };
    case actionTypes.getError:
      return {
        ...state,
        loading: false,
        todos: [],
        error: console.log('GET ERROR'),
      };
    default:
      return state;
  }
};

export const useRequest = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => dispatch({
        type: actionTypes.getSuccess,
        payload: resp.data,
      }))
      .catch((err) => console.log('ERROR'));
  }, [url]);

  return {
    state,
  };
};
