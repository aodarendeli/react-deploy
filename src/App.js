import React,{useState,useEffect} from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import People from './components/people/People';
import Planets from './components/planets/Planets';
import Species from './components/species/Species';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Container } from 'semantic-ui-react';


function App() {
const [people,setPeople]=useState([]);
const [planets,setPlanets]=useState([]);
const [species,setSpecies]=useState([]);
const [loading,setLoading]=useState(true);

  useEffect(()=> {
    async function fetchPeople(){
      const res=await fetch('https://swapi.dev/api/people/?format=json');
      const data=await res.json();
      setPeople(data.results);
    }
    async function fetchPlanets(){
      const res=await fetch('https://swapi.dev/api/planets/?format=json');
      const data =await res.json();
      setPlanets(data.results);
    }
    async function fetchSpecies(){
      const res=await fetch('https://swapi.dev/api/species/?format=json');
      const data =await res.json();
      setSpecies(data.results);
    }
    fetchPeople();
    fetchPlanets();
    fetchSpecies();
    setLoading(false);
  },[])
  console.log(people);
  console.log(planets);
  console.log(species);
  return (
    <>
         <Router>
           <Navbar />
            <Container>
              <Switch>
                <Route exact path='/'>
                  <Home />
                  </Route>
                  <Route exact path='/people'>
                  <People data={people}/>
                  </Route>
                  <Route exact path='/planets'>
                  <Planets data={planets}/>
                  </Route>
                  <Route exact path='/species'>
                  <Species data={species}/>
                  </Route>
              </Switch>
            </Container>
         </Router>
    </>
  );
}

export default App;
