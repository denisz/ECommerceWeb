import React from 'react';
import Carousel  from 'components/Carousel';
import Image from 'components/Image';
import Table from './Table';
import Intro from './Intro';
import './Landing.css';

export default ({banners = ['banners/1.png', 'banners/2.png', 'banners/3.png']}) => (
  <div className="Landing">
    <Carousel
      dots
      infinite
      autoplay
      arrows={false}
      className="Landing-carousel" >
      {
        banners.map((src, idx)=>(
          <div key={idx} className="Landing-carousel-item">
            <Image src={src} />
          </div>
        ))
      }
    </Carousel>
    <Table className="Landing-table"/>
    <Intro className="Landing-intro"/>
  </div>
)
