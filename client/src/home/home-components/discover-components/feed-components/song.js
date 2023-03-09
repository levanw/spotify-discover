import React from 'react';
import styled from 'styled-components/macro';

class Song extends React.Component {

    render() {

        const StyledSong = styled.div`
        height: 100%;
        width: 70%;
        border: solid 1px var(--yellow);
        `;

        return (
            <StyledSong>
                <h1>Song</h1>                
            </StyledSong>
        )
    };
};

export default Song;