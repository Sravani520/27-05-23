import React, {Component} from "react";
// import Prop from "./Prop";
import MessageList from "./components/MessageList";


class App extends Component{
  state={
    subject:"reactjs",
    year:2013
  }
  render(){
    return(
      <div>
      {/* <p>This is from App class Component</p>
      <h1>This is a head tag</h1>
      <p>{this.state.subject}</p>
      <p>{this.state.year}</p>
      <Prop name="react" age="24"/>
      <Prop name="js" age="28"/> */}
      <MessageList/>
      </div>
    )
  }
}
export default App

// model 
// View
// controller

// DisplayMessage   view
// TakeMessage      model
// MessageList()    storage