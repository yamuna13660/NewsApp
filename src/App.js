
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { useState } from 'react';
import {
   HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color="#f11946"
          progress={progress}
        />
        <Routes>
          <Route 
             exact path="/"
            element={<News setprogress={setProgress} country="us" category="general" key="general" />}
          />
          <Route
            exact path="/business"
            element={<News setprogress={setProgress} country="us" category="business" key="business" />}
          />
          <Route
            exact path="/entertainment"
            element={<News setprogress={setProgress} country="us" category="entertainment" key="entertainment" />}
          />
          <Route
            exact path="/general"
            element={<News setprogress={setProgress} country="us" category="general" key="general" />}
          />
          <Route
            exact path="/health"
            element={<News setprogress={setProgress} country="us" category="health" key="health" />}
          />
          <Route
            exact path="/science"
            element={<News setprogress={setProgress} country="us" category="science" key="science" />}
          />
          <Route
            exact path="/sports"
            element={<News setprogress={setProgress} country="us" category="sports" key="sports" />}
          />
          <Route
            exact path="/technology"
            element={<News setprogress={setProgress} country="us" category="technology" key="technology" />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

