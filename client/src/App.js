import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { accessToken, getCurrentUserProfile } from './spotify';
import { catchErrors } from './utils';
import Home from './home/home';
import Profile from './profile/profile';
import Login from './login/login';
import './App.css';

function App() {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      const { data } = await getCurrentUserProfile();
      setProfile(data);
    }

    catchErrors(fetchData());

  }, [])
  return (
    <div className="App">
      <header className="App-header">
      {!token ? (
          <Login />
        ) : (
          <Router>
            <Routes>
              <Route exact path="/profile" element={<Profile profile={profile}/>}/>
              <Route exact path="/" element={<Home/>}/>
            </Routes>
          </Router>
        )}
      </header>
    </div>
  );
}

export default App;
