import React, { Component } from 'react';
import cx from 'classnames';
import Title from 'components/Title';
import QueryManager from 'flux/QueryManager';
import {Tooltip} from 'react-tippy';
import Batches from 'components/Batches';
import Filter from './Filter';
import './BatchesPager.css';
import * as keys from './constants';
import localize, {kDeliveryProviderRussiaPost} from 'services/localizedDelivery';
import 'react-tippy/dist/tippy.css';

const Help = () => (
    <div className="helper__panel">
      <p>Саранск, Большевистская ул, 31</p>
      <div className="d-flex">
        <div>пн-пт:</div>
        <div>8:00 - 22:00</div>
      </div>
      <div className="d-flex">
        <div>сб:</div>
        <div>09:00 - 18:00</div>
      </div>
      <div className="d-flex">
        <div>вс:</div>
        <div>09:00 - 18:00</div>
      </div>
    </div>
);

export default class BatchesPager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: {
        [keys.kProviderKey]: kDeliveryProviderRussiaPost,
      },
    }
  }

  render() {
    const {filter} = this.state;

    return (
        <div className={cx('BatchesPager')}>
          <Title onClick={this.reloadData}>{localize({ provider: filter[keys.kProviderKey]})}</Title>
          <Tooltip
              html={<Help/>}
              position="top"
              trigger="click"
          >
            <div className="text-center">ОПС для отправки <abbr
                title="attribute">430005</abbr></div>
          </Tooltip>

          <Filter value={filter}
                  onSubmit={(attrs) => this.setState({filter: attrs})}/>

          <Batches autoReload query={QueryManager.queryForBatchesWithFilter(filter)}/>
        </div>
    );
  }
}
