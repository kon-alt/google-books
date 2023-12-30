import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import rootReducer from './rootReducer';
import {appApi} from './app.api';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }).concat(appApi.middleware),
});
export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the rootReducer itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
