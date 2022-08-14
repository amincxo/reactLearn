import React, { Component } from 'react'

export default class AboutUs extends Component {

  loginHandler = () => {
    this.props.history.replace("/Products")
  }
  
  render() {
    return (
    <>
      <h1>AboutUs</h1>
      <button onClick={this.loginHandler} >Log in</button>
    </>
    )
  }
}
