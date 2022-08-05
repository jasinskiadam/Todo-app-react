import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoT, todosStateT } from '../../models/todo';

const initialState: todosStateT = {
  title: '',
  body: '',
  todos: [],
  isLoading: true,
  error: 'BASIC ERROR',
  editing: false,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // ADD TODO
    addLocalTodo: (state, action) => {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    },

    // DELETE TO

    // SET TITLE
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },

    //SET BODY
    setBody: (state, action: PayloadAction<string>) => {
      state.body = action.payload;
    },
  },
  // todosFetching(state) {
  //   state.isLoading = true;
  // },
  // todosFetchingSuccess(state, action: PayloadAction<TodoT[]>) {
  //   state.isLoading = false;
  //   state.error = '';
  //   state.todos = action.payload;
  // },
  // todosFetchingFailed(state, action: PayloadAction<string>) {
  //   state.isLoading = false;
  //   state.error = action.payload;
  // },

  //   switch (action.type) {
  //     //ACTION GET SUCCES
  //     case actionTypes.getSuccess:
  //       if (state.loading) {
  //         return {
  //           ...state,
  //           todos: [...state.todos, ...action.payload],
  //           loading: false,
  //           error: null,
  //         };
  //       } else return { ...state };

  //     //ACTION GET ERROR
  //     case actionTypes.getError:
  //       return {
  //         ...state,
  //         loading: false,
  //         todos: [],
  //         error: console.log('GET ERROR'),
  //       };

  //     //ACTION ADD TODO
  //     case actionTypes.addTodo:
  //       return {
  //         ...state,
  //         todos: [...state.todos, action.payload],
  //       };

  //     //ACTION COMPLETE TODO
  //     case actionTypes.completeTodo:
  //       return {
  //         ...state,
  //         todos: state.todos.map((todo) =>
  //           todo.id === action.payload.id
  //             ? { ...todo, isComplete: !todo.isComplete }
  //             : todo
  //         ),
  //       };

  //     //ACTION DELETE TODO
  //     case actionTypes.deleteTodo:
  //       return {
  //         ...state,
  //         todos: state.todos.filter((todo) => todo.id !== action.payload),
  //       };

  //     //ACTION EDIT TODO
  //     case actionTypes.editTodo:
  //       const findTodo = state.todos.find(
  //         (todo) => todo.id === action.payload.id
  //       );

  //       return {
  //         ...state,
  //         title: findTodo.title,
  //         body: findTodo.body,
  //         todos: state.todos.map((todo) =>
  //           todo.id === action.payload.id
  //             ? {
  //                 ...todo,
  //                 title:
  //                   todo.editing === undefined || todo.editing === false
  //                     ? findTodo.title
  //                     : state.title,
  //                 body:
  //                   todo.editing === undefined || todo.editing === false
  //                     ? findTodo.body
  //                     : state.body,
  //                 editing:
  //                   todo.editing === undefined ? !todo.editing : !todo.editing,
  //               }
  //             : todo
  //         ),
  //       };

  //     // ACTION INPUT CHANGE
  //     case actionTypes.inputChange:
  //       return {
  //         ...state,
  //         [action.field]: action.value,
  //       };

  //     // ACTION CLEAR FORM
  //     case actionTypes.clearForm:
  //       return {
  //         ...state,
  //         title: '',
  //         body: '',
  //       };
  //     default:
  //       return state;
  //   }
});

export const { setTitle, setBody, addLocalTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
