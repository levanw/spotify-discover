import React from 'react';
import Add from './title-components/add';
import TrackInfo from './title-components/trackinfo';
import PlayPause from './title-components/playpause';
import styled from 'styled-components/macro';

class Title extends React.Component {

    render() {

        const StyledTitle = styled.div`
        height: calc((100vh - 100px)/6);
        width: 100%;
        border: solid 1px var(--orange);
        display: flex;
        `;

        return (
            <StyledTitle>
                <Add/>
                <TrackInfo/>
                <PlayPause/>               
            </StyledTitle>
        )
    };
};

export default Title;