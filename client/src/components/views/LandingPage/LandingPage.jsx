import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function LandingPage() {

    useEffect(() => {
        axios.get('/api/hello')
        .then(res => { console.log(res.data) });
    }, [])

    return (
        <div>
            <Link to="/login">로그인</Link>
            &nbsp;
            <Link to="/register">회원가입</Link>
            &nbsp;
        </div>
    )
}

export default LandingPage
