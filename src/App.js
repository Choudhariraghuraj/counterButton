import React, { Component } from "react"

class Button extends React.Component {
  constructor(props) {
    super(props); 
    this.handleClick = this.handleClick.bind(this); 
  }
 
  handleClick() {
    this.props.onClickFunction(this.props.incrementValue)
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        +{this.props.incrementValue}
      </button>
    )
  }
}
const Result = props => {
  return (
    <div>
      {props.counter}
    </div>
  )
}
class App extends React.Component {  
  constructor(props){
    super(props);
    this.state = {
      counter:0
    }
    this.incrementCounter = this.incrementCounter.bind(this);
  }
incrementCounter(incrementValue){
  this.setState(prevstate => ({
    counter:prevstate.counter + incrementValue
  }))
}

render(){
  return(
    <div>
      <Button incrementValue={1} onClickFunction={this.incrementCounter} />
      <Button incrementValue={10} onClickFunction={this.incrementCounter} />
      <Button incrementValue={100} onClickFunction={this.incrementCounter} />
      <Button incrementValue={1000} onClickFunction={this.incrementCounter} />
      <Result counter = {this.state.counter} />
    </div>
  )
}
}
export default App