import React, { Component } from 'react';

export default class Lifecycle extends Component{
  constructor(props){

    //console.log('constructor called');

    super(props);

    this.state = {
      count: 0,
      name: 'Lifecycle'
    }

    this.Add = this.Add.bind(this);
    this.Remove = this.Remove.bind(this);
  }

  componentWillMount(){
    //console.log('componentWillMount called')
  }

  componentDidMount() {
    //console.log('componentDidMount called')
  }

  Add(){
    this.setState({count: this.state.count + 1 })
  }

  Remove(){
    this.setState({count: this.state.count - 1 })
  }

  componentWillReceiveProps(nextProps){
    //console.log(nextProps);
    //console.log('componentWillReceiveProps called')
  }

  shouldComponentUpdate(nextProps, nextState){
      //console.log('shouldComponentUpdate called', nextState);
      if(this.state.count !== nextState.count){
       // console.log("I will updated");
        return true;
      }
      return false;
  }

  componentWillUpdate(){
     // console.log('componentWillUpdate called')

  }

  componentDidUpdate(){
    //  console.log('componentDidUpdate called');
  }


  render(){
    console.log('render called')
    return(
      <div>
        <div>
          <h1>This is LifeCycle component</h1>
          <h2>{this.state.count}</h2>
          <h3>{this.props.name}</h3>
        </div>
        <button onClick={this.Add}>
          <span>+(Add)</span>
        </button>
        <button onClick={this.Remove}>
          <span>(Remove)</span>
        </button>
      </div>
    )
  }

}
