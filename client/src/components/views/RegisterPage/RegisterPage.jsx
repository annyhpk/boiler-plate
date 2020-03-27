import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
    return (
        <div>
            <Link to="/">홈으로</Link>
            &nbsp;
            <Link to="/login">로그인</Link>
            &nbsp;
        </div>
    )
}

export default RegisterPage
