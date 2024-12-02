import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sm: false,
    md: false,
    lg: false,
}

const sliceMediaQuery = createSlice({
    name: "SLICE-MEDIA-QUERY",
    initialState,
    reducers: {
        verifyScreenSize: (state, action) => {
            let { type, value } = action.payload;
            if(type === "md") {
                state.md = value;
                state.sm = value;
                state.lg = false;
            }
        }
    }
})

export const { verifyScreenSize } = sliceMediaQuery.actions;
export default sliceMediaQuery.reducer;