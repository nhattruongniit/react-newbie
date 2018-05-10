import React, { Component } from 'react';
import LifeCycle from './LifeCycle';
import Toogle from './Toggle';
import LoginControl from './LoginControl';
import NameForm from './NameForm';
import Calculator from './Calculator';

class Clock extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      date: new Date(),
      name: 'Demo willrecir'
    };
  }

  componentWillMount(){ 
    //console.log("componentWillMount");
  }

  componentDidMount(){ 
    //console.log("componentDidMount");
    this.setState({text: 'bb'})
    //this.timerID = setInterval(() => this.tick(),1000);
  }

  componentWillUnMount(){
    //console.log("componentWillUnMount");
    clearInterval(this.timerID);
  }


  tick(){
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>This is Clock component</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <LifeCycle name={this.state.name}/>
        <Toogle/>
      </div>
      
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock  />
        <LoginControl/>
        <NameForm/>
        <Calculator/>
      </div>
    );
  }
}

export default App;
