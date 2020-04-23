import React, { useState } from 'react';
import { Button, Input, Layout } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';
import Navbar from '../NavBar/NavBar';

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

function LoginPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const onEmailHandler = (e) => {
        setEmail(e.target.value);
    };

    const onPasswordHandler = (e) => {
        setPassword(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let body = {
            email: Email,
            password: Password
        };

        dispatch(loginUser(body))
            .then(response => {
                if(response.payload.loginSuccess) {
                    props.history.push('/');
                } else {
                    alert('로그인 실패!');
                }
                
            });
    };

    return (
        <Layout>
            <Navbar />
            <Div>
                <Form onSubmit={onSubmitHandler}>
                    <h2>로그인</h2>
                    <label>Email</label>
                    <Input type="email" value={Email} onChange={onEmailHandler} />
                    <label>Password</label>
                    <Input.Password value={Password} onChange={onPasswordHandler} />
                    <br />
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form>
            </Div>  
        </Layout>
    )
}

export default withRouter(LoginPage);
