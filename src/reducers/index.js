import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ReceiptsReducer from './receiptsReducer';
import PaginationReducer from './paginationReducer';

const reducers = combineReducers({
  auth: AuthReducer,
  receipts: ReceiptsReducer,
  pages: PaginationReducer,
});

export default reducers;
