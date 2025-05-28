import React from 'react';

function ProgressBar({ progress, current, total, width = 150 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: `${width}px` }}>
      <div className="progress" style={{ height: '15px', width: '100%', minWidth: '100px' }}>
        <div
          className="progress-bar"
          style={{ width: `${progress}%`, backgroundColor: '#00bcd4' }}
        />
      </div>
      <span style={{ whiteSpace: 'nowrap' }}>{current}/{total}</span>
    </div>
  );
}

export default ProgressBar;
