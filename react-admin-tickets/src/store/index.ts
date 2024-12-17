import { configureStore } from "@reduxjs/toolkit";
import sliceMediaQuery from "./slice/sliceMediaQuery";
import sliceDialog from "./slice/sliceDialog";

const store = configureStore({
    reducer: {
        dialog: sliceDialog,
        mediaQuery: sliceMediaQuery,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export default store;