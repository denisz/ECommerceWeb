import React from 'react';

export default ({ error }) => {
  console.error(error);
  console.dir(error.context);
  return (
    <div className="Error">
      <h1>Error</h1>
      <p>Sorry, a critical error occurred on this page.</p>
    </div>
  );
};

