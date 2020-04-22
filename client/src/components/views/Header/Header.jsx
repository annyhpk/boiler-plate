import React from 'react';
import axios from 'axios';
import { Layout, Button } from 'antd';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const StyledHeader = styled(Layout.Header)`
    display: flex;
    justify-content: flex-end;
    padding: 0;
`

const StyledButton = styled(Button)`
    margin-top: 1.2em;
    margin-right: 1em;
` 
    
function Header(props) {

    const onClickHandler = () => {
        axios.get('/api/users/logout')
            .then(response => {
                if(response.data.success) {
                    props.history.push('/login');
                } else {
                    alert('Failed to logout');
                }
            });
    };

    return (
        <StyledHeader className="site-layout-background">
            <StyledButton danger onClick={onClickHandler}>
                logout
            </StyledButton>
        </StyledHeader>
    )
};

export default withRouter(Header);
