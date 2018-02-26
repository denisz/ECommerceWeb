import React, { PureComponent } from 'react';
import Carousel from './Carousel';
import Table from './Table';
import Intro from './Intro';
import './Landing.css';

export default class Landing extends PureComponent {
  render() {
    return (
      <div className="Landing">
        <Carousel className="Landing-carousel" />
        <Table className="Landing-table"/>
        <Intro className="Landing-intro"/>
      </div>
    );
  }
}

Landing.propTypes = {};
Landing.defaultProps = {};
