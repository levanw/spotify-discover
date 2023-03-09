import React from 'react';
import styled from 'styled-components/macro';

class Playlists extends React.Component {
    render() {

        const StyledPlaylists = styled.div`
        height: calc(50vh - 50px);
        border: solid 1px var(--white);
        `;
        return (
            <StyledPlaylists>
                <h1>Playlists</h1>                
            </StyledPlaylists>
        )
    };
};

export default Playlists;