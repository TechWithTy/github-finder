import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

export default class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users?cliend_id=${process.env.}');
    this.setState({ users: res.data, loading: false });
  }
  render() {
   
    return (
      <div className="App">
        <Navbar style1="fab fa-github" />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}
