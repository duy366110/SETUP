import { configureStore } from "@reduxjs/toolkit";
import sliceMediaQuery from "./slice/sliceMediaQuery";
import sliceDialog from "./slice/sliceDialog";
import sliceMode from "./slice/sliceMode";

const store = configureStore({
    reducer: {
        dialog: sliceDialog,
        mediaQuery: sliceMediaQuery,
        mode: sliceMode,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export default store;