import React, {Component} from 'react'


class Tarjeta extends Component {
    render(){
        return(
            <div>
                <h1>Titulo: {this.props.titulo} </h1>
                <h3>Autor: {this.props.autor}</h3>
                <h3>Año:  {this.props.anio}</h3>
            </div>

        )

        
    }
}

export default Tarjeta