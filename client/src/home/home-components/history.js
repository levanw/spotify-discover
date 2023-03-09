import React from 'react';
import styled from 'styled-components/macro';

class History extends React.Component {
    render() {

        const StyledHistory = styled.div`
        height: calc(100vh - 100px);
        width: 20vw;
        border: solid 1px var(--white);
        `;

        return (
            <StyledHistory>
                <h1>History</h1>                
            </StyledHistory>
        )
    };
};

export default History;