import React, { Component } from 'react'
import queryString from 'query-string'

export default class product extends Component {

    getString = () =>{
        const string = this.props.location.search;
        console.log(string)
        console.log("hala bad az estefade az queryString")
        const result = queryString.parse(string);
        console.log(result)
    }

  render() {
    return (
        <>
      <div>this is product {this.props.match.params.id} </div>
      <p>this is a query srting {this.props.location.search}</p>
      <button onClick={this.getString} >to get query string</button>
      </>
    )
  }
}
