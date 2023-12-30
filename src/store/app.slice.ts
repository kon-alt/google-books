import {createSlice} from '@reduxjs/toolkit';
import {defaultParams} from '../settings';
import {AppState} from './types';
import {appApi} from './app.api';

const initialState: AppState = {
    params: defaultParams,
    items: [],
    totalItems: 0
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setFilter: (state, {payload}) => {
            state.params = payload;
        },
        clearSearchData: (state) => {
            state.items = [];
            state.totalItems = 0;
        },
        clearParams: (state) => {
            state.params = defaultParams;
        }
    },
    extraReducers: builder => {
        builder.addMatcher(
            appApi.endpoints.getBooks.matchFulfilled,
            (state, {payload}) => {
                state.items = state.items.length === 0 ? payload.items : [...state.items, ...payload.items];
                state.totalItems = payload.totalItems;
            }
        );
    }
});

export const {setFilter, clearSearchData, clearParams} = appSlice.actions;

export default appSlice.reducer;
