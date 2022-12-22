import React, { useState } from 'react'
import propTypes from 'prop-types'
import { getByTestId } from '@testing-library/react';
import axios from 'axios';


const EachOrder = (props) => {

  const {order} = props;
  const {products} = props;

  const [producttype,setProducttype]=useState([])
  const getProductType = async(ptype_int) => {
		
    await axios.get('http://localhost:8080/producttypes/getproducttype/'+ptype_int).then(
        res => {
            
          setProducttype(res.data);
            console.log(res.data);
        }
    ).catch(
        err => {
            console.log("error");
        }
    )
        
  }
    
    var pname="";
    var pcost="";
    var ptype="";
  
    products.map(product =>{
      
      if(product.pid==order.pid)
      {
       getProductType(product.ptype_int);

        pname=product.pname;
        pcost=product.pcost;
        console.log(producttype.length);

      }
   
    })
  if(order.sid==localStorage.getItem("id"))
  {
   return (
            <tr>
                
                
                <td>{order.pid}</td>
                <td>{pname}</td>
                <td>{producttype.pro_type}</td>
                <td>{pcost}</td>

                <td>{order.sale_date}</td>
		    </tr>

  )
   }
}
EachOrder.propsTypes = {
  orderList: propTypes.array,
  productsList : propTypes.array,
}
EachOrder.defaultProps = {
  orderList:[],
  productsList:[],
};
export default EachOrder

