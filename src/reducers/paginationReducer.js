import {
  NEXT_PAGE,
  PREV_PAGE,
  GET_RECEIPTS_SUCCESS,
} from '../constants';

const initialState = {
  START: 0,
  END: 3,
  MAX: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PREV_PAGE: {
      if (state.START === 0) {
        return { ...state };
      }
      const newStart = state.START - 3;
      const newEnd = state.START;
      return { ...state, START: newStart, END: newEnd };
    }
    case NEXT_PAGE: {
      const newStart = state.END;
      const newEnd = state.END + 3;
      if (newStart > state.MAX) {
        return { ...state };
      }
      return { ...state, START: newStart, END: newEnd };
    }
    case GET_RECEIPTS_SUCCESS: {
      const maxLen = Object.keys(action.payload).length;
      return { ...state, MAX: maxLen };
    }
    default:
      return state;
  }
};
