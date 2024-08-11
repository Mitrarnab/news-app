import React, { useState } from 'react'


import './App.css';
import Navabr from './componens/Navabr';
import News from './componens/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';



const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0)






  return (
    <>

      <Router >
        <Navabr />
        <LoadingBar
          color='#f11946'
          progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Routes >
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6} country='in' category='general' />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={6} country='in' category='business' />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={6} country='in' category='entertainment' />} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={6} country='in' category='general' />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={6} country='in' category='health' />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={6} country='in' category='science' />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={6} country='in' category='sports' />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={6} country='in' category='technology' />} />
        </Routes>
      </Router>
    </>
  )

}

export default App

