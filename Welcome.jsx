import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlurText from './BlurText.jsx';

const Welcome = () => {
  const navigate = useNavigate();

  const handleAnimationComplete = () => {
    console.log('Welcome animation completed!');
  };

  const handleEnterPortfolio = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
      <div className="text-center mb-8">
        <BlurText
          text="Welcome to My Portfolio"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-4xl md:text-6xl font-bold text-center mb-4"
        />
        <p className="text-gray-600 text-lg md:text-xl mt-4">
          Explore my journey in web development and design
        </p>
      </div>
      <button
        onClick={handleEnterPortfolio}
        className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg 
                 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Enter Portfolio
      </button>
    </div>
  );
};

export default Welcome; 