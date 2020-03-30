import React, {
    useState
} from 'react';
import { } from 'antd';
import styled from 'styled-components';
import { 
    useDispatch 
} from 'react-redux';
import { 
    registerUser 
} from '../../../_actions/user_action';


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
                password: Password
            };

            dispatch(registerUser(body))
                .then(response => {
                    if(response.payload.success) {
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
        <>
            <Div>
                <Form onSubmit={onRegisterHandler}>
                    <label>Email</label>
                    <input type="email" value={Email} onChange={onEmailHandler} />
                    <label>Name</label>
                    <input type="text" value={Name} onChange={onNameHandler} />
                    <label>Password</label>
                    <input type="password" value={Password} onChange={onPasswordHandler} />
                    <label>Confirm Password</label>
                    <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                    <br />
                    <button>
                        register
                    </button>
                </Form>
            </Div>
        </>
    )
}

export default RegisterPage
