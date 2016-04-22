import React from 'react';
import NavLink from './nav_link';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Ghettohub Issues</h1>
        <ul role="nav">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }

}

export default App;
