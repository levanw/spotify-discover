import React from 'react';
import Header from './home-components/header';
import Left from './home-components/playlists';
import Discover from './home-components/discover';
import History from './home-components/history';
import Song from './home-components/song';
import styled from 'styled-components/macro';

class Home extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {

        const StyledFiller = styled.div`
        height: 100px;
        width: 100vw;
        `;

        const StyledBody = styled.div`
        display: flex;
        height: calc(100vh - 100px);
        width: 100vw;
        border: solid 1px var(--yellow);
        `;

        const StyledLeft = styled.div`
        width: 20vw;
        height: calc(100vh - 100px);
        border: solid 1px var(--orange);
        `;

        return (
            <div>
                <Header profile={this.props.profile}/>
                <StyledFiller/>
                <StyledBody>
                    <StyledLeft>
                        <Left />
                        <Song />
                    </StyledLeft>
                    <Discover />
                    <History />
                </StyledBody>
            </div>
        )
    };
};

export default Home;