import React, { useState, useEffect } from 'react';
import './DigitalClock.css';

function DigitalClock(){
    const [time, setTime] = useState("");

    useEffect(() => {
        getTime();
    }, []);

    function getTime(){
        const date = new Date();
        setTime(date.getHours() + " : "
              + date.getMinutes() + " : "
              + date.getSeconds() + " : "
              + date.getMilliseconds());
        setTimeout(getTime, 1000);
    }

    return (
        <div className="outerSection">
            <h1>Digital Clock</h1>
            <div className="timeSection">
                <p>{time}</p>
            </div>
        </div>
    );
}

export default DigitalClock;