import React from 'react';
// make sure you you import the file with app.js


//create a class component to change the variable color
export default class Box extends React.Component{
  constructor(props){
    super(props);
    this.state = { color:"blue" };
    this.changeColor = this.changeColor.bind(this);
  }
  // in this part i want to create a button where i can randomly change the color with a click of a button
  changeColor(){
  let red = Math.floor(Math.random()*255) //i have to use math.random to select a random color of component green
  let green = Math.floor(Math.random()*255)//the number 255 is between the rgb colors thats the max number i can go up to 0 is the min 
  let blue =  Math.floor(Math.random()*255)
  console.log(this.state.color)//this is to make sure its functioning on my cosole it shows up rgb 
  this.setState({color:`rgb(${red},${green},${blue})`})// now use setState usng the variables 
  }
  render(){
    return(
      <div style={{backgroundColor: this.state.color}}> //this is the html part we just ast some style so it can show up in the page 
      <h1>Changed color</h1>
      <button onClick={this.changeColor}>CHANGE MY COLOR</button>
      </div>
    )
  }
}
