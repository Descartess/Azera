import React from 'react';

const Header = () => (
  <div className="logo2">
    <div className="ui horizontal medium divided list">
      <div className="item">
          <i className="user icon"/>
          <div className="middle aligned content">
              Paul
          </div>
      </div>
      <div className="item">
          <i className="setting icon"/>
          <div className="middle aligned content">
              Account settings
          </div>
      </div>
      <div className="item">
          <i className="arrow left circle icon"/>
          <div className="middle aligned content">
              Logout
          </div>
      </div>
    </div>
  </div>
);

export default Header;
