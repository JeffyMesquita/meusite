import React, { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      status: true
    };

    this.sair = this.sair.bind(this);
    this.entrar = this.entrar.bind(this);
  }

  sair(){
    this.setState({status: false})
  }

  entrar(){
    this.setState({status: true})
  }

  render(){
    return(
      <div>
       
      </div>
    ) 
  }
}

export default App;