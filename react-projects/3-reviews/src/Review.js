import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [peopleList] = useState(people);
  const [peopleIndex, setPeopleIndex] = useState(0);
  const renderPrevReview = () => {
    setPeopleIndex(Math.abs(peopleIndex-1)%people.length);
  }

  const renderNextReview = () => {
    setPeopleIndex((peopleIndex+1)%people.length);
  }

  const renderRandomReview = () => {
    const randomIndex = Math.floor(Math.random()*(people.length-1));
    setPeopleIndex(randomIndex);
  }

  return <div className="review">
          <img className="person-img" src={"https://avatars.dicebear.com/api/human/" + peopleIndex + ".svg"}/>
          <h4 className="author">{peopleList[peopleIndex].name}</h4>
          <p className="job">{peopleList[peopleIndex].job}</p>
          <p className="info">{peopleList[peopleIndex].text}</p>
          <button className="prev-btn" onClick={renderPrevReview}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={renderNextReview}>
            <FaChevronRight />
          </button>
          <br/>
          <button className="random-btn" onClick={renderRandomReview}>Surprise Me</button>
      </div>;
};

export default Review;
