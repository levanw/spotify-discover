import React from 'react';
import styled from 'styled-components/macro';

class PlayPause extends React.Component {

    render() {

        const StyledPlayPause = styled.div`
        height: 100%;
        width: 15%;
        border: solid 1px var(--orange);
        `;

        return (
            <StyledPlayPause>
                <h1>Play/Pause</h1>                
            </StyledPlayPause>
        )
    };
};

export default PlayPause;