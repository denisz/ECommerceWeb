import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavAdapter } from 'modules/NavController';
import './Delivery.css';

export default class Delivery extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

Delivery.propTypes = {};
Delivery.defaultProps = {};

Delivery.contextTypes = {
  adapter: PropTypes.instanceOf(NavAdapter).isRequired,
};
