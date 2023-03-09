import React from 'react';
import styled from 'styled-components/macro';

class Song extends React.Component {

    render() {

        const StyledSong = styled.div`
        height: calc(50vh - 50px);
        border: solid 1px var(--white);
        `;

        return (
            <StyledSong>
                <h1>Song</h1>                
            </StyledSong>
        )
    };
};

export default Song;