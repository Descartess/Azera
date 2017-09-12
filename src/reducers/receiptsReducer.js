import { Map, List, fromJS } from 'immutable';
import {
    GET_RECEIPTS_SUCCESS,
    ACCEPT_RECEIPT_REQUEST,
    ACCEPT_RECEIPT_CLOSE,
    ACCEPT_RECEIPT_CONFIRM,
    REJECT_RECEIPT_REQUEST,
    REJECT_RECEIPT_CLOSE,
    REJECT_RECEIPT_CONFIRM,
    RECEIPT_DETAILS,
    RECEIPT_DETAIL_CLOSE
} from '../constants';


const initialState = Map({
  receipts: List(),
  showAccept: false,
  showReject: false,
  selectedReceipt: null,
  showDetails: false,
});

export default(state = initialState, action) => {
  switch (action.type) {
    case GET_RECEIPTS_SUCCESS:
      return (
        state.merge(Map({
          receipts: fromJS(action.payload),
        }))
      );
    case ACCEPT_RECEIPT_REQUEST:
      return (
        state.merge(Map({
          showAccept: true,
          selectedReceipt: action.payload,
        }))

      );
    case ACCEPT_RECEIPT_CLOSE:
      return (
        state.merge(Map({
          showAccept: false,
          selectedReceipt: null,
        }))
      );
    case ACCEPT_RECEIPT_CONFIRM:
      return (
        state.merge(Map({
          showAccept: false,
          selectedReceipt: null,
        }))
      );
    case REJECT_RECEIPT_REQUEST:
      return (
        state.merge(Map({
          showReject: true,
          selectedReceipt: action.payload,
        }))
      );
    case REJECT_RECEIPT_CLOSE:
      return (
        state.merge(Map({
          showReject: false,
          selectedReceipt: null,
        }))
      );
    case REJECT_RECEIPT_CONFIRM:
      return (
        state.merge(Map({
          showReject: false,
          selectedReceipt: null
        }))
      );
    case RECEIPT_DETAILS:
        return (
            state.merge(Map({
                showDetails: true,
                selectedReceipt: action.payload
            }))
        );
    case RECEIPT_DETAIL_CLOSE:
      return (
          state.merge(Map({
              showDetails: false,
              selectedReceipt: null
          }))
      );
    default:
      return state;
  }
};
