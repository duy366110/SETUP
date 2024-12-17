import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    type: "light"
}

const sliceMode = createSlice({
    name: "SLICE-MODE",
    initialState,
    reducers: {
        toggleMode: (state, action) => {
            let { mode } = action.payload;
            state.type = mode;
        }
    }
})

export const { toggleMode } = sliceMode.actions;
export default sliceMode.reducer;