import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type UserInitialState = {
  email: string;
  password: string;
  isLoggedIn: boolean;
};

const INITIAL_STATE: UserInitialState = {
  email: '',
  password: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'counter',
  initialState: INITIAL_STATE,
  reducers: {
    loginUser: (
      state: UserInitialState,
      action: PayloadAction<Omit<UserInitialState, 'isLoggedIn'>>
    ) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isLoggedIn = true;
    },
  },
});

export const { loginUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
