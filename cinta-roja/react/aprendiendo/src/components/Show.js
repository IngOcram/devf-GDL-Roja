import React, {Component} from 'react'
import axios from 'axios'
import Tarjeta from './Tarjeta';

class Show extends Component {

    state = {
        libros: []
    }

    getLibros = () => {
        axios.get('http://localhost:5000/libros/')
        .then(res => {
            console.log(res.data)
            this.setState( { 
                libros: res.data
            })
            // MAP Sacar la informacion
            // Mostrarla en pantalla - volver a hacer un render



        })
        .catch( err => {
            console.log(`Error en el GET, ${err}`)
            
            })
            
    }
    render(){
        return(
            <div>
            <button onClick= {this.getLibros} >  Get libros </button>
            {
                this.state.libros.map( (LibroActual, index) => {
                    return(
                        <Tarjeta 
                        titulo= {LibroActual.titulo}
                        autor= {LibroActual.autor}
                        anio= {LibroActual.anio}
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

export default Show