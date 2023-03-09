import React from 'react';
import styled from 'styled-components/macro';

class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const StyledLoginButton = styled.a`
            background-color: var(--orange);
            color: var(--midnight-green);
            padding: 10px 20px;
            margin: 20px;
            border-radius: 30px;
            display: inline-block;
            text-decoration: none;
        `;

        return (
            <StyledLoginButton className="App-link" href="http://localhost:8888/login">
                Log in to Spotify
            </StyledLoginButton>
        )
    }
}

export default Login;