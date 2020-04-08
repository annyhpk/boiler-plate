import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from './types';

export const loginUser = createAction(LOGIN_USER, function prepare(dataToSubmit) {
    const request = axios.post('/api/users/login', dataToSubmit)
        .then( response => response.data );

    return {
        payload: request
    }
});

export const registerUser = createAction(REGISTER_USER, function prepare(dataToSubmit) {
    const request = axios.post('/api/users/register', dataToSubmit)
        .then( response => response.data );

    return {
        payload: request
    }
});

export const auth = createAction(AUTH_USER, function prepare() {
    const request = axios.get('/api/users/auth')
        .then( response => response.data );

    return {
        payload: request
    }
});