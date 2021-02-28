import React, { Component } from 'react';

class UserItem extends Component {
  state = {
    id: 1,
    login: 'octocat',
    avatar_url:
      'https://icon-library.com/images/avatar-icon-png/avatar-icon-png-15.jpg',
    html_url: 'https://github.com/octocat',
  };

  render() {
    const { login, avatar_url, html_url } = this.state;
    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          className='round-img'
          style={{ width: '60px' }}
          alt=''
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className='btn btn-dark btn-sm my-1'>
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
