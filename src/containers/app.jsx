import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as authActions from "../actions/authActions";

import { googleProvider, firebaseAuth } from '../config/firebase';
import Home from './Home';
import Login from '../components/Login';

class App extends Component {
  handleGoogleLogin() {
    firebaseAuth().signInWithRedirect(googleProvider)
        .catch((error) => {
          this.props.authAction.loginFailed(error);
        });
    localStorage.setItem("firebaseAuthKey", "1");
  }

  handleLogout() {
    firebaseAuth().signOut();
    localStorage.clear();
    this.props.authAction.logOut();
  }

  componentWillMount() {
    firebaseAuth().onAuthStateChanged((user) => {
      if(user) {
        this.props.authAction.loginSuccess(user);
        localStorage.setItem("authToken", user.uid);
      }
    });
  }

  render() {
    return (
      (localStorage.getItem("firebaseAuthKey") === "1") ?
          <Home
              currentUser={this.props.auth.currentUser}
              handleLogout={this.handleLogout.bind(this)}
          />
              :
          <Login
              handleGoogleLogin={this.handleGoogleLogin.bind(this)}
          />
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.toJS()
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authAction: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);