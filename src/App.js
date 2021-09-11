import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import Search from './components/users/Search';
class App extends Component{
  state = {
    users: [],
    loading: false,
    alert: null
  }

  searchUser = async (text) => {
    this.setState({loading: true})

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_ID
      }&clinet_secret=${process.env.REACT_APP_GITHUB_SECRET}`)

    this.setState({users: res.data.items, loading: false})
  }

  clearUsers = () => {
    this.setState({users: [], loading: false})
  }

  setAlert = (msg, type) => {
    this.setState({alert: { msg, type }})

    setTimeout(() => {
      this.setState({alert: null})
    }, 3000);
  }

  render() {
    const {alert, users, loading} = this.state
    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          <Alert alert={alert}/>
          <Search 
            searchUser={this.searchUser} 
            clearUsers={this.clearUsers} 
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users}/>
        </div>
      </div>
    );
  }
}

export default App;
