import React from 'react';
import {Link} from 'react-router';

class Repos extends React.Component {

  render() {
    return (
      <ul>
        <li><Link to="/repos/reactjs/react-router">ReactRouter</Link></li>
        <li><Link to="/repos/facebook/react">React</Link></li>
      </ul>
    );
  }
  
}

export default Repos;
