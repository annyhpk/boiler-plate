import React, { useState } from 'react';
import { Button, Input, Layout } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
`;

function RegisterPage(props) {
  const dispatch = useDispatch();

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onNameHandler = (e) => {
    setName(e.target.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onRegisterHandler = (e) => {
    e.preventDefault();

    if (Password === ConfirmPassword) {
      let body = {
        email: Email,
        name: Name,
        password: Password,
      };

      dispatch(registerUser(body)).then((response) => {
        if (response.payload.success) {
          props.history.push('/login');
        } else {
          alert('Failed to Sign up');
        }
      });
    } else {
      return alert('비밀번호가 같지 않습니다.');
    }
  };

  return (
    <Layout>
      <Div>
        <Form onSubmit={onRegisterHandler}>
          <h2>회원가입</h2>
          <label>Email</label>
          <Input type="email" value={Email} onChange={onEmailHandler} />
          <label>Name</label>
          <Input type="text" value={Name} onChange={onNameHandler} />
          <label>Password</label>
          <Input.Password value={Password} onChange={onPasswordHandler} />
          <label>Confirm Password</label>
          <Input.Password value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
          <br />
          <Button type="primary" htmlType="submit">
            register
          </Button>
        </Form>
      </Div>
    </Layout>
  );
}

export default withRouter(RegisterPage);
