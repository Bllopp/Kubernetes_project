
import './App.css';
import React from 'react';
import {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthService from './services/AuthService';

import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Todo from './components/Todo';

function App() {

  const [loggedIn,setLoggedIn] = useState(!!AuthService.getToken)
  
  const handleLogin= () => {
    setLoggedIn(true)
  }

  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path='/login' element={<Login onLogin={handleLogin} />} />
          <Route path='/' element={<PrivateRoute element={<Todo />} />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
