import React from 'react';
import Collection from 'flux/Collection';
import { StoreComponent } from 'modules/Flux';
import Table from './Table';
import './Products.css';

export default class Products extends StoreComponent {
  getInitialStore() {
      return [Collection];
  }

  getStoreKeys(){
    return ['name', 'id'];
  }

  render() {
    const { name, id } = this.state;
    return (
      <div className="Products">
        <div className="Products-title">{name}</div>
        <Table collectionId={id} className="Products-table"/>
      </div>
    );
  }
}

Products.propTypes = {};
Products.defaultProps = {};
