import React, { useState } from 'react'
import propTypes from 'prop-types'
import { getByTestId } from '@testing-library/react';


const EachComissionRules = (props) => {

    const {comissionrule} = props;
    const { getID } = props; 
    const {edit } = props;
   return (
            <tr>
                
               
                <td>{comissionrule.comissionamount}</td>
                <td>{comissionrule.level}</td>

                <td>
                    <a href="#editEmployeeModal" class="edit" data-toggle="modal" onClick={() => { edit(comissionrule) }}><i class="material-icons" data-toggle="tooltip" title="Edit" >&#xE254;</i></a>
                    <a href="#deleteEmployeeModal" class="delete" data-toggle="modal" onClick={() => { getID(comissionrule.level) }} ><i class="material-icons" data-toggle="tooltip" title="Delete" >&#xE872;</i></a>
                </td>
		    </tr>

  )
}
EachComissionRules.propsTypes = {
  ComissionRulesList: propTypes.array,
}
EachComissionRules.defaultProps = {
  ComissionRulesList:[],
};
export default EachComissionRules

