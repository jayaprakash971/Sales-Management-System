import React, { useEffect, useState } from 'react'
import EachOrder from './EachOrder'
import "./orders.css"
import axios from 'axios'



const Orders = ({navbarRefresh}) => {
    


    const [orders,setOrders]=useState([]);

	const [products,setProducts]=useState([]);

    useEffect( () => {
		const getOrders = async(e) => {
			const result = await fetch('http://localhost:8080/salelineitems/getall');
			const ordersArray = await result.json()
			setOrders(ordersArray);
			console.log("length="+orders.length)
			
		}
		const getProducts = async(e) => {
			const result = await fetch('http://localhost:8080/products/getall');
			const productsArray = await result.json()
			setProducts(productsArray);
			console.log("length="+products.length)
			
		}
		
		getProducts()
		getOrders()
	navbarRefresh()} , [] )


  return (
    <>
    <div class="container-xl">
	<div class="table-responsive">
		<div class="table-wrapper">
			<div class="table-title">
				<div class="row">
					<div class="col-sm-6">
						<h2><b>Orders</b></h2>
					</div>
					
				</div>
			</div>
			<table class="table table-striped table-hover">
				<thead>
					<tr>
						<th>Product Id</th>
						<th>Product name</th>
						<th>Product Type</th>
						<th>Product cost</th>
						<th>Sale date</th>
					</tr>
				</thead>
				<tbody>		
                
                   

                    {
                        orders.map( (order) => {
							
                        		return( <EachOrder order={order} products={products} />)
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

export default Orders
