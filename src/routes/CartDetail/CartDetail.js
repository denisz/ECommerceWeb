import React, { Component } from 'react';
import history from 'core/history';
import { NavComponent, NavAdapter } from 'modules/NavController';
import transitions from './transitions';
import './CartDetail.css';

export default class CartDetail extends Component {
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

  navAdapterDidNext() {
    window.scrollTo(0,0);
  }

  navAdapterDidBack() {
    window.scrollTo(0,0);
  }

  navAdapterDidRichEnd() {
    history.push(`/`);
  }

  render() {
    const { adapter } = this.state;

    return (
      <div className="Cart-detail">
        <NavComponent adapter={adapter} />
      </div>
    );
  }
}

CartDetail.propTypes = {};
CartDetail.defaultProps = {};
