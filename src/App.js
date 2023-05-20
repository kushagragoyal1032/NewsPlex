import './App.css';

import React, { Component, useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App = ()=> {
  const pageSize = 6;
  // apikey = process.env.REACT_APP_API_KEY;
  const apikey = '974262138017486cba6c2afc253cd00d';

  const [progress, setProgress] = useState(0);

  // setProgress = (progress)=> {  doubt
  //   setProgress(progress);
  // }

  return (
    <div>
      <Router>
      <NavBar/>
      <LoadingBar
      height={3}
      color='#f11946'
      progress={progress}
    />
      <Routes>
        {/* here key set the force mount  */}
        <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" PageSize={pageSize} Country="in" Category="general"/>}/> 
        <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key="Business" PageSize={pageSize} Country="in" Category="Business"/>}/>
        <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="" PageSize={pageSize} Country="in" Category="entertainment"/>}/>
        <Route exact path="/general" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" PageSize={pageSize} Country="in" Category="general"/>}/>
        <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" PageSize={pageSize} Country="in" Category="health"/>}/>
        <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" PageSize={pageSize} Country="in" Category="science"/>}/>
        <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" PageSize={pageSize} Country="in" Category="sports"/>}/>
        <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" PageSize={pageSize} Country="in" Category="technology"/>}/>

      </Routes>
      </Router>
    </div>
  )
}

export default App;