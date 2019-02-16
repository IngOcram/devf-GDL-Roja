
import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink} from 'react-router-dom'
import Route from 'react-router-dom/Route' 

const NuevoComponente = ({match}) => {
    return(<h3>Soy componente mal hecho</h3>)
}

class Rutas extends Component {


    render(){
        return(             
            <Router>
                <div>
                <ul>
                    <li><NavLink activeStyle= { {color: 'red'} }  exact to= "/">Raiz</NavLink> </li>
                    <li><NavLink activeStyle= { {color: 'red'} }  exact to= "/otra">Otra</NavLink> </li>
                </ul>
                
                <Route path= '/' exact component= {NuevoComponente} />
                <Route path= '/' exact render= { () => {return <p>esta es otra opcion</p>}} />
                <Route path= '/otra/:num' exact component= {NuevoComponente} />
                </div>
            
            </Router>
        )
    }
}

export default Rutas
