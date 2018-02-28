import React from 'react';
import PropTypes from 'prop-types';
import { QueryComponent } from 'modules/QueryController';
import cx from 'classnames';
import QueryManager from 'flux/QueryManager';
import history from 'core/history';
import Collection from './Collection';
import { Spinner } from '@shopify/polaris';
import './Table.css';

export default class Table extends QueryComponent {
  queryForRequest() {
    return QueryManager.queryForCollections();
  }

  didSelect(collection) {
    return ()=>{
      history.push(`/products/${collection.id}`);
    }
  }

  render() {
    const { query } = this.state;

    return (
      <div className={cx('Table-Collections', this.props.className)}>
        {
          query.isLoading() &&
          <Spinner size="big" color="teal" />
        }

        {
          query.map((i)=><Collection
            key={i.id}
            name={i.name}
            onClick={this.didSelect(i)}
            className="Table-Collections-item"/>)
        }
      </div>
    );
  }
}

Table.propTypes = {
  className: PropTypes.string,
};
Table.defaultProps = {};
