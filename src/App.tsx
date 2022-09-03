import React, { useState } from 'react';
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

  const [user, setUser] = useState("");

  function RequireUser({ children }: { children: JSX.Element }) {
    let location = useLocation();
    if (user === "") {
      // Redirect to the /login page
      return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Auth setUser={setUser} />}/>
        <Route path='/trees' element={<RequireUser><Trees user={user} /></RequireUser>}/>
      
      </Routes>
    </Router>
  );
}

export default App;
