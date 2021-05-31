import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import HomePage from './pages/homepage.jsx';
import Resume from './pages/resume.jsx';
import About from './pages/about.jsx';
import _404Page from './pages/404page.jsx';
/*Python Backend Imports Start*/
import Project1NWNToolset from './pages/Project1NWNToolset.jsx'
import Project2TankEncyclopedia from './pages/Project2TankEncyclopedia.jsx'
/*Python Backend Imports End*/
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HTMLPort from './components/html_port';
import WIPNotification from './components/wip_notification';

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
          <main>
          <WIPNotification />
              {/*<nav>
                  <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/Resume">Resume</Link></li>
                      <li><Link to={`/about/${name}`}>about</Link></li>
                  </ul>
              </nav>*/}
            <Switch> {/* Ensures that only 1 page will be loaded at a time*/}
              <Route path="/" exact component={HomePage} />
              <Route path="/resume-dev" component={Resume} />
              <Route path="/about-dev" component={About} />
              <Route path="/react/legacy/:path" exact component={HTMLPort} />
              {/* Python Backend Routes Start */}
 <Route path="/Project1NWNToolset" component={Project1NWNToolset} />
<Route path="/Project2TankEncyclopedia" component={Project2TankEncyclopedia} />
{/* Python Backend Routes End */}
              <Route component={_404Page}/> {/* Works like the "default" case in an imperitave switch statement */}
            </Switch>
          </main>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );