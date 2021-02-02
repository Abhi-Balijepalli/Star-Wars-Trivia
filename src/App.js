import React from 'react';
import './App.css';
import {
  Route,
  Switch,
  NavLink,
  Redirect,
} from 'react-router-dom';
import PEOPLE from './components/people.js';
import FILMS from './components/films.js';
import PLANETS from './components/planets.js';


function App() {
  return (
    <>
    <div>
      <h1 className="mainTitle">Star Wars</h1>
    </div>
      <div className="topnav">
        <NavLink exact to="/">People</NavLink>
        <NavLink to="/films">Films</NavLink>
        <NavLink to="/planets">Planets</NavLink>
      </div>
      <Switch>
        <Route path="/people">
          <PEOPLE />
        </Route>
        <Route path="/films">
          <FILMS />
        </Route>
        <Route path="/planets">
          <PLANETS />
        </Route>
        <Route exact path="/">
          <Redirect to="/people"/>
        </Route>
        <Route path="/">
          <h1 className="errorPage">ERROR 404 - Enter a valid route</h1>
        </Route>
      </Switch>
    </>
  );
}
export default App;
