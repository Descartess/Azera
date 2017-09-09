import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGOUT
} from '../constants';

export function loginFailed(error) {
    return {
        type: LOGIN_FAILED,
        error: error.message
    }
}

export function loginSuccess(user) {
    return {
        type: LOGIN_SUCCESS,
        user: user
    }
}

export function logOut() {
    return {
        type: LOGOUT
    }
}