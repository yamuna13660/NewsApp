import React from 'react'
import './Home.css';
import {Link} from 'react-router-dom';
import FeatureSection from './FeatureSection';
import Footer from './Footer';

function Home() {
  return (
    <>
     <div className="container my-5 home-container mb-5" style={{ maxWidth: '900px' }}>
      <h2 className="mb-4 text-center" style={{ fontWeight: '700',color:'#4f46e5'}}>Master DSA with AlgoMate</h2>
      <marquee behavior="scroll" direction="left" style={{  fontWeight: '500', backgroundColor:"#f8f9fa" ,
  color:"#343a40" }}>
  Learn DSA 
</marquee>

      <p className=" lead text-center" style={{color:'#333', fontWeight: '400'}}>
        Struggling with Data Structures and Algorithms? <strong>AlgoMate</strong> is your personal learning assistant to master DSA efficiently.
        Track your progress, solve curated problems, and get directed to quality resources like LeetCode and GeeksforGeeks.
      </p>
      <div className=" d-flex justify-content-center mt-5">
        <Link to="/" className="btn custom-btn btn-lg me-3">Explore Topics</Link>
        <Link to="/" className="btn custom-btn btn-lg">Learn More</Link>
      </div>
    </div>
    <div>
        <FeatureSection/>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  )
}

export default Home
