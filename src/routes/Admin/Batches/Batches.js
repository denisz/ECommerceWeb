import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import {QueryListView, QueryComponent} from 'modules/QueryController';
import {DialogFactory} from 'modules/Form';
import Title from 'components/Title';
import Date from 'components/Date';
import QueryManager from 'flux/QueryManager';
import BatchView from 'dialogs/BatchView';
import localizeDelivery from 'services/localizedDelivery';
import './Batches.css';
import * as keys from './constants';

const kDialogKey = 'dialog';

export default class Batches extends QueryComponent {
  queryForRequest() {
    return QueryManager.queryForBatches()
  }

  handleRowClick = (row) => {
    const {dialogs} = this.state;

    dialogs.showDialog(kDialogKey, {
      header: `Партия №${row[keys.kIDKey]}`,
      showHeader: true,
      size: 'large',
      Component: <BatchView submitCancel
                            value={row}
                            onSubmit={async (attrs) => {
                            }}/>,
    });
  };

  tableCellForRowAt = (cell, batch) => {
    switch (cell) {
      case keys.kBatchCell:
        return (
            <div className="Batches__item">
              <div>{batch[keys.kIDKey]}</div>
              <Date value={batch[keys.kCreatedAtKey]}/>
            </div>);
      case keys.kProviderCell:
        return (
            <div className="Batches__item">
              {localizeDelivery({
                provider: batch[keys.kProviderCell]
              })}
            </div>);
      default :
        return <div>--</div>;
    }
  };

  render() {
    const {query, dialogs} = this.state;

    return (
        <div className={cx('Batches')}>
          <Title>Партии</Title>
          <QueryListView query={query}
                         keyField={'id'}
                         classNameContainer="Batches__table_wrapper"
                         className="Batches__table"
                         headerStyle={{
                           color: '#000',
                           fontWeight: 400,
                           fontSize: 14,
                         }}
                         headers={keys.headers}
                         onRowClick={this.handleRowClick}
                         emptyView={() => 'Нет данных'}
                         renderCell={this.tableCellForRowAt}
          />
          <DialogFactory dialogKey={kDialogKey} dialogs={dialogs}/>
        </div>
    );
  }
}

Batches.propTypes = {
  objectsPerPage: PropTypes.number,
};
Batches.defaultProps = {
  objectsPerPage: 25,
};
