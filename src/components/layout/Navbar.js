import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Navbar extends Component {
  // This would be used in the event that no prop is passed in
  // static defaultProps = {
  //   title: 'Github Finder',
  //   icon: 'fab fa-github'
  // }

  //This defines the type of prop expected ex. array, string, object etc.
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }

  render() {
    //destructured props
    const { icon, title } = this.props

    return (
      <div className='navbar bg-primary'>
        <h1>
          <i className={icon}></i> {title}
        </h1>
      </div>
    )
  }
}

export default Navbar
