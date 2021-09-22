import React from "react";


const Bemvindo = (props) => {
  return (
    <div>
      <h2>Bem-vindo(a) {props.nome}</h2>
      <h3>Tenho {props.idade} anos de idade</h3>
    </div>
  );
}

function App() {
  return (
    <div>
      Olá Mundo!
      <Bemvindo nome="Jeferson" idade="33"/>      
      <Bemvindo nome="Amanda" idade="25"/>      
      <h1>Curso React</h1>
    </div>
  );
}

export default App;
