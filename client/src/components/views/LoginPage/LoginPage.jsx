import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div>
            <Link to="/">홈으로</Link>
            &nbsp;
            <Link to="/register">회원가입</Link>
            &nbsp;
        </div>
    )
}

export default LoginPage
