import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";


const middlewares = [cryptoApi.middleware, cryptoNewsApi.middleware];

export default configureStore ({

    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },

    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(cryptoApi.middleware),

    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(cryptoNewsApi.middleware),

    middleware: getDefaultMiddleware().concat(middlewares),
})
