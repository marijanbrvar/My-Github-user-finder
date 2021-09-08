import React from 'react'
import PropTypes from 'prop-types';

const UserItem = ({user: { login, avatar_url, html_url }}) => {
  return (
    <div className='card text-center'>
      <img 
        src={avatar_url}
        alt=""
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <button className='btn btn-dark btn-sm my-1'>More</button>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
