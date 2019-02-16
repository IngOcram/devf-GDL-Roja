import React, {Component} from 'react'
import axios from 'axios'
import Tarjeta from './TarjetaGym';

class ShowGym extends Component {

    state = {
        usuarios: []
    }

    getUsuarios = () => {
        axios.get('http://localhost:5000/gym/')
        .then(res => {
            console.log(res.data)
            this.setState( { 
                usuarios: res.data
            })
        



        })
        .catch( err => {
            console.log(`Error en el GET, ${err}`)
            
            })
            
    }
    render(){
        return(
            <div>
            <button onClick= {this.getUsuarios} >  Get libros </button>
            {
                this.state.libros.map( (usuarioActual, index) => {
                    return(
                        <Tarjeta 
                        Usuario= {usuarioActual.usuario}
                        Telefono= {usuarioActual.telefono}
                        ID= {usuarioActual.myID}
                        key = {index} 
                        
                        
                        />
                    )
                }) 
            }
            <Tarjeta />
            </div>
        )

    }
    
}

export default ShowGym