import { combineReducers } from '@reduxjs/toolkit';

import CounterReducer from './Counter.reducer';

const reducer = combineReducers({CounterReducer});

export default reducer;