import { configureStore } from "@reduxjs/toolkit";
import sliceMediaQuery from "./slice/sliceMediaQuery";

const store = configureStore({
    reducer: {
        mediaQuery: sliceMediaQuery
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export default store;