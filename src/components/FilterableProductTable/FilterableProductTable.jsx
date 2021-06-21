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

      {!checkbox ? (
          <div className="table_container_stock">
       
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
      ) : (
        <div className="table_container_all">
       
       <table  >
       <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          </thead>  
          {inStock.map((item, index) => { 
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
      )} 
   
     </>
    )
  }
}

export default FilterableProductTable;