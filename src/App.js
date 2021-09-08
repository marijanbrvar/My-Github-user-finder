import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
class App extends Component{
  state = {
    users: [],
    loading: false
  }

  searchUser = async (text) => {
    this.setState({loading: true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_ID}&clinet_secret=${process.env.REACT_APP_GITHUB_SECRET}`)

    this.setState({users: res.data.items, loading: false})
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          <Search searchUser={this.searchUser}/>
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
