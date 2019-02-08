import React, {Component} from 'react'
import Persona from './Persona'



class Lista extends Component {
    render(){
        return(
            <React.Fragment>
            <Persona name = "Lau" time="9" />
            <Persona name = "Charly"/>
            <Persona name = "Mich" time="2" />
            </React.Fragment>
        )
        

    }
}

export default Lista