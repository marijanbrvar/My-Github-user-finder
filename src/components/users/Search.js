import React, { Component } from 'react'

export class Search extends Component {
  state = {
    text: ''
  }
  
  onChange = (e) => this.setState({ [e.target.name]: e.target.value })
  
  onSubmit = (e) => {
    e.preventDefault()
    this.props.searchUser(this.state.text);
    this.setState({[e.target.name]: ''})
  }
  render() {

    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input 
            type='text'
            name='text'
            placeholder='Search User...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input 
            type='submit'
            name='search'
            className="btn btn-dark btn-block" 
          />
        </form>
      </div>
    )
  }
}

export default Search
