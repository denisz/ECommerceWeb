import React, { Component } from 'react';
import AuthActions from 'flux/AuthActions';
import Link from 'components/Link';
import history from 'core/history';
import './Logout.css';

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentWillMount() {
    try {
      await AuthActions.logout();
      history.push('/');
    } catch ({ message }) {
      this.setState({ error: message });
    }
  }

  render() {
    return (
      <div className="Logout">
        <div className="container-fluid">
          <h1 className="text-center">Вы покинули систему</h1>
          <p className="text-center">Переход <Link to="/">на главную</Link></p>
        </div>
      </div>
    );
  }
}

Logout.propTypes = {};
Logout.defaultProps = {};
