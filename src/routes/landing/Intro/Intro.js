import React from 'react';
import cx from 'classnames';
import './Intro.css';

export default ({ className })=>(
  <div className={cx('Intro', className)}>
    <p className="Into-h">What is Lorem Ipsum?</p>
    <p className="Into-p">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <p className="Intro-sign">
      Администрация
    </p>
  </div>
)
