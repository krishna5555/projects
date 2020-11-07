import './App.css';
import Sidebar from './Sidebar';
import Chatspace from './Chatspace';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <div className="app_body">
        <Router>
          <Sidebar />

          <Switch>

            <Route path="/rooms/:roomId">
              <Chatspace />
            </Route>

            <Route path="/">
              {/* <Chatspace /> */}
            </Route>

          </Switch>
          
        </Router>
      </div>
    </div>
  );
}

export default App;
