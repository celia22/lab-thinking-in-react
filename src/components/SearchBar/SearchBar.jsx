import React, { Component } from 'react';

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
      <div>
        <h4>Search</h4>
        <input type="text" label="text" name="value"  value={this.state.query} onChange={this.handleChange}/>
        <div>
          <input type="checkbox" label="checkbox"  onChange={this.handleState}/> <p>Only show products on stock</p>
        </div>
      </div>
    )
  }
}

export default SearchBar;