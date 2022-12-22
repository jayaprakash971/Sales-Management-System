import React, { useState } from 'react'
import propTypes from 'prop-types'
import { getByTestId } from '@testing-library/react';


const EachOrder = (props) => {

    const {order} = props;
 
   return (
            <tr>
                
                <td>{order.sid}</td>
                <td>{order.pid}</td>
                <td>{order.sale_date}</td>
		    </tr>

  )
}
EachOrder.propsTypes = {
  orderList: propTypes.array,
}
EachOrder.defaultProps = {
  orderList:[],
};
export default EachOrder

