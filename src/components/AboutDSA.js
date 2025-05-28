import React from 'react';
import './Home.css';

function AboutDSA() {
  return (
    <div className="about-dsa-section container my-5">
      <h2 className="text-center mb-4" style={{ color: '#00bcd4', fontWeight: '700' }}>
        About Our DSA Journey
      </h2>
      <p className="text-center text-muted fs-5">
        AlgoMate is your trusted companion for mastering Data Structures and Algorithms. Whether you're preparing for interviews, coding contests, or just building your foundations — we've got your back.
      </p>

      <div className="row text-center mt-5">
        <div className="col-md-4 mb-4">
          <h5 className="feature-title">Striver’s DSA Sheet</h5>
          <p className="feature-desc">Tackle 190+ top-quality questions divided by topic and difficulty.</p>
        </div>
        <div className="col-md-4 mb-4">
          <h5 className="feature-title">Topic-Wise Resources</h5>
          <p className="feature-desc">Learn Arrays, Trees, Graphs, and more with guided problems.</p>
        </div>
        <div className="col-md-4 mb-4">
          <h5 className="feature-title">Track Your Progress</h5>
          <p className="feature-desc">Stay on track with progress bars, checklists, and challenges.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutDSA;
