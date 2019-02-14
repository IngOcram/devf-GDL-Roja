import React, {Component} from 'react'
import {BrowserRouter as Router, NavLink } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Show from './Show';
import PostReact from './PostReact'




class MainLibros extends Component {
    render(){
        return(
            <Router>
                <div>
                <ul>
                    <li><NavLink activeStyle= { {color: 'red'} }  exact to= "/">Home</NavLink> </li>
                    <li><NavLink activeStyle= { {color: 'red'} }  exact to= "/show">Show</NavLink> </li>
                    <li><NavLink activeStyle= { {color: 'red'} }  exact to= "/add">Add</NavLink> </li>
                </ul>
                
                
                <Route path= "/show" exact component= {Show} />
                <Route path= "/add" exact component= {PostReact} />
                
                </div>
            
            </Router>
        )
    }
}

export default MainLibros