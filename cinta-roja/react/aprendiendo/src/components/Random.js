import React, { Component } from 'react';
import Link from './Link'

class Random extends Component {

    state = {
        aDonde: null,
        Texto: null
    }

    links = [
        {aDonde: "https://www.google.com.mx/", Texto: "Buscador"},
        {aDonde: "https://twitter.com/?lang=es", Texto: "El pajarito chismo"},
        {aDonde: "https://www.facebook.com/", Texto: "Chismografo"},
        {aDonde: "https://www.w3schools.com/html/", Texto: "Conocimiento"},
    ]



    show = () => {
        let n = Math.floor(Math.random() * 4 )
        console.log('n=', n)
        this.setState( {
            aDonde: this.links[n].aDonde,
            Texto: this.links[n].Texto
        } )
    }

    render(){
        return(
            <React.Fragment>
                <h1> Presiona el boton </h1>
                <button type="button" onClick= {this.show} >Click aqui </button> <br/>
                {this.state.aDonde ? <Link aDonde= {this.state.aDonde} Texto= {this.state.Texto} />: null }
             </React.Fragment>
        )


    }

}

export default Random;

