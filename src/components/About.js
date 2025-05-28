import React from 'react';
import './Home.css';
import Footer from './Footer';

const About = () => {
  return (
    <>
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">About AlgoMate 🚀</h1>

        <p className="about-text">
          <strong>AlgoMate</strong> is your personal companion for mastering Data Structures and Algorithms (DSA). 
          Whether you're a beginner starting your DSA journey or someone preparing for technical interviews, 
          AlgoMate is designed to guide you every step of the way.
        </p>

        <p className="about-text">
          We built AlgoMate with the vision of making complex algorithms simple to understand. Through interactive visualizations, 
          curated practice problems, and topic-wise learning paths, AlgoMate helps you strengthen your problem-solving skills effectively.
        </p>

        <h2 className="about-subheading">Why AlgoMate?</h2>
        <ul className="about-list">
          <li>📘 Learn DSA concepts with clear explanations</li>
          <li>🎯 Practice topic-wise problems to build confidence</li>
          <li>🧠 Visualize algorithms for better understanding</li>
          <li>🔍 Track your progress as you learn</li>
        </ul>

        <h2 className="about-subheading">Our Mission</h2>
        <p className="about-text">
          To make DSA learning more accessible, engaging, and efficient for every aspiring developer.
        </p>

        <p className="about-text">
          Whether you're preparing for coding interviews, improving your problem-solving skills, or just curious about algorithms — 
          <strong> AlgoMate is here to help you grow</strong>.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
