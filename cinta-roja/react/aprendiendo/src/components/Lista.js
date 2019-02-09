import React, {Component} from 'react'
import Persona from './Persona'



class Lista extends Component {

    state = {
        load: false
    }

    //add = () => { this.setState( {load: true} ) }
    //remove = () => { this.setState( {load: false} ) }

    toggle = () =>  {this.setState ( {load: !this.state.loadload} ) }


    render(){
        return(
            <React.Fragment>

{/* <button type="button" onclick= {this.add} disabled= {this.state.load} >ADD</button>
        <button type="button" onclick= {this.remove} disabled = {!this.state.load}>REMOVE</button>*/}
            <button type="button" onClick= {this.toggle} >CAMBIO</button>

            {this.state.load ? < numero/> : null}
            
            </React.Fragment>
        )
        

    }
}

export default Lista