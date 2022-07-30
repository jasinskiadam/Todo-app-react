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
  updateTodo: 'UPDATE_TODO',

  //FORM
  inputChange: 'INPUT_CHANGE',
  clearValues: 'CLEAR_VALUES',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.getSuccess:
      if (state.loading) {
        return {
          ...state,
          todos: [...state.todos, ...action.payload],
          loading: false,
          error: null,
        };
      } else return { ...state };

    case actionTypes.getError:
      return {
        ...state,
        loading: false,
        todos: [],
        error: console.log('GET ERROR'),
      };

    case actionTypes.addTodo:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case actionTypes.completeTodo:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        ),
      };

    case actionTypes.deleteTodo:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        //api: action.api,
      };
    case actionTypes.updateTodo: {
      return {};
    }

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

    case actionTypes.inputChange:
      return {
        ...state,
        [action.field]: action.value,
      };
    case actionTypes.clearValues:
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
      //api: axios.post(`${BASE_URL}`, todo),
    });
  };

  //DELETE TODO
  const handleDelete = (todo) => {
    dispatch({
      type: actionTypes.deleteTodo,
      payload: todo.id,
      // api: axios.delete(`${BASE_URL}/${id}`),
    });
  };

  const handleComplete = (todo) => {
    dispatch({
      type: actionTypes.completeTodo,
      payload: todo,
      // api: axios.delete(`${BASE_URL}/${id}`),
    });
  };

  const updateTodo = (todo) => {
    dispatch({
      type: actionTypes.updateTodo,
      payload: todo,
    });
  };

  const saveTodo = (todo) => {
    dispatch({
      type: actionTypes.updateTodo,
      payload: todo,
    });
  };

  const handleEdit = (todo) => {
    dispatch({
      type: actionTypes.editTodo,
      payload: todo,
    });
  };

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.inputChange,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleClearForm = () => {
    dispatch({
      type: actionTypes.clearValues,
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
        updateTodo,
        saveTodo,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
