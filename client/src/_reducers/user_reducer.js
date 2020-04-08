import { createReducer } from '@reduxjs/toolkit';

import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from '../_actions/types';

export default createReducer({}, {
    [LOGIN_USER]: (state, action) => {
        return {
            ...state,
            loginSuccess: action.payload,
        }
    },   
    [REGISTER_USER]: (state, action) => {
        return {
            ...state,
            register: action.payload,
        }
    },
    [AUTH_USER]: (state, action) => {
        return {
            ...state,
            userData: action.payload,
        };
    }   
})