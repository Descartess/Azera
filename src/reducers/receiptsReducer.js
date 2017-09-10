import { Map, List, fromJS } from 'immutable';
import { GET_RECEIPTS_SUCCESS } from '../constants';


const initialState = Map({
  receipts: List(),
});

export default(state = initialState, action) => {
  switch (action.type) {
    case GET_RECEIPTS_SUCCESS:
      return (
        state.merge(Map({
          receipts: fromJS(action.payload),
        }))
      );
    default:
      return state;
  }
};
