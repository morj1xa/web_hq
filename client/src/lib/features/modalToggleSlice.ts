import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface ModalToggleState {
    value: boolean;
}

const initialState: ModalToggleState = {
    value: false
};

export const modalSlice = createSlice({
    name: "modalToggle",
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.value = !state.value;
        }
    }
});

export const { toggleModal } = modalSlice.actions;

export const selectModalState = (state: RootState) => state.modalToggle;

export default modalSlice.reducer;
