import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

import axios from "axios";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // Search Github Users
  searchUsers = async (text) => {
    setLoading(true);

    const res =
      await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
      {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
      {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setUsers(res.data.items);
    setLoading(false);
  };

  // Get Single Github User
  getUser = async (username) => {
    setLoading(true);

    const res =
      await axios.get(`https://api.github.com/users/${username}?client_id=$
      {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
      {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({
      setUser(res.data)
      setLoading(false)
    });
  };

  // Get User's Repos
  getUserRepos = async (username) => {
    setLoading(true);

    const res =
      await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=$
      {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
      {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({
      repos: res.data,
      loading: false,
    });
  };

  // Clear search results
  clearUsers = () => this.setState({ users: [], loading: false });

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { users, user, loading, repos } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
