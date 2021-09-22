import React, { Component } from 'react';

class Equipe extends Component {
  render() {
    return(      
      <div>
        <Sobre 
          nome={this.props.nome}
          cargo={this.props.cargo}
          idade={this.props.idade}
        />
        <Social />
        <hr />
      </div>
    );
  }
}

class Sobre extends Component {
  render() {
    return( 
      <div>
        <h2>Olá, {this.props.nome}</h2>
        <h3>Cargo: {this.props.cargo}</h3>
        <h4>Idade: {this.props.idade} Anos</h4>
      </div>
    );
  }
}

const Social = () => {
  return(
    <div>
      <a> Facebook </a>
      <a> LinkedIn </a>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe nome="Jeferson" cargo="Programador" idade="33"/>
      <Equipe nome="Lucas" cargo="Designer" idade="20"/>
      <Equipe nome="Thalita" cargo="BackEnd" idade="33"/>
    </div>
  );
}

export default App;
