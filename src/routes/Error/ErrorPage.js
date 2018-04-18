import React from 'react';
import './ErrorPage.css';

const style = {
  borderRight: '1px solid lightgrey',
  padding: '0 10px',
  marginRight: '10px',
};

export default () => {
  return (
      <div className="Error-page">
        <div className="container-fluid">
          <h4 className="text-center">
            <span style={style}>500</span>
            <span className="text-muted">Что-то пошло не так.</span>
          </h4>
        </div>
      </div>
  );
};

