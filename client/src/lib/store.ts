import { configureStore } from "@reduxjs/toolkit";
import iconsReducer from "../lib/features/iconsSlice";
import buttonSlice from "./features/functionIcons";
import modalToggleSlice from "./features/modalToggleSlice";
import nameStateSlice from "./features/nameStateSlice";
import idStateSlice from "./features/idStateSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            icons: iconsReducer,
            button: buttonSlice,
            modalToggle: modalToggleSlice,
            nameHandler: nameStateSlice,
            idHandler: idStateSlice
        }
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore['dispatch'];


export default makeStore;