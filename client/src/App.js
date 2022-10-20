import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage"
import Home from "./components/home/Home";
import GameCreate from './components/gamecreate/GameCreate';
import GameDetail from './components/gamedetail/GameDetail';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/creategame" component={GameCreate}/>
        <Route exact path="/videogames/:id" component={GameDetail}/>

      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;