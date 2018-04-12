import React, { Component } from 'react';
import './Dashboard.css';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Dashboard">
        Статистика
      </div>
    );
  }
}

Dashboard.propTypes = {};
Dashboard.defaultProps = {};
