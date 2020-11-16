import React, { useState } from 'react';
import data from './data';

function App() {
  const [peopleData, setPeopleData] = useState(data);

  return (
    <center>
      <section className="container">
        <h2>{peopleData.length} birthdays today</h2>
        {peopleData.map(people => (
            <div className="person">
                <h4>{people.name}</h4><br/>
                <h5>{people.age} years</h5>
                <br/>
                <hr/>
            </div>
        ))}
        <button onClick={event => setPeopleData([])}>Clear all</button>
      </section>
    </center>
  );
}

export default App;