import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import HorsesDetail from './HorsesDetail.js';
import HorsesPage from './HorsesPage';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/about">
            <HorsesPage />
          </Route>
          <Route exact path="/detail-page">
            <HorsesDetail />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}