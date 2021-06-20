import React, { Component } from 'react';

import ProductRow from '../ProductRow/ProductRow';
import SearchBar from '../SearchBar/SearchBar';
import "./FilterableProductTable.css"

class FilterableProductTable extends Component{

  constructor(props){
    super(props)
    this.state = {
      products: this.props.products,
      searchArray: this.props.products,
    }
  }

  searchProductQuery = (value) => {
    
    const { products } = this.state;
    const searchProduct = [...products].filter((item) =>
      item.name.toLowerCase().includes(value)
    );

    return this.setState({
      searchArray: searchProduct,
    });
  };

  render(){
    const { products, searchArray } = this.state
    console.log("table", this.state.searchArray)
    return(
      <>
      < SearchBar search={this.searchProductQuery}/> 

     <div className="table_container">
       
       <table  >
       <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          </thead>  
          {searchArray.map((item, index) => {
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
     </>
    )
  }
}

export default FilterableProductTable;