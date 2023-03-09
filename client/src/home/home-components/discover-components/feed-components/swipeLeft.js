import React from 'react';
import styled from 'styled-components/macro';

class SwipeLeft extends React.Component {

    render() {

        const StyledSwipeLeft = styled.div`
        height: 100%;
        width: 15%;
        border: solid 1px var(--orange);
        `;

        return (
            <StyledSwipeLeft>
                <h1>Swipe Left</h1>                
            </StyledSwipeLeft>
        )
    };
};

export default SwipeLeft;