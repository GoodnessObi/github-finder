import React, { Component } from 'react'

class UserItem extends Component {
  /* using a constructor for state management
  Will run when page loads
  Advisable to only use if you have to use somewhere else in the project */
  // constructor() {
  //   super();
  //   this.state = {
  //     id: 'id',
  //     login: "GoodnessObi",
  //     avatar_url: "https://avatars.githubusercontent.com/u/50333058?v=4",
  //     html_url: "https://github.com/GoodnessObi",
  //   }
  // }

  state = {
        id: 'id',
        login: "GoodnessObi",
        avatar_url: "https://avatars.githubusercontent.com/u/50333058?v=4",
        html_url: "https://github.com/GoodnessObi",
      }

  render() {
    //destructing this.state so it wouldn't be written repeatedly
    const { avatar_url, login, html_url } = this.state
    
    return (
      <div className="card text-center">
        <img src={avatar_url} alt="" className="round-img" style={{width:'60px'}} />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-small my-1">More...</a>
        </div>
      </div>
    )
  }
}

export default UserItem
