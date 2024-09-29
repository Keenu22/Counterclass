import { Component } from "react";
class Count extends Component{
  constructor(){
    super();
    this.state={count:0};
  }
  handleInc() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  handleDec() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }
  
  render(){
    return(
      <>
      <h1>Counter App</h1>
      <p>Count:{this.state.count}</p>
      <button onClick={this.handleInc.bind(this)}>Increment</button>
      <button onClick={this.handleDec.bind(this)}>Decrement</button>
      </>
    )
  }
}
export default Count;