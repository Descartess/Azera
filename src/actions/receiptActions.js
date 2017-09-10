import { GET_RECEIPTS_SUCCESS } from '../constants';
import { database } from '../config/firebase';

export function getReceipts(dispatch) {
  return (dispatch) => {
    database().ref('receipts').on('value', (snapshot) => {
      console.log(typeof(snapshot.val()));
      dispatch({ type: GET_RECEIPTS_SUCCESS, payload: snapshot.val() });
    });
  };
}
