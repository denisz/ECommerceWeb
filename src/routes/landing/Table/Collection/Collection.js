import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Collection.css';

export default class Collection extends PureComponent {
  render() {
    return (
      <div className="Collection" onClick={this.props.onClick}>
        <div className="Collection-name">{this.props.name}</div>
      </div>
    );
  }
}

Collection.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
};
Collection.defaultProps = {
  onClick: ()=>{},
  name: '',
};
