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
import God from './views/god';
import Setup from './views/setup';
import Trees from './views/trees';

function App() {

  const [user, setUser] = useState("");
  const [gameID, setGameID] = useState("");

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
        <Route path='/' element={<Auth setUser={setUser} setGameID={setGameID}/>}/>
        <Route path='/trees' element={<RequireUser><Trees gameCode={gameID} user={user} /></RequireUser>}/>
        <Route path='/setup' element={<Setup setGameID={setGameID}/>} />
        <Route path='/god' element={<God/>}/>
      </Routes>
    </Router>
  );
}

export default App;
