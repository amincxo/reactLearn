import React, { Component } from "react";
import { Redirect, Route , Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from './components/HomePage'
import Blogs from './components/Blogs'
import Products from './components/Products'
import AboutUs from './components/AboutUs'
import product from './components/Product'
import NotFound from "./components/NotFound";

class App extends Component {

  render() {
    const name = "amin"
    return (
      <div>
        <Navbar />
        <div>
          <Switch >
            <Route path="/Products/:id" component={product} />
            <Route path="/Blogs" component={Blogs} />
            <Route path="/notfound" component={NotFound} />
            <Route path="/Products" render={(props)=><Products name={name}  />} />
            <Route path="/AboutUs" component={AboutUs} />
            <Redirect from="/amioni" to="blogs" />
            <Route exact path="/" component={HomePage} />
            <Redirect to="/notfound" />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;