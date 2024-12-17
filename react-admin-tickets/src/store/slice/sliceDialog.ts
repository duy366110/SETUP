import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
}

const sliceDialog = createSlice({
    name: "SLICE-DIALOG",
    initialState,
    reducers: {
        toggleDialog: (state: any) => {
            state.isOpen = !state.isOpen;
        }
    }
})

export const { toggleDialog } = sliceDialog.actions;
export default sliceDialog.reducer;