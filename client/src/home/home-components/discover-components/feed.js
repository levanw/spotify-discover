import React from 'react';
import SwipeLeft from './feed-components/swipeLeft';
import Song from './feed-components/song';
import SwipeRight from './feed-components/swipeRight';
import styled from 'styled-components/macro';

class Feed extends React.Component {

    render() {

        const StyledFeed = styled.div`
        height: calc(4*(100vh - 100px)/6);
        width: 100%;
        border: solid 1px var(--white);
        display: flex;
        `;

        return (
            <StyledFeed>
                <SwipeLeft/>
                <Song/>
                <SwipeRight/>               
            </StyledFeed>
        )
    };
};

export default Feed;