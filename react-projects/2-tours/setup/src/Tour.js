import React, { useState, useEffect } from 'react';

const Tour = ({id, toursData, deleteTour}) => {
  const [readMore, setReadMore] = useState(false);
  
  return (
    <div className="single-tour">
      <img src={toursData[id].image} />
      <h3>{toursData[id].name}</h3>
      <h4 className="tour-price">${toursData[id].price}</h4>
      <div className="tour-info">
        <p>{readMore? toursData[id].info : toursData[id].info.substr(0,250)}</p>
      </div>
      <div>
        {readMore? <p/> :<button onClick={event => setReadMore(true)}>Read more</button>}
      </div>
      <button className="delete-btn"
              onClick={() => deleteTour(toursData[id].id)}>Not interested</button>
    </div>
  );
};

export default Tour;
