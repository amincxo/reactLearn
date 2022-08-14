import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
          <ul>
            <li><Link to="/">Home page</Link></li>
            <li><Link to="/Blogs">Blogs</Link></li>
            <li><Link to="/Products">Products</Link></li>
            <li><Link to="/AboutUs">AboutUs</Link></li>
          </ul>
      </div>
    )
  }
}
