import { Component } from "react";

class FirstComponent extends Component{
constructor(){
  super();
  this.state={isError:false};
}
componentDidMount(){
    console.log("mount")
}
componentWillUnmount(){
    console.log("unmount")
}
componentDidUpdate(){
    console.log("update")
}

componentDidCatch(){
  this.setState({isError:true});
  console.log("Error detected")
}

  render(){
    return <>
    {this.state.isError?<h1>Error detected</h1> : this.props.children}
    </>
  }
}
export  default FirstComponent;