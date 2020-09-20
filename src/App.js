import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Index from './components/layout';
import {Provider} from './context';
import Lyrics from "./components/tracks/Lyrics";

function App() {
  return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/lyrics/track/:id" component={Lyrics}/>
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
  );
}

export default App;
