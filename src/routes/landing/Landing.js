import React, { PureComponent } from 'react';
import Carousel from 'components/Carousel';
import Table from './Table';
import Intro from './Intro';
import './Landing.css';

export default class Landing extends PureComponent {
  render() {
    const items = ['banners/1.png', 'banners/2.png', 'banners/3.png'];
    return (
      <div className="Landing">
        <Carousel
          dots
          infinite
          autoplay
          items={items}
          className="Landing-carousel" />
        <Table className="Landing-table"/>
        <Intro className="Landing-intro"/>
      </div>
    );
  }
}

Landing.propTypes = {};
Landing.defaultProps = {};
