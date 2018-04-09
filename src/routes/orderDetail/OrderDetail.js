import React from 'react';
import {FormComponent} from 'modules/Flux';
import Order from 'flux/Order';
import './OrderDetail.css';

export default class OrderDetail extends FormComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getInitialStore() {
        return [Order]
    }

    getDataForModel() {
        return Order.toJSON();
    }

    getStoreKeys() {
        return [];
    }

    render() {
        return (
            <div className="Order-detail">
                
            </div>
        );
    }
}

OrderDetail.propTypes = {};
OrderDetail.defaultProps = {};
