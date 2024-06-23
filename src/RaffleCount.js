import React, { useState, useEffect } from 'react';

function CountdownTimer({ targetDate }) {

  const [formOpen, setFormOpen] = useState(false);

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
    formOpen? 
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfIvtgQXUf365q88RP5yj1MYYkw4Nd4Hw5MNOtmUMhqkFx1mg/viewform?embedded=true" width="95%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0"><p>Loading…</p></iframe>
      :
      <div className='raffleCount'>
        <p>WINNER DRAWN IN</p>
        <p>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</p>
        <p style={{marginTop: '10px'}}>Up to £25,000 discount</p>
        <p className="button" onClick={() => {setFormOpen(true)}}>Enter Giveaway</p>
      </div>
  );
}

export default CountdownTimer;