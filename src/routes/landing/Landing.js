import React from 'react';
import Carousel  from 'components/Carousel';
import Image from 'components/Image';
import Title from 'components/Title';
import history from 'core/history';
import Table from './Table';
import Intro from './Intro';
import './Landing.css';


export default ({ banners = [] }) => (
  <div className="Landing">
    <Carousel
      dots
      infinite
      autoplay
      arrows={false}
      className="Landing__carousel" >
      {
        banners.map((obj, idx)=>(
          <div key={idx} className="Landing__carousel-item">
            <Image src={obj.img} onClick={()=> obj.href && history.push(obj.href)} />
          </div>
        ))
      }
    </Carousel>
    <Title className="Landing__title">Категории</Title>
    <Table className="Landing__table"/>
    <Intro className="Landing__intro"/>
  </div>
)
