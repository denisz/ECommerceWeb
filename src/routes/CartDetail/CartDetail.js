import React, { Component } from 'react';
import history from 'core/history';
import { NavComponent, NavAdapter } from 'modules/NavController';
import {toast} from 'react-toastify';
import transitions from './transitions';
import './CartDetail.css';
import {css} from 'glamor';

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
    window.scrollTo(0,0);
    this.setState({ adapter });
  }

  navAdapterDidRichEnd() {
    history.push(`/`);
  }

  navAdapterFailed(adapter, err) {
    console.log(err);

    toast.error(`Услуга недоступна`, {
      hideProgressBar: true,
      position: toast.POSITION.TOP_CENTER,
      autoClose: 4000,
      className: css({
        top: 40,
        minHeight: 40,
      }),
    });
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
