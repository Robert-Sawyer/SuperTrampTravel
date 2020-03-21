import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (username, email, password) => {
    return dispatch => {
        dispatch(authStart());

        const authData = {
            id: null,
            username: username,
            email: email,
            password: password,
            enabled: 0,
            roles: null
        };

        axios.post("192.168.1.177:8080/users/register.json", authData)
            .then(response => {
                dispatch(authSuccess(response.data));

            })
            .catch(err => {
                dispatch(authFail(err));
            })
    };
};