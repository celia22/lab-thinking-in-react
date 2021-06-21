import React from 'react';

import "./ProductRow.css"


const ProductRow = (props) =>{

  const name = props.name;
  const price = props.price;
  const stocked = props.stocked;
 
   return(      
        <table> 
        <tbody style={{color: stocked ?  'none' : 'red' }}>            
          <tr>
            <td className="item_container">{name}</td>
            <td className="item_container">{price}</td>
          </tr>   
        </tbody>      
       </table>
     
    )  
  }


export default ProductRow;