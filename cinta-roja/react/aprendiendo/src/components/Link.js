import React, { Component } from 'react';


class Link extends Component {

    render(){
        return(
        
            <a href= {this.props.aDonde} target="_blank"> {this.props.Texto} </a>
        
        )

    }



}

export default Link;
