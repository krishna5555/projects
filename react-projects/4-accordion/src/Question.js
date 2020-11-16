import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({question}) => {
  const [displayAnswer, setDisplayAnswer] = useState(false);

  const handleToggleButton = () => {
    setDisplayAnswer(!displayAnswer);
  }

  return <div className="question">
  <h4>{question.title}</h4>
  <button className="btn" onClick={handleToggleButton}>
      {displayAnswer? <AiOutlineMinus /> : <AiOutlinePlus />}
    </button>
<div>{displayAnswer? <p>{question.info}</p>: <p/>}</div>
<br/>
</div>;
};

export default Question;
