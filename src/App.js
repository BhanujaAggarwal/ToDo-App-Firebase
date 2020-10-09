import React from 'react';
import './App.css';
import Todos from './component/Todos'

class App extends React.Component {
  state = {
    todos : [
      {
        id :1,
        title : "Help Mom",
        completed : false
      },
      {
        id :2,
        title : "Study",
        completed : true
      },
      {
        id :3,
        title : "Qwerty",
        completed : false
      }
    ]
  };
  render(){
    return(
      <div className="App">
        <Todos todos = {this.state.todos}/>
      </div>
    );
  }
}

export default App;
