import React, {Component} from 'react'


class Suma extends Component {
    num = 0
    valorInical = console.log(num)
    Operacion1(){
        return(valorInical + 1)
    }
    Operacion2(){
        return(valorInical - 1)
    }
    render(){
        return(
            <div>
            <button type="button" onclick= {this.props.Operacion1} >+</button>
            <button type="button" onclick= {this.props.Operacion2} >-</button>
            </div>  

        )
}
  }

export default Suma