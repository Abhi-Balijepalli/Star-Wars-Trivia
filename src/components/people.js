import React from 'react';
import './../App.css';
import {
  Route,
  Switch,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom';
import people from '../data/people.json';

function PEOPLE() {
    const match = useRouteMatch();
    console.log("== people_match:", match);
    const {url,path} = match;
    var peopleName = Object.keys(people).map(function(key) {
      return <Link to ={`${url}/${key}`}>{people[key].name}</Link>
    });
      return(
        <>
          <div className="sidenav">
            {peopleName}
          </div>
          <Switch>
            <Route path={`${path}/:key`}>
              <PeopleItems/>
            </Route>
            <Route exact path={`${path}`}>
              <p className="IntroDiag">Please select a person on the left, or choose a different route</p>
            </Route>
          </Switch>
        </>
      ); 
  
  }
  function PeopleItems(){
    const { key} = useParams();
    var filmNames = Object.keys(people[key].films).map(function(x){
      return <li><Link to={`${people[key].films[x]}`}> {people[key].films[x]} </Link></li>
    });
  
    return(
      <>
        <div className="content">
          <h4 className="name">Name: {people[key].name}</h4>
          <h4>Url: <Link to={`${people[key].url}`}>{people[key].url}</Link></h4>
          <h4>Height: {people[key].height}</h4>
          <h4>Mass: 
            <br></br>
            {people[key].mass}
          </h4>
          <h4>Hair Color: {people[key].hair_color}</h4>
          <h4>Skin Color: {people[key].skin_color}</h4>
          <h4>Eye Color: {people[key].eye_color}</h4>
          <h4>Birth Year: {people[key].birth_year}</h4>
          <h4>Gender: {people[key].gender}</h4>
          <h4>Homeworld: {people[key].homeworld}</h4>
          <h4>Films: </h4>
              {filmNames}
        </div>
      </>
    )
  }

  export default PEOPLE;