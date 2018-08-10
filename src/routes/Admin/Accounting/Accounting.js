import React, { Component } from 'react';
import Reports from 'components/Reports';
import QueryManager from 'flux/QueryManager';
import Filter from './Filter';
import './Accounting.css';

//Список накладных
export default class Accounting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: {},
    };
  }

  render() {
    const {filter} = this.state;

    return (
        <div className="AccountingSearch">
          <Filter value={filter}
                  onSubmit={(attrs) => this.setState({filter: attrs})}/>
          <Reports title={"Склад"} autoReload query={QueryManager.queryForReportsWithFilter(filter)}/>
        </div>
    );
  }
}