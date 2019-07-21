import React, { Component } from 'react';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_report,
      publice_gists,
      hireable
      } = this.props.user;
      
const {loading}

    return <div>User</div>;
  }
}

export default User;
