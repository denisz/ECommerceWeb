import React, { Component } from 'react';
import {NavAdapter, NavPager} from 'modules/NavController';
import transitions from './transitions';
import './OrdersPager.css';

export default class OrdersPager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adapter: new NavAdapter(this, transitions, {
        currentState: 0,
      }),
    };
  }

  navAdapterDidUpdate(adapter) {
    this.setState({ adapter });
  }

  navAdapterDidRichEnd() {
  }

  render() {
    const { adapter } = this.state;

    return (
        <div className="OrdersPager">
          <NavPager adapter={adapter} />
        </div>
    );
  }
}