import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pageSize = 6;
  // apikey = process.env.REACT_APP_API_KEY;
  apikey = '974262138017486cba6c2afc253cd00d';

  state = {
    progress: 0
  }

  setProgress = (progress)=> {
    this.setState({ progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
          {/* here key set the force mount  */}
          <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" PageSize={this.pageSize} Country="in" Category="general"/>}/> 
          <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="Business" PageSize={this.pageSize} Country="in" Category="Business"/>}/>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="" PageSize={this.pageSize} Country="in" Category="entertainment"/>}/>
          <Route exact path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" PageSize={this.pageSize} Country="in" Category="general"/>}/>
          <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" PageSize={this.pageSize} Country="in" Category="health"/>}/>
          <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" PageSize={this.pageSize} Country="in" Category="science"/>}/>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" PageSize={this.pageSize} Country="in" Category="sports"/>}/>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" PageSize={this.pageSize} Country="in" Category="technology"/>}/>

        </Routes>
        </Router>
      </div>
    )
  }
}

