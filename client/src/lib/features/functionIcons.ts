import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../lib/store';

export interface ButtonState {
  value: boolean;
}

const initialState: ButtonState = {
  value: false,
};

export const buttonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    setTrue: (state) => {
      state.value = true;
    },
    setFalse: (state) => {
      state.value = false;
    },
  },
});

export const { setTrue, setFalse } = buttonSlice.actions;

export const selectButtonState = (state: RootState) => state.button;

export default buttonSlice.reducer;
