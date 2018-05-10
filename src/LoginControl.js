import React, { Component } from 'react';

export default class LoginControl extends Component{
  constructor(props){
    super(props);

    this.state = {isLoginIn: false};
    
  }

  handleLoginClick(){
    this.setState({isLoginIn: true});
  }

  handleLogoutClick(){
    this.setState({isLoginIn: false});
  }

  render() {
    const isLoginIn = this.state.isLoginIn;

    return (
      <div>
        <h1>THis is Login component</h1>
        <h2>{isLoginIn}</h2> 
      </div>
      
    )
  }
}
