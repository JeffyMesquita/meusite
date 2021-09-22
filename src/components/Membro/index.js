import React, { Component } from 'react';

class Membro extends  Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: props.nome,
    }
  }
  render(){
    return(
      <div>
        <h1>Bem-vindo(a) {this.props.nome}</h1>
      </div>
    ); 
  }
}

export default Membro;