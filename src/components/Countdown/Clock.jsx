import React from 'react'
import { Fragment } from 'react';
import "./clock.css"

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
    return (
      <Fragment>
        <section className="timer-container">
          <section className="timer">
            <div className="clock">
              <section>
                <p>{timerDays}</p>
                <small>Days</small>
              </section>
              <span className='text-2xl'>:</span>
              <section>
                <p>{timerHours}</p>
                <small>Hours</small>
              </section>{" "}
              <span className='text-2xl'>:</span>
              <section>
                <p>{timerMinutes}</p>
                <small>Minutes</small>
              </section>{" "}
              <span className='text-2xl'>:</span>
              <section>
                <p>{timerSeconds}</p>
                <small>Seconds</small>
              </section>
            </div>
          </section>
        </section>
      </Fragment>
    );
  };
  
  Clock.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
  };

export default Clock