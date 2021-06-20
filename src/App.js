import React, { Component } from 'react';
import jsondata from './data.json';
import './App.css';

import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      initialProducts: [...jsondata.data],
      searchArray: [...jsondata.data],
    };
  }

  searchProductQuery = (value) => {
    console.log('value', value);
    const { initialProducts } = this.state;
    const searchProduct = [...initialProducts].filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    return this.setState({
      searchArray: searchProduct,
    });
  };

  render() {
    const { searchArray } = this.state;
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar search={this.searchProductQuery} />
        <FilterableProductTable products={searchArray} />
      </div>
    );
  }
}

export default App;
