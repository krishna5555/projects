import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [toursData, setToursData] = useState([]);

  const deleteTour = (id) => {
    const newTours = toursData.filter((tour) => tour.id != id);
    setToursData(newTours);
  }

  const fetchTours = async () => {
    await fetch(url).then(response => response.json())
    .then(data => setToursData(data));
    setLoading(false);
  } 

  useEffect(() => {
    fetchTours();
  }, []);

  if(loading){
    return <h1 className="loading">Loading....</h1>
  } else{
    if(toursData.length == 0){
      return <main>
        <h2>No tours available</h2>
        <button onClick={event => window.location.reload()}>Refresh</button>
      </main>
    } else{
      return <main><Tours toursData={toursData} deleteTour={deleteTour}/></main>
    }
  }
}

export default App;
