import React, {Component} from 'react';
import Orders from 'components/Orders';
import QueryManager from 'flux/QueryManager';
import './Search.css';
import Filter from './Filter';

export default class OrdersPager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {},
    };
  }

  render() {
    const {filter} = this.state;

    return (
        <div className="OrdersSearch">
          <Filter value={filter}
                  onSubmit={(attrs) => this.setState({filter: attrs})}/>
          <Orders query={QueryManager.queryForOrdersWithFilter(filter)}/>
        </div>
    );
  }
}