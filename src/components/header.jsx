import React from 'react';

const Header = (props) => (
  <div className="logo2">
    <div className="ui horizontal medium divided list">
      <div className="item">
          <i className="user icon"/>
          <div className="middle aligned content">
              { props.currentUser }
          </div>
      </div>
      <div className="item pointer" onClick={props.handleLogout}>
          <i className="arrow left circle icon"/>
          <div className="middle aligned content">
              Logout
          </div>
      </div>
    </div>
  </div>
);

export default Header;
