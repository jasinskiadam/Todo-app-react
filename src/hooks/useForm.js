import { useReducer, useContext } from 'react';
import { TaskContext } from '../providers/TaskProvider';
//import axios from 'axios';

const actionTypes = {
  inputChange: 'INPUT_CHANGE',
  clearValues: 'CLEAR_VALUES',
  addTodo: 'ADD_TODO',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.inputChange:
      return {
        ...state,
        [action.field]: action.value,
      };
    case actionTypes.clearValues:
      return {
        ...action.initialValues,
      };
    // case actionTypes.addTodo:
    //   // return {
    //   //   ...state,
    //   //   todos: [console.log(`state`,...state.todos), console.log(`payload`,action.payload)],
    //   //   api: action.api
    //   // };
    //   return {
    //     ...state,
    //     todos: [console.log(`na gorze state`, state), action.payload],
    //   };
    default:
      return state;
  }
};

export const useForm = (initialValues) => {
  const [formValues, dispatch] = useReducer(reducer, initialValues);
  const {  setTitle, setBody } = useContext(TaskContext);

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.inputChange,
      field: e.target.name,
      value:
        e.target.name === 'Title'
          ? setTitle(e.target.value)
          : setBody(e.target.value),
    });
  };

  const handleClearForm = () => {
    dispatch({
      type: actionTypes.clearValues,
      initialValues,
    });
  };

  // const handleAdd = (todo) => {
  //   dispatch({
  //     type: actionTypes.addTodo,
  //     payload: console.log([...todos, todo]),//[console.log(`state aft`,...todos), console.log(`payload aft`,todo)],
  //     //api: axios.post(`${BASE_URL}`, todo),
  //   });
  // };

  return {
    formValues,
    //handleAdd,
    handleInputChange,
    handleClearForm,
  };
};
