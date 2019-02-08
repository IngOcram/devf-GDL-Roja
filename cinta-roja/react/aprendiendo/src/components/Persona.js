import React, {Component} from 'react'

class Persona extends Component {
    myTime = 0
    imprimerHora(){
        return (this.props.time ? this.props.time : "undefined")
    }
    render(){
        return(
            <div>
            
            <h1>Hola me llamo {this.props.name} </h1>
            <h2>Son las {this.imprimerHora()} </h2>
            <h3>Estoy aprendiendo a programar</h3>
            </div>

        )
    }

}

export default Persona