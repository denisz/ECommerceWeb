import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Image from 'components/Image';
import cx from 'classnames';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onBeforeChange = (args) => {
    console.log(args)
  };

  onAfterChange = (args) => {
    console.log(args)
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: this.onBeforeChange,
      afterChange: this.onAfterChange,
    };

    return (
      <div className={cx("Carousel", this.props.className)}>
        <Image src="bg_carousel_decal.png" className="Carousel-decal"/>
        <Slider {...settings} className="Carousel-slider">
          <div>
            <h3 className="Carousel-item">
              <div className="">БЕСПЛАТНАЯ ДОСТАВКА</div>
            </h3>
          </div>
          <div>
            <h3 className="Carousel-item">2</h3></div>
          <div>
            <h3 className="Carousel-item">3</h3></div>
          <div>
            <h3 className="Carousel-item">4</h3></div>
          <div>
            <h3 className="Carousel-item">5</h3></div>
          <div>
            <h3 className="Carousel-item">6</h3></div>
        </Slider>
      </div>
    );
  }
}

Carousel.propTypes = {
  className: PropTypes.string,
};
Carousel.defaultProps = {};
