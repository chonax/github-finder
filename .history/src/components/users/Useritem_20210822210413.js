import React, { Component } from 'react';

const UserItem = () => {
  const { login, avatar_url, html_url } = this.user;

  return (
    <div className="card text-center">
      <img 
        alt=""
        src={avatar_url} 
        className="round-img"
        style={{width: '60px'}}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  )
}

export default Useritem;