import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context';

export class Products extends Component {

  static contextType=DataContext;
  render() {
    const {products} =this.context;
    return (
      <div id="product">
     <h1>{DataContext}</h1>
        </div>
    )
  }
}

export default Products


/*
   {
        products.map(product =>(
          <div className="card" key={product._id}>
            <Link to={`/product/${product._id}`}> 
             
              </Link>
              <div className='content'>
                <h3>
                  <Link to={`/product/${product._id}`}>{product.title}</Link>
                  <h1></h1>
                </h3>
                </div>
          </div>
        ))}
*/