import React, { Component } from "react";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      folliwing,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    return (
      <div>
        <h1>User</h1>
      </div>
    );
  }
}

export default User;
