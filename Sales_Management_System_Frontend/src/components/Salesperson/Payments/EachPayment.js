import React, { useState } from 'react'
import propTypes from 'prop-types'
import { getByTestId } from '@testing-library/react';


const EachPayment = (props) => {

    const {payment} = props;

   return (
            <tr>
                
                
                <td>{payment.month}</td>
                <td>{payment.year}</td>
                <td>{payment.monthlycommision}</td>
                <td>{payment.monthlysales}</td>
                
               
		    </tr>

  )
}
EachPayment.propsTypes = {
  paymentList: propTypes.array,
}
EachPayment.defaultProps = {
  paymentList:[],
};
export default EachPayment

