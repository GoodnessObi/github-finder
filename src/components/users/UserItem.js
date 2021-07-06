import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItem = ({ user: { avatar_url, login, html_url }}) => {
  //destructing this.state so it wouldn't be written repeatedly
  // const { avatar_url, login, html_url } = props.user
  
  return (
    <div className="card text-center">
      <img src={avatar_url} alt="" className="round-img" style={{width:'60px'}} />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-small my-1">More...</Link>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
