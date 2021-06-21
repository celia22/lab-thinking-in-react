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
      inStock: [],
      checkbox: false,
      
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

  handleStock = (event) => {
    const { products } = this.state;
    const inStockArray = []
    products.map((item) => {
      if (item.stocked) {
        inStockArray.push(item)
      }
    })  

      return this.setState({
      inStock: inStockArray,
      checkbox: event,
    })  
  }

  render(){
    const {  searchArray, inStock, checkbox } = this.state
    console.log(this.state.checkbox)
    console.log("stock", inStock)
    
    return(
      <>
      < SearchBar search={this.searchProductQuery} check={this.handleStock}/> 

      {checkbox ? (
          <div className="table_container">  
            <div className="table_container_title">
              <h3>Name</h3>
              <h3>Price</h3>
            </div>          
             {inStock.map((item, index) => { 
               return(
                 <div className="table_items" key={index}>               
                    < ProductRow name={item.name}  stocked={item.stocked}/>
                    < ProductRow  price={item.price} stocked={item.stocked}/>
                </div>
               )              
             })}                     
        </div>
      ) : (
        <div className="table_container">  
            <div className="table_container_title">
              <h3>Name</h3>
              <h3>Price</h3>
            </div>          
             {searchArray.map((item, index) => { 
               return(
                 <div className="table_items" key={index}>               
                    < ProductRow name={item.name}  stocked={item.stocked}/>
                    < ProductRow  price={item.price} stocked={item.stocked}/>
                </div>
               )              
             })}                     
        </div>
      )} 
   
     </>
    )
  }
}

export default FilterableProductTable;