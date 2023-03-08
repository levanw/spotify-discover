import React from 'react';
import { logout } from '../spotify';


class Profile extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <button onClick={logout}>Log Out</button>

                {this.props.profile && (
                    <div>
                        <h1>{this.props.profile.display_name}</h1>
                        <p>{this.props.profile.followers.total} Followers</p>
                        {this.props.profile.images.length && this.props.profile.images[0].url && (
                            <img src={this.props.profile.images[0].url} alt="Avatar" />
                        )}
                    </div>
                )}
            </>
        )
    }
}

export default Profile;