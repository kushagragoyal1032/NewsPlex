import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 6;
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Routes>
          {/* here key set the force mount  */}
          <Route exact path="/" element={<News key="general" PageSize={this.pageSize} Country="in" Category="general"/>}/> 
          <Route exact path="/business" element={<News key="Business" PageSize={this.pageSize} Country="in" Category="Business"/>}/>
          <Route exact path="/entertainment" element={<News key="" PageSize={this.pageSize} Country="in" Category="entertainment"/>}/>
          <Route exact path="/general" element={<News key="entertainment" PageSize={this.pageSize} Country="in" Category="general"/>}/>
          <Route exact path="/health" element={<News key="health" PageSize={this.pageSize} Country="in" Category="health"/>}/>
          <Route exact path="/science" element={<News key="science" PageSize={this.pageSize} Country="in" Category="science"/>}/>
          <Route exact path="/sports" element={<News key="sports" PageSize={this.pageSize} Country="in" Category="sports"/>}/>
          <Route exact path="/technology" element={<News key="technology" PageSize={this.pageSize} Country="in" Category="technology"/>}/>

        </Routes>
        </Router>
      </div>
    )
  }
}

