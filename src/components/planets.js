import React from 'react';
import './../App.css';
import {
  Route,
  Switch,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom';
import planets from '../data/planets.json';

function PLANETS(){
    const match = useRouteMatch();
    console.log("== people_match:", match);
    const {url,path} = match;
    var planetsName = Object.keys(planets).map(function(key) {
      return <Link to ={`${url}/${key}`}>{planets[key].name}</Link>
    });
      return(
        <>
          <div className="sidenav">
            {planetsName}
          </div>
          <Switch>
            <Route path={`${path}/:key`}>
              <PlanetItems/>
            </Route>
            <Route exact path={`${path}`}>
              <p className="IntroDiag">Please select a planet on the left, or choose a different route</p>
            </Route>
          </Switch>
        </>
      ); 
  }
  
  function PlanetItems(){
    const { key} = useParams();
    // console.log(key);
    // const { url, path } = useRouteMatch();
    var filmNames = Object.keys(planets[key].films).map(function(x){
      return <li><Link to={`${planets[key].films[x]}`}> {planets[key].films[x]} </Link></li>
    });
    var planetResidents = Object.keys(planets[key].residents).map(function(x){
      return <li><Link to ={`${planets[key].residents[x]}`}> {planets[key].residents[x]}</Link></li>
    });
    return(
      <>
        <div className="content">
          <h4 className="name">Planet Name: {planets[key].name}</h4>
          <h4>Url: <Link to={`${planets[key].url}`}>{planets[key].url}</Link></h4>
          <h4>Population: {planets[key].population}</h4>
          <h4>Rotation Period: {planets[key].roation_period}</h4>
          <h4>Orbital Period: {planets[key].orbital_period}</h4>
          <h4>Climate: {planets[key].climate}</h4>
          <h4>Gravity: {planets[key].gravity}</h4>
          <h4>Terrain: {planets[key].terrain}</h4>
          <h4>Surface Water: {planets[key].surface_water}</h4>
          <h4>Residents: </h4>
              {planetResidents}
          <h4>Films: </h4>
              {filmNames}
        </div>
      </>
    )
  }
  export default PLANETS;