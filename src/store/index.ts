import {configureStore} from '@reduxjs/toolkit';
import ThemeReducer from "../store/features/theme/themeSlice"
import AuthReducer from "../store/features/auth/authSlice";
import CryptoListReducer from "../store/features/cryptolist/cryptolistSlice";

export const store = configureStore({
    reducer :{
        theme : ThemeReducer,
        auth:AuthReducer,
        cryptoList : CryptoListReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;