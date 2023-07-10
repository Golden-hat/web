import './App.css';
import React from 'react';

/*
function HelloWorld(name){
  return(
    <div>
      <div id="helloWorld">
        <h3>{name.feature}</h3>
        Hello, {name.text}{name.sub}
      </div>
    </div>
  );
}
*/

class HelloWorld extends React.Component{
  state = {
    show: true
  }
  render(){
    if(this.state.show){
      return(
      <div>
        <div id="helloWorld">
          <h3>{this.props.feature}</h3>
          Hello, {this.props.text}{this.props.sub} <br></br>
          <button id="toggleButton" onClick={ () => this.setState({show:false})}>toggle</button>
        </div>
      </div>
      );  
    }
    else{
      return(
      <h1>
        No elements
        <button id="toggleButton" onClick={ () => this.setState({show:true})}>toggle</button> 
      </h1>
      ) 
    }
  }
}

function App(){
  return(
    <div>
      This is my Component 
      <HelloWorld text="Yassin" sub =", ¿cómo estás?" feature ="El más divertido"/>
      <HelloWorld text="Carlos" sub =", ¿cómo te encuentras?" feature ="El más callado"/>
      <HelloWorld text="Juan" sub =", ¿cómo andas?" feature = "El que más se preocupa"/>
    </div>
  );
}

export default App;
