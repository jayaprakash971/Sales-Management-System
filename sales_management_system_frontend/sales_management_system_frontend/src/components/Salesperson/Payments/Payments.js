import React, { useEffect, useState } from 'react'

import EachPayment from './EachPayment.js'
import "./payments.css"
import axios from 'axios'



const Payments = ({navbarRefresh}) => {
    


    const [payments,setPayments]=useState([]);
    let SID=localStorage.getItem("id");
    
    useEffect( () => {
        console.log("SID="+SID);
		// const getPayment = async(e) => {
		// 	const result = await fetch('http://localhost:8080/comissionOfAllSids/getallofsid/'+SID);
		// 	const paymentsArray = await result.json()
		// 	setPayments(paymentsArray);
		// 	console.log(payments);
			
		// }
		const getPayment = async(e) => {
		
			await axios.get('http://localhost:8080/comissionOfAllSids/getallofsid/'+SID).then(
			    res => {
			        setPayments(res.data);
					
			        console.log(res.data);
			    }
			).catch(
			    err => {
			        console.log("error");
			    }
			)
			    
		}
		console.log("length="+payments)
		getPayment()
	navbarRefresh()} , [] )




  return (
    <>
    <div class="container-xl">
	<div class="table-responsive">
		<div class="table-wrapper">
			<div class="table-title">
				<div class="row">
					<div class="col-sm-6">
						<h2> <b>Payments</b></h2>
					</div>

				</div>
			</div>
			<table class="table table-striped table-hover">
				<thead>
					<tr>
                        <th>month</th>
						<th>year</th>
						<th>comission</th>
						<th>sales</th>
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
