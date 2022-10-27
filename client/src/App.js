import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage"
import Home from "./components/home/Home";
import GameCreate from './components/gamecreate/GameCreate';
import GameDetail from './components/gamedetail/GameDetail';
import { NotFound } from './components/notFound/NotFound';
import { About } from './components/about/About';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/creategame" component={GameCreate}/>
        <Route exact path="/videogames/:id" component={GameDetail}/>
        <Route exact path="/detail" component={About}/>
        <Route path="/*" component={NotFound}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;