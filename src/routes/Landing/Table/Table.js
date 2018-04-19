import React from 'react';
import PropTypes from 'prop-types';
import { QueryComponent } from 'modules/QueryController';
import cx from 'classnames';
import QueryManager from 'flux/QueryManager';
import history from 'core/history';
import Collection from './Collection';
import Loading from 'components/Loading';
import './Table.css';

export default class Table extends QueryComponent {
  queryForRequest() {
    return QueryManager.queryForCollections();
  }

  didSelect(collection) {
    return ()=>{
      history.push(`/products/${collection.SKU}`);
    }
  }

  render() {
    const { query } = this.state;

    return (
      <div className={cx('Table-Collections', this.props.className)}>
        { query.isLoading() && <Loading size="big" color="black" /> }
        {
          query.map((i)=><Collection
            key={i.id}
            name={i.name}
            onClick={this.didSelect(i)}
            className="Table-Collections__item"/>)
        }
      </div>
    );
  }
}

Table.propTypes = {
  className: PropTypes.string,
};
Table.defaultProps = {};
