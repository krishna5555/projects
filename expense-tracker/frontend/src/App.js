import './App.css';
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Categories from './Categories';
import Expense from './Expense';
import Navigation from './Navigation';

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app_header">
          <h1>Expense Tracker</h1>
          <Navigation />
        </div>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/expense">
              <Expense />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
