import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
function FeatureSection() {
  
      const features = [
  {
    title: "AlgoMate DSA Tracker",
    description: "Master DSA with handpicked problems and track your progress efficiently.",
    link: "/dsa-tracker"
  },
  {
    title: "Topic-Wise Challenges",
    description: "Sharpen your skills with curated questions sorted by topic.",
    link: "/topics"
  },
  {
    title: "Interview Insights",
    description: "Read real interview stories from top tech companies to prepare better.",
    link: "/interviews"
  }
];

  return (
    <div className="feature-section container my-5">
      <h3 className="text-center mb-4" style={{  fontWeight: '700',color:'#4f46e5' }}>
        Level Up Your Coding Journey
      </h3>
      <div className="row mt-5">
        {features.map((feature, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="feature-card p-4 h-100">
              <h5 className="feature-title mb-3">{feature.title}</h5>
              <p className="feature-desc mb-4">{feature.description}</p>
              <Link to="/practice" className="btn btn-outline custom-btn">Get Started</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;
