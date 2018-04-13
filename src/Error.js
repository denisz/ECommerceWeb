import React from 'react';

const style = {
  borderRight: '1px solid lightgrey',
  padding: '0 10px',
  marginRight: '10px',
};

export default ({ error }) => {
  console.error(error);
  console.dir(error.context);
  return (
      <div className="Error-page">
        <div className="container-fluid">
          <h4 className="text-center">
            <span style={style}>500</span>
            <small className="text-muted">Что-то пошло не так.</small>
          </h4>
        </div>
      </div>
  );
};

