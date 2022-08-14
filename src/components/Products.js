import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Products extends Component {
  render() {
    return (
    <>
      <h1>Products</h1>
      <ul>
        <li><Link to="/Products/1" >product 1</Link></li>
        <li><Link to="/Products/2" >product 2</Link></li>
        <li><Link to="/Products/3" >product 3</Link></li>
        <li><Link to="/Products/4" >product 4</Link></li>
      </ul>
    </>
    )
  }
}
