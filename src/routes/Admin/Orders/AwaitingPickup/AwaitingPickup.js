import React from 'react';
import {FormComponent} from 'modules/Form';
import InfoBar from 'dialogs/InfoBar';
import Currency from 'components/Currency';
import Orders from 'components/Orders';
import Date from 'components/Date';
import QueryManager from 'flux/QueryManager';
import {kOrderStatusAwaitingPickup} from 'services/localizedOrderStatus';

export default class AwaitingPickup extends FormComponent {
  getInitialState() {
    return {
      selected: [],
    };
  }

  handleSelected = (selected) => {
    this.setState({selected});
  };

  render() {
    const {selected} = this.state;

    return (
        <div className="AwaitingPickup">
          <Orders {...this.props}
                  allowSelect
                  selected={selected}
                  onSelected={this.handleSelected}
                  query={QueryManager.queryForOrders(
                      kOrderStatusAwaitingPickup)}/>
          {
            selected.length > 0 &&
            <InfoBar title={`${selected.length} отправление`}
                     subtitle={<Currency value={198000}/>}
                     description={(
                         <div>
                           <div>Система подготовит необходимые документы
                             и
                             отправит их в ОПС
                           </div>
                           <div>Сдача в ОПС — <Date/>
                           </div>
                         </div>
                     )}
                     btnLabel="Подготовить"
                     onSubmit={() => {
                       console.log(selected);
                     }}
            />
          }
        </div>
    );
  }
}