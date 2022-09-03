import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import Auth from './views/auth';
import Trees from './views/trees';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/trees' element={<Trees/>}/>
      </Routes>
    </Router>
  );
}

export default App;
