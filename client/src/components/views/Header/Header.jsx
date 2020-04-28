import React from "react";
import axios from "axios";
import { Layout, Button } from "antd";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

const StyledHeader = styled(Layout.Header)`
  display: flex;
  justify-content: flex-end;
  padding: 0;
`;

const StyledButton = styled(Button)`
  margin-top: 1.2em;
  margin-right: 1em;
`;

function Header(props) {
  const user = useSelector(state => state.user);

  const onClickLogout = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        props.history.push("/login");
      } else {
        alert("Failed to logout");
      }
    });
  };

  const onClickLogin = () => {
    props.history.push("/login");
  }

  const onClickRegister = () => {
    props.history.push("/register");
  }

  if (user.userData && !user.userData.isAuth) {
    return (
      <StyledHeader className="site-layout-background">
        <StyledButton danger onClick={onClickLogout}>
          Logout
        </StyledButton>
      </StyledHeader>
    );
  } else {
    return (
      <StyledHeader className="site-layout-background">
        <StyledButton type="primary" onClick={onClickRegister}>
          Signup
        </StyledButton>
        <StyledButton type="primary" onClick={onClickLogin}>
          Login
        </StyledButton>
      </StyledHeader>
    );
  }
}

export default withRouter(Header);
