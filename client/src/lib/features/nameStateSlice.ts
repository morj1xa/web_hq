import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define the interface for the name state
export interface NameState {
  nameValue: string;
}

// Define the initial state
const initialState: NameState = {
  nameValue: ""
};

// Create the name slice
const nameSlice = createSlice({
  name: "name", // This should be 'name' instead of 'nameSlice'
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.nameValue = action.payload;
    }
  }
});

// Export the action creator
export const { setName } = nameSlice.actions;

// Export the selector to access nameValue from the RootState
export const selectNameState = (state: RootState) => state.nameHandler.nameValue;

// Export the reducer
export default nameSlice.reducer;
