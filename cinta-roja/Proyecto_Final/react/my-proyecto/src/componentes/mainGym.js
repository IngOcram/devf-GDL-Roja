import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink} from 'react-router-dom'
import Route from 'react-router-dom/Route' 
import ShowGym from './ShowGym';
import Gym from './Gym.css';

class MainGym extends Component {

    render(){
        return(

            <Router>
                <div>
                <h1 className="titulo">GYM Mamado Nervo </h1>
                <ul>
                    <li><NavLink activeStyle= { {color: 'red'} }  exact to= "/gym">Usuarios</NavLink> </li>
                    <li><NavLink activeStyle= { {color: 'red'} }  exact to= "/ejercisio">Ejercisio</NavLink> </li>
                    <li><NavLink activeStyle= { {color: 'red'} }  exact to= "/rutinas">Rutinas</NavLink> </li>
                </ul>
                
                <Route path= '/gym' exact component= {ShowGym} />
                </div>
            
            </Router>

        )
    }
}

export default MainGym