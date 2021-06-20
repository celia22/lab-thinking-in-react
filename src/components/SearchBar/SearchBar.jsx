import React, { Component } from 'react';

class SearchBar extends Component{

  constructor(props) {
    super(props)
    this.state = {
      query: "",
   }    
  }
 

  handleChange = (x) => {
    this.setState({ query: x.target.value });  
    this.props.search(x.target.value)
  }



  render(){
    return(
      <div>
        <h4>Search</h4>
        <input type="text" label="text" name="value"  value={this.state.query} onChange={this.handleChange}/>
        <div>
          <input type="checkbox" label="checkbox"/> <p>Only show products on stock</p>
        </div>
      </div>
    )
  }
}

export default SearchBar;