import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  //destructured props
  // const { icon, title } = props

  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
  )
}

  // This would be used in the event that no prop is passed in
  // Navbar.defaultProps = {
  //   title: 'Github Finder',
  //   icon: 'fab fa-github'
  // }

  //This defines the type of prop expected ex. array, string, object etc.
  Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }

export default Navbar
