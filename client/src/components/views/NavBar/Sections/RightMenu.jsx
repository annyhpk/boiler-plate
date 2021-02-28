import React from 'react';
import axios from 'axios';
import { Button } from 'antd';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StyledButton = styled(Button)`
  position: absolute;
  right: 10px;
  top: 8px;
  margin-right: 1em;
`;

const StyledLink = styled(Link)`
  position: absolute;
  right: 105px;
  top: 8px;
  border: 1px solid #1890ff;
  border-radius: 2px;
  padding: 0px 15px;
  height: 32px;
  line-height: 30px;
  margin-right: 0.5em;
`;

const StyledLink2 = styled(StyledLink)`
  right: 20px;
`;

function RightMenu(props) {
  const user = useSelector((state) => state.user);

  const onClickHandler = () => {
    axios.get('/api/users/logout').then((response) => {
      if (response.data.success) {
        props.history.push('/login');
      } else {
        alert('Failed to logout');
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <>
        <StyledLink to="/register">Sign Up</StyledLink>
        <StyledLink2 to="/login">Sign In</StyledLink2>
      </>
    );
  } else {
    return (
      <>
        <StyledLink to="/video/upload">Upload</StyledLink>
        <StyledButton danger onClick={onClickHandler}>
          Logout
        </StyledButton>
      </>
    );
  }
}

export default withRouter(RightMenu);
