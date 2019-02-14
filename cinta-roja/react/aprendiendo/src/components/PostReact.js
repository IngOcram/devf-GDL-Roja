import React, {Component} from 'react'
import axios from 'axios'


class PostReact extends Component {

    state = {
        titulo: '',
        autor: '',
        anio: ''
    }

    guardarLibro = () => {

    
    //const nuevoLibro = {
    //    titulo: "Python for dumies",
    //    autor: "alguna persona",
    //    anio: 2000

   // }

   const nuevoLibro = this.state

   
    axios.post("http://localhost:5000/libros", nuevoLibro)
        .then( (resp) => {
            console.log(resp.data);
        } 
        )
        .catch(err => {
            console.log(err)
        } )

    }

    actualizarValor = (evt) => {
        console.log(evt.target.id, evt.target.value);
        let myID = evt.target.id;
        this.setState( {
            [myID]: evt.target.value
        } )


    } 


    render(){
        return(
            <div>
                <h3>Agregar nuevo Libro</h3>
                <input type= "text" id='titulo' onChange = {this.actualizarValor} /><br/>
                <input type= "text" id='autor' onChange = {this.actualizarValor}/><br/>
                <input type= "text" id='anio' onChange = {this.actualizarValor}/><br/>
            <button onClick= {this.guardarLibro} > Agregar </button>
            </div>
        )
    }
}

export default PostReact