import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import HomePage from './pages/homepage.jsx';
import Resume from './pages/resume.jsx';
import About from './pages/about.jsx';
import CategoryPage from './pages/category_page.jsx';
//import gameDesign from './pages/gameDesign.jsx'
import _404Page from './pages/404page.jsx';
/*Python Backend Imports Start*/
import ThisSite from './pages/ThisSite.jsx'
import TankEncyclopedia from './pages/TankEncyclopedia.jsx'
import Unum from './pages/Unum.jsx'
import Origamist from './pages/Origamist.jsx'
import Centripetal from './pages/Centripetal.jsx'
import NWNToolset from './pages/NWNToolset.jsx'
/*Python Backend Imports End*/
import { HashRouter as BrowserRouter, Route, Switch } from "react-router-dom"; //Using hash router to prevent github 404 errors (https://www.bing.com/search?q=react%20router%20404%20on%20refresh%20github%20pages&qs=n&form=QBRE&sp=-1&pq=react%20router%20404%20on%20refresh%20github%20page&sc=2-39&sk=&cvid=CEF0DBE5EB27412380C26C7889BEF402)
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
              <Route path="/resume" component={Resume} />
              <Route path="/about" component={About} />
              <Route path="/react/legacy/:path" exact component={HTMLPort} />
              {/* Python Backend Routes Start */}
 							<Route path="/ThisSite" component={ThisSite} />
							<Route path="/TankEncyclopedia" component={TankEncyclopedia} />
							<Route path="/Unum" component={Unum} />
							<Route path="/Origamist" component={Origamist} />
							<Route path="/Centripetal" component={Centripetal} />
							<Route path="/NWNToolset" component={NWNToolset} />
							<Route path="/web-development" render={() => <CategoryPage category="Web Development"/>} />
							<Route path="/game-development" render={() => <CategoryPage category="Game Development"/>} />
{/* Python Backend Routes End */}
              <Route component={_404Page}/> {/* Works like the "default" case in an imperitave switch statement */}
            </Switch>
          </main>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );