import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: "ifatoki",
        avatar_url: "https://avatars.githubusercontent.com/u/28437656?v=4",
        html_url: "https://github.com/ifatoki"
      },
      {
        id: '2',
        login: "GoodnessObi",
        avatar_url: "https://avatars.githubusercontent.com/u/50333058?v=4",
        html_url: "https://github.com/GoodnessObi",
      },
      {
        login: "blossom-babs",
        id: '3',
        avatar_url: "https://avatars.githubusercontent.com/u/58997189?v=4",
        html_url: "https://github.com/blossom-babs",
      }
    ]
  }

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ) )}
      </div>
    )
  }
}

const userStyle ={
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users
