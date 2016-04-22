import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import App from './app';
import Repos from './repos';
import About from './about';

class Main extends React.Component {

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/repos" component={Repos} />
          <Route path="/about" component={About} />
        </Route>
      </Router>
    );
  }
  
}

export default Main;
