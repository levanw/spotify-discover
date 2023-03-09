import React from 'react';
import styled from 'styled-components/macro';

class Header extends React.Component {
    render() {

        const StyledHeader = styled.div`
        background-color: var(--midnight-green);
        display: flex;
        padding: 20px;
        justify-content: space-between;
        align-items: baseline;
        height: 100px;
        width: 100vw;
        border: solid 1px var(--yellow);
        position: absolute;
        `;

        const StyledLeft = styled.div`
        display: flex;
        align-items: baseline;
        h4 {
            color: var(--orange);
            margin-left: 20px;
        }
        `;

        return (
            <StyledHeader>
                <StyledLeft>
                    <h1>b-side</h1>
                    <h4>MUSIC DISCOVERY</h4>
                </StyledLeft>
                <div className='header-right'>
                    <h4>PROFILE</h4>
                </div>
            </StyledHeader>
        )
    };
};

export default Header;