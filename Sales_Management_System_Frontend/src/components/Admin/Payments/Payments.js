import React, { useEffect, useState } from 'react'

import EachPayment from './EachPayment.js'
import "./payments.css"
import axios from 'axios'
import { calculateNewValue } from '@testing-library/user-event/dist/utils/index.js'



const Payments = ({navbarRefresh}) => {
    


    const [payments,setPayments]=useState([]);

    useEffect( () => {
		const getPayments = async(e) => {
			const result = await fetch('http://localhost:8080/comissionOfAllSids/getall');
			const paymentsArray = await result.json()
			setPayments(paymentsArray);
			console.log("length="+payments.length)
			// await axios.get('http://localhost:8080/products/getall').then(
			//     res => {
			//         productsArray.push(...res.data);
			//         console.log(productsArray);
			//     }
			// ).catch(
			//     err => {
			//         console.log("error");
			//     }
			// )
			//     console.log("hksgsasvhdsffds");
			//     console.log(productsArray.length);
		}
		
		getPayments()
		navbarRefresh()
		} , [] )

	const calculate = async() =>{
			await axios.get('http://localhost:8080/comissionOfAllSids/calculate').then(
			    res => {
			        console.log(res.data);
			    }
			).catch(
			    err => {
			        console.log("error");
			    }
			)
	}

		

  return (
    <>
    <div class="container-xl">
	<div class="table-responsive">
		<div class="table-wrapper">
			<div class="table-title">
				<div class="row">
					<div class="col-sm-6">
						<h2>Manage <b>Payments</b></h2>
					</div>
					<div class="col-sm-6">
						<a href="/admin/payments" class="btn btn-success" data-toggle="modal" onClick={() => { calculate() }} ><i class="material-icons">&#xE147;</i> <span>Calculate</span></a>						
					</div>
				</div>
			</div>
			<table class="table table-striped table-hover">
				<thead>
					<tr>
                        <th>S.no.</th>
						<th>month</th>
						<th>Monthly comission</th>
						<th>Monthly Sales</th>
						<th>Salesperson ID</th>
                        <th>Year</th>
						
					</tr>
				</thead>
				<tbody>		
                    {
                        payments.map( (payment) => {
                        return( <EachPayment payment={payment} />)
						}
                        )
                    }
                </tbody>		
				
			</table>
			<div class="clearfix">
				<div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
				<ul class="pagination">
					<li class="page-item disabled"><a href="#">Previous</a></li>
					<li class="page-item"><a href="#" class="page-link">1</a></li>
					<li class="page-item"><a href="#" class="page-link">2</a></li>
					<li class="page-item active"><a href="#" class="page-link">3</a></li>
					<li class="page-item"><a href="#" class="page-link">4</a></li>
					<li class="page-item"><a href="#" class="page-link">5</a></li>
					<li class="page-item"><a href="#" class="page-link">Next</a></li>
				</ul>
			</div>
		</div>
	</div>        
</div>


    </>
  )
}

export default Payments
