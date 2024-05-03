import { combineReducers } from 'redux'; // Correct import statement

import amountReducer from './amountReducer';

const reducer = combineReducers({
  amount: amountReducer // Reducer named 'amount'
});

export default reducer;
