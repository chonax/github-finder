import React, { Component } from "react";
import Spinner from "../layout/Spinner";

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

    const { loading } = this.props;

    return (
      <div>
        <h1>User</h1>
      </div>
    );
  }
}

export default User;
