import React, { useState, useEffect } from 'react';

const RotatingText = () => {
  const phrases = [
    "Learn DSA",
    "Solve Problems",
    "Ace Interviews",
    "Master Algorithms",
    "Boost Your Coding Skills"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prev => (prev + 1) % phrases.length);
    }, 3000); // change phrase every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <h2 className="rotating-text">
      {phrases[index]}
    </h2>
  );
};

export default RotatingText;
