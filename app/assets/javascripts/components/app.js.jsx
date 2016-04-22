import React from 'react';
import NavLink from './nav_link';
import Home from './home';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Ghettohub Issues</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {this.props.children || <Home />}
      </div>
    );
  }

}

export default App;
