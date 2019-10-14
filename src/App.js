import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './components/misc/Home'


function App() {
  return (
    <div className="App">
      <h1>Juan Portillo for Grupo Evoluciona</h1>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
