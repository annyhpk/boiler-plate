import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null) {

    //null  => 아무나
    //true  => 로그인한 유저만
    //false => 로그인한 유저는 출입불가

    function AuthenticationCheck(props) {
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth())
                .then(response => {
                    if (!response.payload.isAuth) {
                        if (option) {
                            props.history.push('/login');
                        }
                    } else {
                        if (adminRoute && !response.payload.isAdmin) {
                            props.history.push('/')
                        } else {
                            if(option === false);
                            props.history.push('/')
                        }
                    }
                });
        }, [])

        return (
            <SpecificComponent />
        )
    }

    return AuthenticationCheck;
}