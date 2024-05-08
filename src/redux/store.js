import { configureStore } from "@reduxjs/toolkit";
import dataProvider from "./dataProvider";
import { footballApi } from "./football";

const store = configureStore({
    reducer : {
        dataProvider,
        [footballApi.reducerPath] : footballApi.reducer
    },
middleware : getDefaultMiddleware => getDefaultMiddleware().concat(footballApi.middleware)
})

export default store