import React from 'react';
import Navbar from './Nav';
import Categories from './Categories';
import Orders from './Orders';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className='container'>
          <Route path='/categories' component={Categories} />
          <Route path='/orders' component={Orders} />
        </div>
      </Router>
    </div>
  );
}

export default App;
