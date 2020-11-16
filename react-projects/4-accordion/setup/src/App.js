import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {

  return <div className="container">
    <h2>Questions And Answers About Login</h2>
    <div>
      {data.map(question => (
        <SingleQuestion question={question} />
      ))}
    </div>
  </div>
}

export default App;
