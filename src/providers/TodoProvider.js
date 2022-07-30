import { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

export const TaskContext = createContext({
  state: { todos: [], loading: true, error: null },
});

const initialState = {
  title: '',
  body: '',
  todos: [],
  loading: true,
  error: null,
  editing: false,
};

const actionTypes = {
  //CRUD
  getSuccess: 'GET_SUCCESS',
  getError: 'GET_ERROR',
  addTodo: 'ADD_TODO',
  completeTodo: 'COMPLETE_TODO',
  deleteTodo: 'DELETE_TODO',
  editTodo: 'EDIT_TODO',

  //FORM
  inputChange: 'INPUT_CHANGE',
  clearForm: 'CLEAR_FORM',
};

const reducer = (state, action) => {
  switch (action.type) {
    //ACTION GET SUCCES
    case actionTypes.getSuccess:
      if (state.loading) {
        return {
          ...state,
          todos: [...state.todos, ...action.payload],
          loading: false,
          error: null,
        };
      } else return { ...state };

    //ACTION GET ERROR
    case actionTypes.getError:
      return {
        ...state,
        loading: false,
        todos: [],
        error: console.log('GET ERROR'),
      };

    //ACTION ADD TODO
    case actionTypes.addTodo:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    //ACTION COMPLETE TODO
    case actionTypes.completeTodo:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        ),
      };

    //ACTION DELETE TODO
    case actionTypes.deleteTodo:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    //ACTION EDIT TODO
    case actionTypes.editTodo:
      const findTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );

      return {
        ...state,
        title: findTodo.title,
        body: findTodo.body,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                title:
                  todo.editing === undefined || todo.editing === false
                    ? findTodo.title
                    : state.title,
                body:
                  todo.editing === undefined || todo.editing === false
                    ? findTodo.body
                    : state.body,
                editing:
                  todo.editing === undefined ? !todo.editing : !todo.editing,
              }
            : todo
        ),
      };

    // ACTION INPUT CHANGE
    case actionTypes.inputChange:
      return {
        ...state,
        [action.field]: action.value,
      };

    // ACTION CLEAR FORM
    case actionTypes.clearForm:
      return {
        ...state,
        title: '',
        body: '',
      };
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const BASE_URL =
    'http://nestapi-env.eba-9kgvuxij.eu-central-1.elasticbeanstalk.com/todos';

  const [state, dispatch] = useReducer(reducer, initialState);
  const { title, body } = state;

  //GET TODOS
  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((resp) =>
        dispatch({
          type: actionTypes.getSuccess,
          payload: resp.data,
        })
      )
      .catch((err) => console.log('ERROR'));
  }, []);

  // ADD TODO
  const handleAdd = (todo) => {
    dispatch({
      type: actionTypes.addTodo,
      payload: todo,
      api: axios.post(`${BASE_URL}`, todo),
    });
  };

  //DELETE TODO
  const handleDelete = (todo) => {
    dispatch({
      type: actionTypes.deleteTodo,
      payload: todo.id,
      api: axios.delete(`${BASE_URL}/${todo.id}`),
    });
  };

  //COMPLETE TODO
  const handleComplete = (todo) => {
    dispatch({
      type: actionTypes.completeTodo,
      payload: todo,
      api: axios.put(`${BASE_URL}/${todo.id}`, {
        ...todo,
        isComplete: !todo.isComplete,
      }),
    });
  };

  //EDIT TODO
  const handleEdit = (todo) => {
    dispatch({
      type: actionTypes.editTodo,
      payload: todo,
      api:
        todo.editing === undefined || !todo.editing
          ? null
          : axios.put(`${BASE_URL}/${todo.id}`, {
              ...todo,
              title: state.title,
              body: state.body,
              editing: state.editing,
            }),
    });
  };

  //INPUT CHANGE
  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.inputChange,
      field: e.target.name,
      value: e.target.value,
    });
  };

  //CLEAR FORM
  const handleClearForm = () => {
    dispatch({
      type: actionTypes.clearForm,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        state,
        title,
        body,
        handleInputChange,
        handleClearForm,
        handleAdd,
        handleEdit,
        handleDelete,
        handleComplete,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
