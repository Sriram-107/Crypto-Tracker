import { createSlice } from "@reduxjs/toolkit";

enum Mode {
    LIGHT = "light",
    DARK = "dark"
}
interface Theme {
    mode : Mode
}
// getInitialTheme
const getInitialTheme = () : Mode => {
    const storedMode = localStorage.getItem("themeMode");
    if(storedMode === Mode.LIGHT || storedMode === Mode.DARK){
        return storedMode as Mode;
    }
    return Mode.DARK;
}
const initialState : Theme = {
    mode : getInitialTheme()
}

const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers : {
        toggleTheme : (state) => {
            state.mode = state.mode===Mode.DARK ? Mode.LIGHT : Mode.DARK
            localStorage.setItem("themeMode", state.mode)
        }
    }
});

export default themeSlice.reducer;
export const {toggleTheme} = themeSlice.actions;