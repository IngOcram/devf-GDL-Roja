import React, {Component} from 'react'
import axios from 'axios'
import Route from 'react-router-dom/Route' 


//API = chistes malos
// 2da opcion pokemon
// 3er SW
// 4ta Gatos que mando adriana

//class Peticiones extends Component {

//    state = {
//        pkmnName: 'Pokemon',
//        pkmnTypes: ''
//    }

//    getPokemon = () => {
//        let miPokemon = document.getElementById('miPkmn').value
//        axios.get("localhost:5000/libors" + miPokemon)
//        .then(res => {
//            console.log(res.data)
//            let tipos = res.data.types.map( (tipoActual) => {
//                return tipoActual.type.name
//            } )

//            this.setState({
//                pkmnName: res.data.name,
//                pkmnTypes: tipos.join(' / ')
//                })
//        })
//        .catch( err => {
//            console.log(`Error en el GET, ${err}`)

//        })

//    }

//    render(){
//        return( 
//            <React.Fragment>
//                <h2>{this.state.pkmnName} - {this.state.pkmnTypes} </h2>
//                <label>
//                Pokemon:
//                <input type="text" id="miPkmn" />
//                </label>
//                <button onClick= {this.getPokemon}> GET </button>
//            </React.Fragment>
//        )}
//}

//export default Peticiones



class Peticiones extends Component {


    getLibros = () => {
        axios.get('http://localhost:5000/libros/')
        .then(res => {
            console.log(res.data)
        })
        .catch( err => {
            console.log(`Error en el GET, ${err}`)
            
            })
            
    }


    render(){
        return( 
            
            <React.Fragment>
                <h2>{this.books} </h2>
                <button onClick= {this.getLibros}> libros </button>
            </React.Fragment>
        )}
}

export default Peticiones

