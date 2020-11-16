import React, { useState, useEffect } from 'react';
import Tour from './Tour';

const Tours = ({toursData, deleteTour}) => {
  let counter = 0;

  return (
    <section>
      <h1 className="title">Tours</h1>
      <h1 className="underline" />
        {toursData.map(tour => (
          <div>
            <Tour id={counter++} toursData={toursData} deleteTour={deleteTour} />
          </div>
        ))}
    </section>
  );
};

export default Tours;
