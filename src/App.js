import './App.css';
import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HorsesPage from './HorsesPage.js';
import HorsesDetail from './HorsesDetail.js';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route>
            Hello
          </Route>
          <Route>
            Hello
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
