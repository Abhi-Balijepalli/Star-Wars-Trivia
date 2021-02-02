import React from 'react';
import './../App.css';
import {
  Route,
  Switch,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom';
import films from '../data/films.json';

function FILMS(){
    const match = useRouteMatch();
    console.log("== film_match:", match);
    const {url,path} = match;
    var filmTitle = Object.keys(films).map(function(key) {
      return <Link to ={`${url}/${key}`}>{films[key].title}</Link>
    });
      return(
        <>
          <div className="sidenav">
            {filmTitle}
          </div>
          <Switch>
            <Route path={`${path}/:key`}>
              <FilmItems/>
            </Route>
            <Route exact path={`${path}`}>
              <p className="IntroDiag">Select a film on the left, or choose a different route</p>
            </Route>
          </Switch>
        </>
      ); 
  }
  function FilmItems(){
    const { key} = useParams();
    var charNames = Object.keys(films[key].characters).map(function(x){
      return <li><Link to={`${films[key].characters[x]}`}> {films[key].characters[x]} </Link></li>
    });
    var planetNames = Object.keys(films[key].planets).map(function(x){
      return <li><Link to ={`${films[key].planets[x]}`}> {films[key].planets[x]}</Link></li>
    });
    return(
      <>
        <div className="content">
          <h4 className="name">Movie Name: {films[key].title}</h4>
          <h4>Url: <Link to={`${films[key].url}`}>{films[key].url}</Link></h4>
          <h4>Episode ID: {films[key].episode_id}</h4>
          <h4>Opening Crawl: 
            <br></br>
            {films[key].opening_crawl}
          </h4>
          <h4>Release Date: {films[key].release_date}</h4>
          <h4>Director: {films[key].director}</h4>
          <h4>Producer: {films[key].producer}</h4>
          <h4>Characters: </h4>
              {charNames}
          <h4>Planets </h4>
              {planetNames}
        </div>
      </>
    )
  }
  export default FILMS;