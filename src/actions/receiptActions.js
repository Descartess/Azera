import { GET_RECEIPTS_SUCCESS } from '../constants';
import { database } from '../config/firebase';

export function getReceipts(dispatch) {
  return (dispatch) => {
    database().ref('receipts').on('value', (snapshot) => {
      dispatch({ type: GET_RECEIPTS_SUCCESS, payload: snapshot.val() });
    });
  };
}
