import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './app';
import Home from './home';
import Repos from './repos';
import Repo from './repo';
import About from './about';

class Main extends React.Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/repos" component={Repos}>
            <Route path="/repos/:userName/:repoName" component={Repo}></Route>
          </Route>
          <Route path="/about" component={About} />
        </Route>
      </Router>
    );
  }
  
}

export default Main;
