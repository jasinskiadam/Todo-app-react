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
      console.log(state.todos.find((todo) => todo.id === action.payload.id));
      return {
        ...state,
        title: state.todos.find((todo) => todo.id === action.payload.id).title,
        body: state.todos.find((todo) => todo.id === action.payload.id).body,
        editinig: state.todos.find((todo) =>
          todo.id === action.payload.id
            ?  todo.editing = true
            : (todo.editing = false)
        ),

        //editing: action.payload.editing ? {...state, editing: !state.editing} : state.editing
        // editinig: action.payload.editing = true,
      };
    // const findTodo = state.todos.find((todo) => {
    //   if (todo.id === action.payload) {
    //     return { ...todo, editing: !todo.editing };
    //   }
    //   //updatedTodo.editing ? saveTodo(updatedTodo) : updatedTodo(updatedTodo);

    //   return console.log(todo);
    // });
    // return {
    //   // const handleEdit = (todo) => {
    //   //   const findTodo = todos.find((item) => item.id === todo.id);
    //   //   setTodos({ ...findTodo, editing: !findTodo.editing });
    //   //   findTodo.editing ? saveTodo(todo) : updateTodo(todo);
    //   // };
    //   ...state,
    //   todos: findTodo,
    //   //api: action.api,
    // };

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
  const { title, body, todos } = state;
  // console.log(`state`, state);

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

  // UPDATE TODO
  // const updateTodo = (todo) => {
  //   setTodos(
  //     todos.map((item) => {
  //       if (item.id === todo.id) {
  //         setTitle(item.title);
  //         setBody(item.body);
  //         return {
  //           ...item,
  //           title: item.title,
  //           body: item.body,
  //           editing: !item.editing,
  //         };
  //       }
  //       return item;
  //     })
  //   );
  // };

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

  // SAVE UPDATED TODO

  // const saveTodo = (todo) => {
  //   setTodos(
  //     todos.map((item) => {
  //       let data = {
  //         ...item,
  //         editing: !item.editing,
  //         title: title,
  //         body: body,
  //       };

  //       if (item.editing) {
  //         setTitle('');
  //         setBody('');

  //         axios
  //           .put(`${BASE_URL}/${todo.id}`, data)
  //           .catch((err) => console.log('PUT error'));
  //         return data;
  //       }

  //       return item;
  //     })
  //   );
  // };

  // EDIT TODO

  // const handleEdit = (todo) => {
  //   const findTodo = todos.find((item) => item.id === todo.id);
  //   setTodos({ ...findTodo, editing: !findTodo.editing });
  //   findTodo.editing ? saveTodo(todo) : updateTodo(todo);
  // };

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
        todos,
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
