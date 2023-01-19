import React, { Component } from 'react'
import Products from './section/Products';
import Details from './section/Details'
import {Route,Routes} from 'react-router-dom';

export class Section extends Component {
  render() {
    return (
      <section>
        <Routes>
        <Route path="/product" element={<Products/>} exact />
        <Route path="/product/:id" element={<Details/>} />
        </Routes>
        </section>
    )
  }
}

export default Section