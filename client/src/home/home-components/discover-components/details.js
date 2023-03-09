import React from 'react';
import styled from 'styled-components/macro';

class Details extends React.Component {

    render() {

        const StyledDetails = styled.div`
        height: calc((100vh - 100px)/6);
        width: 100%;
        border: solid 1px var(--white);
        `;

        return (
            <StyledDetails>
                <h1>Details</h1>                
            </StyledDetails>
        )
    };
};

export default Details;