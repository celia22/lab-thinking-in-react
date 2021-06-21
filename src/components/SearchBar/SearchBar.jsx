import React, { Component } from 'react';

import "./SearchBar.css"

class SearchBar extends Component{

  constructor(props) {
    super(props)
    this.state = {
      query: "",  
     checkbox: false,    
   }    
  }
 

  handleChange = (x) => {
    this.setState({ query: x.target.value });  
    this.props.search(x.target.value)
  }

  handleState = (event) => {     
    this.setState({ checkbox: !this.state.checkbox})  
    this.props.check(event.target.checked)
  }


  render(){
    
    return(
      <div className="searchbar_container">
            <input className="searchbar" type="text" label="text" name="value" placeholder="Search your products" value={this.state.query} onChange={this.handleChange}/>
        <div className="checkbox_container">
          <input type="checkbox" label="checkbox"  onChange={this.handleState}/> 
          <p>Only show products on stock</p>           
        </div>
      </div>
    )
  }
}

export default SearchBar;