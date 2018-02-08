import React, { Component } from 'react';
import './Test.css';

export default class Test extends Component {
  componentDidMount() {
    fetch('localhost:3000');
  }

  render() {
    return (
      <div className="App">
        Test
      </div>
    );
  }
}

Test.propTypes = {};
Test.defaultProps = {};
