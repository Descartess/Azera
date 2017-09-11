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
import { database } from '../config/firebase';

export function getReceipts(dispatch) {
  return (dispatch) => {
    database().ref('receipts').on('value', (snapshot) => {
      dispatch({ type: GET_RECEIPTS_SUCCESS, payload: snapshot.val() });
    });
  };
}

export function handleAccept(receipt) {
  return {
    type: ACCEPT_RECEIPT_REQUEST,
    payload: receipt
  }
}

export function handleAcceptClose() {
  return {
    type: ACCEPT_RECEIPT_CLOSE
  }
}

export function confirmAccept(receipt) {
  return (dispatch) => {
    let updatedReceipt = Object.assign({}, receipt, {status: 'accepted'});

    let update = {};
    update['/receipts/' + receipt.uid] = updatedReceipt;
    database().ref().update(update).then(() => {
      dispatch({type: ACCEPT_RECEIPT_CONFIRM});
    });
  }
}

export function handleReject(receipt) {
  return {
    type: REJECT_RECEIPT_REQUEST,
    payload: receipt
  }
}

export function handleRejectClose() {
  return {
    type: REJECT_RECEIPT_CLOSE
  }
}

export function confirmRejection(receipt) {
  return (dispatch) => {
    let rejectedReceipt = Object.assign({}, receipt, {status: 'rejected'});

    let update = {};
    update['/receipts/' + receipt.uid] = rejectedReceipt;
    database().ref().update(update).then(() => {
      dispatch({type: REJECT_RECEIPT_CONFIRM});
    });
  }
}

export function handleDetails() {
  return {
    type: RECEIPT_DETAILS
  }
}

export function handleDetailsClose() {
  return {
    type: RECEIPT_DETAIL_CLOSE
  }
}

export function showPending(receipts) {
  return {
    type: RECEIPT_SHOW_PENDING,
    payload: receipts
  }
}

export function showRejected(receipts) {
  return {
    type: RECEIPT_SHOW_REJECTED,
    payload: receipts
  }
}

export function showAccepted(receipts) {
  return {
    type: RECEIPT_SHOW_ACCEPTED,
    payload: receipts
  }
}