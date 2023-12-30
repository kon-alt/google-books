import {Action, combineReducers} from '@reduxjs/toolkit';
import {appApi} from './app.api';
import app from './app.slice';

const appReducer = combineReducers({
  app,
  [appApi.reducerPath]: appApi.reducer,
});

const rootState: any = {};

const rootReducer = (state: typeof rootState, action: Action) => {
  if (action.type === 'settings/setLogout') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
export default rootReducer;
