import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state,action) => {
      state.user = action.payload;
    },
    logout:(state,action) => {
      state.user= null;
    },
  },
});

export const { login,logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
//allow us to pull the information
export const selectUser = state => state.user.user;

export default userSlice.reducer;
