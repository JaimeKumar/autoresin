import React, { useState, useEffect } from 'react';

function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    // if (!timeLeft[interval]) {
    //   return;
    // }

    timerComponents.push(
        <span key={interval}>
            {`${timeLeft[interval]}`.padStart(2, '0')}
            {index < Object.keys(timeLeft).length - 1 ? ':' : ''}
        </span>
    );
  });

  return (
    <div className='raffleCount'>
      <p>WINNER DRAWN IN</p>
      <p>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</p>
    </div>
  );
}

export default CountdownTimer;