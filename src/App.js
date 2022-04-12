import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './pages/signin/signin';
import Otp from './pages/otp/otp';
import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
     <SignIn />
     <Otp />
     <Home />
    </div>
  );
}

export default App;
