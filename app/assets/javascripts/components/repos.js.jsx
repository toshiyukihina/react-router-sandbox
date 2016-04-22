import React from 'react';
import NavLink from './nav_link';
import {browserHistory} from 'react-router';

class Repos extends React.Component {

  constructor(props) {
    super(props);

    this.state = { userName: '', repo: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleRepoChange = this.handleRepoChange.bind(this);
  }

  handleUserNameChange(e) {
    this.setState({userName: e.target.value});
  }

  handleRepoChange(e) {
    this.setState({repo: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const userName = this.state.userName;
    const repo = this.state.repo;
    const path = `/repos/${userName}/${repo}`;
    this.context.router.push(path);
  }

  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">ReactRouter</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName" onChange={this.handleUserNameChange} /> / {' '}
              <input type="text" placeholder="repo" onChange={this.handleRepoChange} />{' '}
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
  
}

Repos.contextTypes = {
  router: React.PropTypes.object
};

export default Repos;
