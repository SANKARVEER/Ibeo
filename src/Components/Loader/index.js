import React from 'react';

function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  );
}

export { Loader };
