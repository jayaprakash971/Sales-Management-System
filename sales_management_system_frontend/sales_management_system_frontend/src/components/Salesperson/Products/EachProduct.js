import React, { useState } from 'react'
import propTypes from 'prop-types'
import { getByTestId } from '@testing-library/react';


const EachProduct = (props) => {

    const {product} = props;
    const { getID } = props; 
    const {edit } = props;
   return (
            <tr>
                
                <td>{product.pid}</td>
                <td>{product.pname}</td>
                <td>{product.pcost}</td>
                <td>{product.ptype_int}</td>
                <td>{product.pmanu_date}</td>

		    </tr>

  )
}
EachProduct.propsTypes = {
  productList: propTypes.array,
}
EachProduct.defaultProps = {
  productList:[],
};
export default EachProduct

