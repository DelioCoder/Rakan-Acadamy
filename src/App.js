import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

//Components
import HomeScreen from './screens/HomeScreen';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="container-fluid">      
          <Route exact path="/" component={HomeScreen}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
