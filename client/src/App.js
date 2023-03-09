import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { accessToken, getCurrentUserProfile } from './spotify';
import { catchErrors } from './utils';
import Home from './home/home';
import Profile from './profile/profile';
import Login from './login/login';
import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  :root {
    --midnight-green: #064254;
    --orange: #FF826A;
    --yellow: #FFC857;
    /* --teal: #177E89; */
    --white: #FFFFFF;
    --black: #000000;

    --font: 'Circular Std', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--midnight-green);
    color: var(--yellow);
    font-family: var(--font);
  }
`;

// Scroll to top of page when changing routes
// https://reactrouter.com/web/guides/scroll-restoration/scroll-to-top
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
      <GlobalStyle/>
      <header className="App-header">
      {!token ? (
          <Login />
        ) : (
          <Router>
            <ScrollToTop/>
            <Routes>
              <Route exact path="/profile" element={<Profile profile={profile}/>}/>
              <Route exact path="/" element={<Home profile={profile}/>}/>
            </Routes>
          </Router>
        )}
      </header>
    </div>
  );
}

export default App;
