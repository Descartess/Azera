import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ReceiptsReducer from './receiptsReducer';

const reducers = combineReducers({
  auth: AuthReducer,
  receipts: ReceiptsReducer,
});

export default reducers;
