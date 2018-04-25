import React from 'react';
import Carousel  from 'components/Carousel';
import Image from 'components/Image';
import Title from 'components/Title';
import history from 'core/history';
import Table from './Table';
import Intro from './Intro';
import './Landing.css';
import * as keys from './constants';

export default ({ banners = [] }) => (
  <div className="Landing">
    <Carousel
      dots
      infinite
      autoplay
      arrows={false}
      className="Landing__carousel" >
      {
        banners
        .filter(i => i.type === keys.kBannerTypeMain )
        .map((obj, idx)=>(
          <div key={idx} className="Landing__carousel-item">
            <Image src={obj.img} onClick={()=> obj.href && history.push(obj.href)} />
          </div>
        ))
      }
    </Carousel>
    <Table className="Landing__table"/>
    <Intro className="Landing__intro"/>
    <Title>Производители</Title>
    <Carousel
        dots
        infinite
        slidesToShow={4}
        slidesToScroll={4}
        autoplay
        arrows={false}
        responsive={
          [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            }
          ]
        }
        className="Landing__carousel" >
      {
        banners
        .filter(i => i.type === keys.kBannerTypeBrand )
        .map((obj, idx)=>(
            <div key={idx} className="Landing__carousel-item">
              <Image src={obj.img} onClick={()=> obj.href && history.push(obj.href)} />
            </div>
        ))
      }
    </Carousel>
  </div>
)
