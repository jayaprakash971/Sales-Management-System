import React, { useState } from 'react'
import propTypes from 'prop-types'
import { getByTestId } from '@testing-library/react';


const EachSalesperson = (props) => {

    const {salesperson} = props;
    const { getID } = props; 
    const {edit } = props;
   return (
            <tr>
                
                <td>{salesperson.sid}</td>
                <td>{salesperson.sname}</td>
                <td>{salesperson.semail}</td>
                <td>{salesperson.slevel}</td>
                <td>{salesperson.slocation}</td>
                <td>{salesperson.spassword}</td>
                <td>{salesperson.sphone}</td>
                <td>
                    <a href="#editEmployeeModal" class="edit" data-toggle="modal" onClick={() => { edit(salesperson) }}><i class="material-icons" data-toggle="tooltip" title="Edit" >&#xE254;</i></a>
                    <a href="#deleteEmployeeModal" class="delete" data-toggle="modal" onClick={() => { getID(salesperson.sid) }} ><i class="material-icons" data-toggle="tooltip" title="Delete" >&#xE872;</i></a>
                </td>
		    </tr>

  )
}
EachSalesperson.propsTypes = {
  salespersonList: propTypes.array,
}
EachSalesperson.defaultProps = {
  salespersonList:[],
};
export default EachSalesperson

