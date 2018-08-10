import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Header, Footer } from 'components';
import { Home } from 'containers';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
