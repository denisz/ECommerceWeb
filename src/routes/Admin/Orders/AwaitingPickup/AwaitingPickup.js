import React from 'react';
import Orders from 'components/Orders';
import {ErrorView} from 'modules/Form';
import {FormComponent} from 'modules/Flux';
import Currency from 'components/Currency';
import DateComponent from 'components/Date';
import AdminActions from 'flux/AdminActions';
import QueryManager from 'flux/QueryManager';
import {kOrderStatusAwaitingPickup} from 'services/localizedOrderStatus';
import Admin from 'flux/Admin';
import InfoBar from './InfoBar';

export default class AwaitingPickup extends FormComponent {
  getInitialState() {
    return {
      selected: [],
    };
  }

  getInitialStore() {
    return [Admin];
  }

  async didChangeStoreState() {
    this.setState({selected: []});
  }

  handleSelected = (selected) => {
    this.setState({selected});
  };

  handleBatch = async () => {
    const {selected, lock} = this.state;
    try {
      await lock.tryLock();
      const ids = selected.map(i => i.id);
      await AdminActions.createBatch(ids);
      await AdminActions.checkInBatchCurrent();
      await AdminActions.printFormsCurrent();
      this.setState({selected: []});
    } catch (error) {
      this.setState({error});
    }

    lock.unlock();
  };

  render() {
    const {selected, error, lock} = this.state;

    return (
        <div className="AwaitingPickup">
          <ErrorView error={error}/>
          <Orders {...this.props}
                  allowSelect
                  selected={selected}
                  onSelected={this.handleSelected}
                  query={QueryManager.queryForOrders(
                      kOrderStatusAwaitingPickup)}/>
          {
            selected.length > 0 &&
            <InfoBar title={`${selected.length} отправление`}
                     subtitle={<Currency value={selected.reduce(
                         (acc, i) => acc + i.shipment.price, 0)}/>}
                     description={(
                         <div>
                           <div>Система подготовит необходимые документы
                             и
                             отправит их в ОПС
                           </div>
                           <div>Сдача в ОПС — <strong><DateComponent
                               format="DD-MM-YYYY"
                               value={Date.now()}/></strong>
                           </div>
                         </div>
                     )}
                     locked={lock.is()}
                     labelSubmit="Подготовить"
                     onSubmit={this.handleBatch}
            />
          }
        </div>
    );
  }
}