import React from 'react';

import "./ProductRow.css"


const ProductRow = (props) =>{

  const name = props.name;
  const price = props.price;
  const stocked = props.stocked;
  console.log("row", stocked)
 
   return(      
    <div>
       <p className="item_container">{name}</p>
       <p className="item_container">{price}</p>
    </div>        

    )  
  }


export default ProductRow;