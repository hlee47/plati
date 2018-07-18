import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Header } from 'components';
import { AboutGiving, AboutOurStory, AboutUs, Category, Home, Login, MySweelthy, Product, Register, Wall } from 'containers';
import { connect } from 'react-redux';
import { getStatusRequest, logoutRequest } from 'actions/authentication';
import { searchRequest } from 'actions/search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    // get cookie by name
    function getCookie(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length == 2) return parts.pop().split(";").shift();
    }

    // get loginData from cookie
    let loginData = getCookie('key');

    // if loginData is undefined, do nothing
    if(typeof loginData === "undefined") return;

    // decode base64 & parse json
    loginData = JSON.parse(atob(loginData));

    // if not logged in, do nothing
    if(!loginData.isLoggedIn) return;

    // page refreshed & has a session in cookie,
    // check whether this cookie is valid or not
    this.props.getStatusRequest().then(
      () => {
        console.log(this.props.status);

        // if session is not valid
        if(!this.props.status.valid) {

          // logout the session
          loginData = {
            isLoggedIn: false,
            username: ''
          };

          document.cookie='key=' + btoa(JSON.stringify(loginData));

          // and notify
          let $toastContent = $('<span style="color: #FFB4BA">Your session is expired, pleasel og in again</span>');
          Materialize.toast($toastContent, 4000);
        }
      }
    );
  }

  handleLogout() {
    this.props.logoutRequest().then(
      () => {
        Materialize.toast('Good Bye!', 2000);
        // EMPTIES THE SESSION
        let loginData = {
          isLoggedIn: false,
          username: ''
        };

        document.cookie = 'key=' + btoa(JSON.stringify(loginData));
      }
    );
  }

  handleSearch(keyword) {
    this.props.searchRequest(keyword);
  }

  render() {
    /* Check whether current route is login or register using regex */
    let re = /(login|register)/;
    let isAuth = re.test(this.props.location.pathname);
    const instafeedTarget = 'instafeed';
    return (
      <div>
        <Header/>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/wall/:username" component={Wall}/>
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.authentication.status,
    searchResults: state.search.usernames,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStatusRequest: () => {
      return dispatch(getStatusRequest());
    },
    logoutRequest: () => {
      return dispatch(logoutRequest());
    },
    searchRequest: (keyword) => {
      return dispatch(searchRequest(keyword));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
