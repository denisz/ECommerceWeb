import React from 'react';
import {QueryComponent, QueryListView} from 'modules/QueryController';
import {DialogFactory} from 'modules/Form';
import Title from 'components/Title';
import Button from 'components/Button';
import QueryStatic from 'modules/Request/QueryStatic';
import Alert from 'dialogs/Alert';
import * as keys from './constants';
import './Commands.css';

const query = new QueryStatic(keys.data, false);
const kDialogKey = 'dialog';

export default class Commands extends QueryComponent {
  queryForRequest() {
    return query;
  }

  handleClick = (action) => {
    return async () => {
      const {dialogs, lock} = this.state;

      await lock.tryLock();

      try {
        await action();

        dialogs.showDialog(kDialogKey, {
          showHeader: false,
          Component: <Alert message="Выполнено успешно"/>,
        });
      } catch (e) {
        console.error(e);
        dialogs.showDialog(kDialogKey, {
          showHeader: false,
          Component: <Alert message="Выполнено c ошибкой"/>,
        });
      }

      lock.unlock();
    };
  };

  tableCellForRowAt = (cell, operation) => {
    const {lock} = this.state;

    switch (cell) {
      case keys.kDescriptionCell:
        return (
            <div className="Commands__item">
              {operation[keys.kDescriptionKey]}
            </div>
        );
      case keys.kActionCell:
        return (
            <div className="Commands__item">
              <Button color="dark"
                      appear="link"
                      size="small"
                      locked={lock.is()}
                      onClick={this.handleClick(operation[keys.kActionKey])}>
                Выполнить
              </Button>
            </div>
        );
      default:
        break;
    }
  };

  render() {
    const {query, dialogs} = this.state;

    return (
        <div className="Commands">
          <Title>Команды</Title>
          <QueryListView hideSelectColumn
                         keyField={'id'}
                         classNameContainer="Commands__table_wrapper"
                         className="Commands__table"
                         headerStyle={{
                           color: '#000',
                           fontWeight: 400,
                           fontSize: 14,
                         }}
                         headers={keys.headers}
                         emptyView={() => 'Нет данных'}
                         query={query}
                         styleCell={this.tableCellStyle}
                         renderCell={this.tableCellForRowAt}
          />
          <DialogFactory dialogs={dialogs}
                         dialogKey={kDialogKey}/>
        </div>
    );
  }
}