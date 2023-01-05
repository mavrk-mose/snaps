import React from 'react';
import Home from './pages/Home';
import Description from './pages/Description';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
   <Router>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/Description' element={<Description/>} />
    </Routes>
   </Router>
  )
}

export default App
