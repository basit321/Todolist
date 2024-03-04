import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import authReducer from "./Reducers/AuthReducer";
import DeepLinkReducer from "./Reducers/DeepLinkReducer";


const config = {
    key: "root",
    storage: AsyncStorage,
};

export const store = configureStore({
    reducer: {
        auth: persistReducer({ ...config }, authReducer),
        deepLink: DeepLinkReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persister = persistStore(store);
export default store;