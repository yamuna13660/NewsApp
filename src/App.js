import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react'
import{
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_API;
  state={
    progress:0
  }
  setprogress=(progress)=>
  
  {
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar />
        <LoadingBar
        height={3}
        color="#f11946"
        progress={this.state.progress}
       
      />
        <Routes>
          <Route exact path="/" element={<News setprogress={this.setprogress} apikey={this.apikey}country="us" category="general" key="general" />} />
          <Route exact  path="/business" element={<News setprogress={this.setprogress} apikey={this.apikey} country="us" category="business"  key='business' />} />
          <Route exact  path="/entertainment"element={<News setprogress={this.setprogress} apikey={this.apikey}country="us" category="entertainment" key='entertainemnt' />} />
          <Route exact path="/general"  element={<News setprogress={this.setprogress} apikey={this.apikey}country="us" category="general"key='general' />} />
          <Route exact path="/health"  element={<News setprogress={this.setprogress}apikey={this.apikey} country="us" category="health"key='health' />} />
          <Route exact path="/science"element={<News setprogress={this.setprogress} apikey={this.apikey}country="us" category="science" key='science'  />} />
          <Route exact path="/sports"element={<News setprogress={this.setprogress} apikey={this.apikey}country="us" category="sports"  key='sports'/>} />
          <Route exact path="/technology" element={<News setprogress={this.setprogress} apikey={this.apikey}country="us" category="technology" key='technology' />} />
        </Routes>
      </Router>
      </div>
    )
  }
}
