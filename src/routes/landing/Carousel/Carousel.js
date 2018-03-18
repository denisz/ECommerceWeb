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
      speed: 500,
      dots: true,
      fade: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: this.onBeforeChange,
      afterChange: this.onAfterChange,
    };

    return (
      <div className={cx("Carousel", this.props.className)}>
        <Slider {...settings} className="Carousel-slider">
          <div className="Carousel-item">
            <Image src="banners/1.png" />
          </div>
          <div className="Carousel-item">
            <Image src="banners/2.png"/>
          </div>
          <div className="Carousel-item">
            <Image src="banners/3.png"/>
          </div>
        </Slider>
      </div>
    );
  }
}

Carousel.propTypes = {
  className: PropTypes.string,
};
Carousel.defaultProps = {};
