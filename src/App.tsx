import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
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
        <Route path='/' element={<Auth userOnly={false} setUser={setUser} setGameID={setGameID}/>}/>
        <Route path='/trees' element={<RequireUser><Trees gameCode={gameID} user={user} /></RequireUser>}/>
        <Route path='/setup' element={<Setup setGameID={setGameID}/>} />
        <Route path='/god' element={<God gameID={gameID}/>}/>
        <Route path='/known/:urlID' element={<Auth userOnly={true} setUser={setUser} setGameID={setGameID}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
