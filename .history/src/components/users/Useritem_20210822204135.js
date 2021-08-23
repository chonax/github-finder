import React, { Component } from 'react';

class Useritem extends Component {
  constructor() {
    super();

    this.state = {
      id: 'id',
      login: 'mojombo',
      avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/mojombo',
    }
  }

  render() {
    return (
      <div>
        <h1>UserItem</h1>
      </div>
    )
  }
}

export default Useritem;
