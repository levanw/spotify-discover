import React from 'react';
import styled from 'styled-components/macro';

class Add extends React.Component {

    render() {

        const StyledAdd = styled.div`
        height: 100%;
        width: 15%;
        border: solid 1px var(--orange);
        `;

        return (
            <StyledAdd>
                <h1>Add</h1>                
            </StyledAdd>
        )
    };
};

export default Add;