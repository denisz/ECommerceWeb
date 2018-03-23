import React from 'react';
import Carousel  from 'components/Carousel';
import Image from 'components/Image';
import Table from './Table';
import Intro from './Intro';
import './Landing.css';


const banners_list = [
  'banners/ads_1.png',
  'banners/ads_2.png',
  'banners/ads_3.png',
  'banners/ads_4.png'
];

export default ({ banners = banners_list }) => (
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
