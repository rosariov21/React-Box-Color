import React from 'react';
// make sure you you import the file with app.js


//create a class component to change the variable color
export default class Box extends React.Component{
  constructor(props){
    super(props);
    this.state = { color:"blue" };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(){
  let red = Math.floor(Math.random()*255)
  let green = Math.floor(Math.random()*255)
  let blue =  Math.floor(Math.random()*255)
  console.log(this.state.color)
  this.setState({color:`rgb(${red},${green},${blue})`})
  }
  render(){
    return(
      <div style={{backgroundColor: this.state.color}}>
      <h1>Changed color</h1>
      <button onClick={this.changeColor}>CHANGE MY COLOR</button>
      </div>
    )
  }
}
