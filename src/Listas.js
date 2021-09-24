import React, { Component } from 'react';
import Feed from './components/Feed';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed: [
        {id: 1, username: 'Jeferson', curtidas: 33, comentarios: 5},
        {id: 2, username: 'Jakeline', curtidas: 123, comentarios: 15},
        {id: 3, username: 'Thorb Yorn', curtidas: 999, comentarios: 25},
        {id: 4, username: 'Sombra', curtidas: 1, comentarios: 0},
      ]
    };

  }

  render(){
    return(
      <div>
        {this.state.feed.map((item) => {
          return(
              <Feed id={item.id} 
                username={item.username}
                curtidas={item.curtidas}
                comentarios={item.comentarios}
              />
            );
        })}
      </div>
    ) 
  }
}

export default App;