import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import useMessageReducer from './slices/userMessagesSlice';
import messagesApi from '../api/userMessagesApi';


const store = configureStore({
    reducer: {
        userMessages: useMessageReducer,
        [messagesApi.reducerPath]: messagesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([messagesApi.middleware]),

});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;