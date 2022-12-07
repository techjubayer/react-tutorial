import React, { Component } from "react";

export default class ComponetDid extends Component {
  constructor() {
    super();
    console.log("ComponetDid: constractor called");
    this.state = {
      checkCount: 0,
    };
  }

  //   Default Methods---------------------START
  componentDidMount() {
    //This method called only once when the render method called
    console.log(
      "ComponetDid: componentDidMount called, recomendent for call api"
    );
  }
 

  shouldComponentUpdate() {
      //This method automatically called whenever any stare or props udpate,
    console.log("ComponetDid: shouldComponentUpdate called");
    console.log("checkCount: " + this.state.checkCount);
    return this.state.checkCount < 2;
  }

  //preSanpShot - beDefault this variable is undefine
  componentDidUpdate(prePops, preState, preSanpShot) {
    //This method called if  shouldComponentUpdate method returns true otherwise not
    console.log("ComponetDid: componentDidUpdate called");
  }
  componentWillUnmount(){
    //This method automatically called when any component will remove from the page
    console.log("Call when the componet remove from the page")
  }
  //   Default Methods---------------------END
  render() {
    console.log("ComponetDid: render called");
    return (
      <div
        className={`shadow rounded bg-${this.props.mode} text-${
          this.props.mode === "dark" ? "light" : "dark"
        } border p-4 mt-5`}
      >
        <h2 className='text-center'>
          componetDidMount() and componentDidUpdate()
        </h2>
        <h5 className='text-center'>{this.state.checkCount}</h5>
        <button
          onClick={() =>
            this.setState({ checkCount: this.state.checkCount + 1 })
          }
        >
          Update
        </button>
      </div>
    );
  }
}
