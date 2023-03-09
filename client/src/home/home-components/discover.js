import React from 'react';
import Title from './discover-components/title';
import Feed from './discover-components/feed';
import Details from './discover-components/details';
import styled from 'styled-components/macro';

class Discover extends React.Component {
    render() {

        const StyledDiscover = styled.div`
        width: 60vw;
        height: calc(100vh - 100px);
        border: solid 1px var(--yellow);
        `;

        return (
            <StyledDiscover>
                <Title/>
                <Feed/>
                <Details/>              
            </StyledDiscover>
        )
    };
};

export default Discover;