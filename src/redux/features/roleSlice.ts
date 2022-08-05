import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RoleState {
  role: string;
}

const initialState: RoleState = {
  role: 'User',
};

export const roleSlice = createSlice({
  name: 'setRole',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
  },
});

export default roleSlice.reducer;
export const { setRole } = roleSlice.actions;
