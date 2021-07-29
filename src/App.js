import React,{Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Formulario from './pages/Formulario';

function App() {
  return (
    <Router>
        <Route exact path="/" render = {() => {
          return (
            <div>
                <h1>Hola</h1>
            </div>
          )
        }}>
        </Route>
        <Route path="/formulario" render = {() => {
          return (
            <div>
                <Formulario></Formulario>
            </div>
          )
        }}>
        </Route>
    </Router>    
  );
}

export default App;
