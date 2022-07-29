import { useReducer, useContext } from 'react';
import { TaskContext } from '../providers/TaskProvider';

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  clearValues: 'CLEAR VALUES',
  addTodo: 'ADD TODO',
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
    default:
      return state;
  }
};

export const useForm = (initialValues) => {
  const [formValues, dispatch] = useReducer(reducer, initialValues);
  const { setTitle, setBody } = useContext(TaskContext);

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

  return {
    formValues,
    handleInputChange,
    handleClearForm,
  };
};
