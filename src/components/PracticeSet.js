import React from 'react'
import './Home.css'
import Table from './Table'

function PracticeSet() {
  return (
    <>   
      <div className="practice-header my-4 mb-5">
        <h3 className="text-left mx-5" style={{ color:'#4f46e5', fontWeight: '700', textAlign:"left" }}>
          Striver’s A2Z DSA Course
        </h3>

        <div className='practice-set'>
          <p>
            This course is perfect for anyone who wants to build a solid foundation in DSA and advance to expert-level skills — all completely <strong>free</strong> and well-structured.
          </p>
          <p>
            📌 We've carefully curated this sheet to guide beginners step-by-step, making your interview preparation smoother and more effective.
          </p>

          <div className="alert alert-info mt-4 text-center" role="alert" style={{ maxWidth: '800px', margin: 'auto', fontSize: '15px' }}>
            <strong>Note:</strong> All practice problems link to trusted external platforms like <b>GeeksforGeeks (GFG)</b> and <b>LeetCode</b>. 
            These platforms offer comprehensive problem sets to help you practice and improve your DSA skills effectively. 
            AlgoMate does not host these problems but guides you to these reliable resources to enhance your learning journey.
          </div>
        </div>
      </div>
      <Table/>
    </>
  )
}

export default PracticeSet
