import React from 'react';
import styled from 'styled-components/macro';

class SwipeRight extends React.Component {

    render() {

        const StyledSwipeRight = styled.div`
        height: 100%;
        width: 15%;
        border: solid 1px var(--orange);
        `;

        return (
            <StyledSwipeRight>
                <h1>Swipe Right</h1>                
            </StyledSwipeRight>
        )
    };
};

export default SwipeRight;