import React, {Component} from 'react'

class TarjetaGym extends Component{

    render(){
        return(
            <div>
            <h1>Usuario: {this.props.usuario} </h1>
            <h3>Telefono: {this.props.telefono}</h3>
            <h3>ID:  {this.props.myID}</h3>
        </div>

        )
    }


}

export default TarjetaGym

