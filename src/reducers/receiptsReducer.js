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
    RECEIPT_DETAIL_CLOSE,
    RECEIPT_SHOW_PENDING,
    RECEIPT_SHOW_REJECTED,
    RECEIPT_SHOW_ACCEPTED
} from '../constants';


const initialState = Map({
  receipts: List(),
  showAccept: false,
  showReject: false,
  selectedReceipt: null,
  showDetails: false,
  showPending: false,
  showRejected: false,
  pendingReceipts: List(),
  rejectedReceipts: List(),
  acceptedReceipts: List()
});

export default(state = initialState, action) => {
  switch (action.type) {
    case GET_RECEIPTS_SUCCESS:
      return (
        state.merge(Map({
          receipts: fromJS(action.payload),
          showAccepted: false,
          showPending: false,
          showRejected: false,
          pendingReceipts: List(),
          rejectedReceipts: List(),
          acceptedReceipts: List()
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
          selectedReceipt: null,
        }))
      );
    case RECEIPT_DETAILS:
        return (
            state.merge(Map({
                showDetails: true
            }))
        );
    case RECEIPT_DETAIL_CLOSE:
      return (
          state.merge(Map({
              showDetails: false
          }))
      );
    case RECEIPT_SHOW_PENDING:
        return (
            state.merge(Map({
               showAccepted: false,
               showPending: true,
               showRejected: false,
               pendingReceipts: action.payload,
               rejectedReceipts: null,
               acceptedReceipts: null
            }))
        );
    case RECEIPT_SHOW_REJECTED:
        return (
            state.merge(Map({
               showAccepted: false,
               showRejected: true,
               showPending: false,
               pendingReceipts: null,
               rejectedReceipts: action.payload,
               acceptedReceipts: null
            }))
        );
    case RECEIPT_SHOW_ACCEPTED:
        return (
            state.merge(Map({
               showAccepted: true,
               showRejected: false,
               showPending: false,
               pendingReceipts: null,
               rejectedReceipts: null,
               acceptedReceipts: action.payload
            }))
        );
    default:
      return state;
  }
};
