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
                <td>
                    <a href="#editEmployeeModal" class="edit" data-toggle="modal" onClick={() => { edit(product) }}><i class="material-icons" data-toggle="tooltip" title="Edit" >&#xE254;</i></a>
                    <a href="#deleteEmployeeModal" class="delete" data-toggle="modal" onClick={() => { getID(product.pid) }} ><i class="material-icons" data-toggle="tooltip" title="Delete" >&#xE872;</i></a>
                </td>
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

