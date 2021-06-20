import React, { Component } from 'react';

import ProductRow from '../ProductRow/ProductRow';
import "./FilterableProductTable.css"

class FilterableProductTable extends Component{

  constructor(props){
    super(props)
    this.state = {
      products: this.props.products,
    }
  }

  render(){
    const { products } = this.state
    return(
     <div className="table_container">
       
       <table  >
       <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          </thead>  
          {products.map((item, index) => {
            return(
              <tbody key={index}>
            <tr >
              < ProductRow name={item.name} price={item.price} stocked={item.stocked}/>
            </tr> 
            </tbody>  
            )              
          })} 
                    
        </table>
     </div>
    )
  }
}

export default FilterableProductTable;