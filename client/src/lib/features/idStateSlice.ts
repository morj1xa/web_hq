import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define the interface for the id state
export interface IdState {
  idValue: string;
}

// Define the initial state
const initialState: IdState = {
  idValue: ""
};

// Create the id slice
const idSlice = createSlice({
  name: "id", // Change the name to 'id'
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.idValue = action.payload;
    }
  }
});

// Export the action creator
export const { setId } = idSlice.actions;

// Export the selector to access idValue from the RootState
export const selectIdState = (state: RootState) => state.idHandler.idValue; // Change from nameHandler to idHandler

// Export the reducer
export default idSlice.reducer;
