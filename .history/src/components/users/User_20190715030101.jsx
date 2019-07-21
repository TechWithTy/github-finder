import React, { Component } from 'react'

export class User extends Component {
    
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }

    render() {
        const {
            name,
        } = this.props.user;
        return (
            <div>
                User
            </div>
        )
    }
}

export default User
