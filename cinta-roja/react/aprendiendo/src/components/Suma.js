import React, {Component} from 'react'
import './estilo.css'


class Suma extends Component {

state = {
    contadorEstado: 0

}
   // valorInical = console.log(num)
   // Operacion1(){
   //     return(valorInical + 1)
   // }
    //Operacion2(){
    //    return(valorInical - 1)
    //}

    sumar = () => { this.setState ( {contadorEstado: this.state.contadorEstado + 1} )}
    restar = () => { this.setState ( {contadorEstado: this.state.contadorEstado - 1} )}

    componentWillMount(){
        console.log(' el componente se montara');
        console.log(this.state);
    }

    componentDidMount(){
        console.log('el componente ya se monto');
        console.log(this.state)
    }

    componentWillUpdate(){
        console.log('el componente ya se actualizara');
        console.log(this.state)
    }

    componentDidUpdate(){
        console.log('el componente ya se actualizo');
        console.log(this.state)
    }

    componentWillUnmount(){
        console.log('ya me mori');
        console.log(this.state)
    }


    render(){
        return(
            <div className = 'bordes'>
            <h1> {this.state.contadorEstado} </h1>    
            <button type="button" onClick= {this.sumar} >+</button>
            <button type="button" onClick= {this.restar}>-</button>
            </div>  

        )
}
  }

export default Suma