import React from 'react';
import styled from 'styled-components/macro';

class TrackInfo extends React.Component {

    render() {

        const StyledTrackInfo = styled.div`
        height: 100%;
        width: 70%;
        border: solid 1px var(--orange);
        `;

        return (
            <StyledTrackInfo>
                <h1>Track Info</h1>                
            </StyledTrackInfo>
        )
    };
};

export default TrackInfo;