import {
  NEXT_PAGE,
  PREV_PAGE,
} from '../constants';

export function nextPage() {
  return {
    type: NEXT_PAGE,
  };
}

export function prevPage() {
  return {
    type: PREV_PAGE,
  };
}
