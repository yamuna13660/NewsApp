import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from'./components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import PracticeSet from './components/PracticeSet';
export default function App() {
  return (
    <div>
      <Router >
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home/> }></Route>
          <Route path="/practice" element={ <PracticeSet/> }></Route>
          <Route path="/about" element={<About/>}></Route>
           <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      </Router>
    </div>
  )
}
