import React from "react";
import axios from "axios";
import { Button } from "antd";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const StyledButton = styled(Button)`
  margin-top: 1.2em;
  margin-right: 1em;
`;

const StyledLink = styled(Link)`
  margin-left: 57rem;
  margin-right: 1em;
`;

function RightMenu(props) {
  const user = useSelector((state) => state.user);

  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        props.history.push("/login");
      } else {
        alert("Failed to logout");
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <>
        <StyledLink to="/register">
          Sign Up
        </StyledLink>
        <Link to="/login">
          Sign In
        </Link>
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
