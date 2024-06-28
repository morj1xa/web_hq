import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from "../../lib/store";

export interface IconsState {
  value: boolean;
}

const initialState: IconsState = {
  value: false
};

export const iconsSlice = createSlice({
  name: 'icons',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    }
  }
});

export const { toggle } = iconsSlice.actions;

export const selectIconsState = (state: RootState) => state.icons;

export default iconsSlice.reducer;
