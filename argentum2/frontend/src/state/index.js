import { combineReducers } from 'redux';
import Store from './store';

import UsersReducer from './UsersReducer';

const appReducer = combineReducers({
    user: userReducer,
});

const rootReducer = (state, action) => {
    // when a logout action is dispatched it will reset redux state
    if (action.type === 'LOGOUT') {
      state = undefined;
    }
  
    return store(state, action);
  };

ex