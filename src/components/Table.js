import React, { useState ,useEffect} from 'react';
import ProgressBar from './ProgressBar';
import Footer from './Footer'
import './Home.css';
import { dsaTopics, levels, sampleQuestionsByTopic } from './Questions';
const CircularProgress = ({ completed, total, size = 80, strokeWidth = 8, color = '#1a3d3c' }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (completed / total) * circumference;

  return (
    <svg width={size} height={size}>
      <circle
        stroke="#e0e0e0"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress}
        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize={16}
        fontWeight="600"
        fill={color}
      >
        {Math.round((completed / total) * 100)}%
      </text>
    </svg>
  );
};


function Table() {
   // Load initial solved state from localStorage
  const [solved, setSolved] = useState(() => {
    const saved = localStorage.getItem("solvedQuestions");
    return saved ? JSON.parse(saved) : {};
  });

  // Save solved state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("solvedQuestions", JSON.stringify(solved));
  }, [solved]);
  // For expandedTopic
const [expandedTopic, setExpandedTopic] = useState(() => {
  const saved = localStorage.getItem("expandedTopic");
  return saved ? JSON.parse(saved) : null;
});

// Save expandedTopic to localStorage
useEffect(() => {
  localStorage.setItem("expandedTopic", JSON.stringify(expandedTopic));
}, [expandedTopic]);

// For expandedLevels
const [expandedLevels, setExpandedLevels] = useState(() => {
  const saved = localStorage.getItem("expandedLevels");
  return saved ? JSON.parse(saved) : {};
});

// Save expandedLevels to localStorage
useEffect(() => {
  localStorage.setItem("expandedLevels", JSON.stringify(expandedLevels));
}, [expandedLevels]);


const toggleLevel = (topicIndex, level) => {
  const key = `${topicIndex}-${level}`; // Create a unique key for the level inside a topic

  // Use setExpandedLevels to update the state
  setExpandedLevels((prevState) => {
    const newState = { ...prevState }; // Copy the previous state

    // Toggle the value: if true → false, if false or undefined → true
    newState[key] = !prevState[key];

    return newState; // Return the updated state
  });
};

  const handleCheckboxChange = (topicTitle, level, index) => {
    const key = `${topicTitle}-${level}-${index}`;
    setSolved((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

const getTopicProgress = (topicTitle) => {
  let current = 0;
  let total = 0;

  levels.forEach((level) => {
    const questions = sampleQuestionsByTopic[topicTitle]?.[level] || [];
    questions.forEach((_, index) => {
      const key = `${topicTitle}-${level}-${index}`;
      total += 1;
      if (solved[key]) current += 1;
    });
  });

  return { current, total };
};


  const getLevelProgress = (topicTitle, level) => {
    const questions = sampleQuestionsByTopic[topicTitle]?.[level] || [];
    const total = questions.length;
    const current = questions.reduce((count, _, i) => {
      const key = `${topicTitle}-${level}-${i}`;
      return count + (solved[key] ? 1 : 0);
    }, 0);
    return { current, total };
  };
const calculateOverallProgress = () => {
    let totalQuestions = 0;
    let totalSolved = 0;
    let difficultyTotals = { Easy: 0, Medium: 0, Hard: 0 };
    let difficultySolved = { Easy: 0, Medium: 0, Hard: 0 };

    dsaTopics.forEach(topic => {
      levels.forEach(level => {
        const questions = sampleQuestionsByTopic[topic.title]?.[level] || [];
        questions.forEach((q, index) => {
          totalQuestions++;
          const key = `${topic.title}-${level}-${index}`;
          if (solved[key]) totalSolved++;
          difficultyTotals[q.difficulty] = (difficultyTotals[q.difficulty] || 0) + 1;
          if (solved[key]) difficultySolved[q.difficulty] = (difficultySolved[q.difficulty] || 0) + 1;
        });
      });
    });

    return {
      totalQuestions,
      totalSolved,
      difficultyTotals,
      difficultySolved,
    };
  };

  const { totalQuestions, totalSolved, difficultyTotals, difficultySolved } = calculateOverallProgress();
  return (
    <>

    <div className="container my-4">
          <div
  style={{
    border: '1px solid rgb(221, 221, 221)',
    borderRadius: '5px',
    padding: '12px 20px',
    maxWidth: '1000px', // slightly increased for spacing
    margin: '0 auto 20px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
    gap: '20px',
  }}
>
  {/* Total Circular Progress */}
  <div style={{ textAlign: 'center', flex: '1 1 150px', minWidth: '150px' }}>
    <div style={{ fontWeight: '600', fontSize: 16, color: '#1a3d3c', marginBottom: 12 }}>
      Total
    </div>
    <CircularProgress completed={totalSolved} total={totalQuestions} size={80} />
    <div style={{ marginTop: 8, fontSize: 14, color: '#555' }}>
      {totalSolved} / {totalQuestions}
    </div>
  </div>

  {/* Difficulty Levels */}
  {['Easy', 'Medium', 'Hard'].map(level => {
    const current = difficultySolved[level] || 0;
    const total = difficultyTotals[level] || 0;
    const percent = total === 0 ? 0 : Math.round((current / total) * 100);
    const color =
      level === 'Easy' ? '#4caf50' :
      level === 'Medium' ? '#ffc107' :
      '#f44336';

    return (
      <div
        key={level}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '4px',
          flex: '1 1 200px',  // more responsive
          minWidth: '200px',
        }}
      >
        <strong>{level}</strong>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '120px', height: '16px', backgroundColor: '#ddd', borderRadius: '8px' }}>
            <div
              style={{
                width: `${percent}%`,
                height: '100%',
                backgroundColor: color,
                borderRadius: '8px',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
          <span style={{ fontWeight: '600' }}>{current} / {total}</span>
        </div>
      </div>
    );
  })}
</div>

      <table className="table table-hover custom-table">
        <tbody >
          {dsaTopics.map((topic, topicIndex) => {
            const { current, total } = getTopicProgress(topic.title);

            return (
              <React.Fragment key={topicIndex}>
                <tr 
                  onClick={() =>
                    setExpandedTopic(topicIndex === expandedTopic ? null : topicIndex)
                  }
                  style={{ cursor: 'pointer' }}
                >
                  <td className="w-75 ps-3">
                    <strong>Step {topicIndex + 1}:</strong> {topic.title}
                  </td>
                  <td className="w-25">
                    <ProgressBar progress={(current / total) * 100 || 0} current={current} total={total} width={150} />
                  </td>
                </tr>

                {expandedTopic === topicIndex && (
                  <tr>
                    <td colSpan="2">
                      <div className="ps-4">
                        {levels.map((level, levelIndex) => {
                          const isLevelExpanded =
                            expandedLevels[`${topicIndex}-${level}`] || false;
                          const { current, total } = getLevelProgress(topic.title, level);

                          return (
                            <div
                              key={levelIndex}
                              className="my-2"
                              style={{
                                borderBottom:
                                  levelIndex < levels.length - 1
                                    ? '1px solid #ccc'
                                    : 'none',
                                paddingBottom: '10px',
                              }}
                            >
                              <div
                                className="d-flex justify-content-between align-items-center flex-wrap level-row"
                                onClick={() => toggleLevel(topicIndex, level)}
                                style={{ cursor: 'pointer' }}
                              >
                                <span className="me-3">🔹 {level}</span>
                                <ProgressBar progress={(current / total) * 100 || 0} current={current} total={total} width={150} />
                              </div>

                              {isLevelExpanded && (
                                <div className="mt-3">
                                  <table className="table table-bordered">
                                    <thead className="table-light">
                                      <tr>
                                        <th>Status</th>
                                        <th>Problem</th>
                                        <th>Practice</th>
                                        <th>Difficulty</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {(sampleQuestionsByTopic[topic.title]?.[level] || []).map((q, i) => {
                                        const key = `${topic.title}-${level}-${i}`;
                                        return (
                                          <tr key={i}>
                                            <td>
                                              <input
                                                type="checkbox"
                                                style={{cursor:'pointer'}}
                                                checked={solved[key] || false}
                                                onChange={() => handleCheckboxChange(topic.title, level, i)}
                                              />
                                            </td>
                                            <td>{q.problem}</td>
                                            <td>
                                            {q.links.gfg && (
     <a
    href={q.links.gfg}
    target="_blank"
    rel="noreferrer"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
      alt="GFG"
      style={{ width: "24px", height: "24px" }}
    />
  </a>
)}

                                             {q.links.leetcode&&(   <a
                                                href={q.links.leetcode}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="me-2 mx-1"
                                              >
                                              <img
    src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
    alt="LeetCode"
    style={{ width: "24px", height: "24px" }}
  />
                                              </a>
                                             )}
                                            </td>
                                            <td>
                                              <span
                                                className={`badge ${
                                                  q.difficulty === 'Easy'
                                                    ? 'bg-success'
                                                    : q.difficulty === 'Medium'
                                                    ? 'bg-warning text-dark'
                                                    : 'bg-danger'
                                                }`}
                                              >
                                                {q.difficulty}
                                              </span>
                                            </td>
                                          </tr>
                                        );
                                      })}
                                    </tbody>
                                  </table>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
    <Footer/></>
  );
}

export default Table;
