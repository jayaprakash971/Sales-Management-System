import React, { useEffect, useState } from 'react'
import "./EachProduct.js"
import EachProduct from './EachProduct.js'
import "./products.css"
import axios from 'axios'



const Products = ({navbarRefresh}) => {
    


    const [products,setProducts]=useState([]);

    useEffect( () => {
		const getProduct = async(e) => {
			const result = await fetch('http://localhost:8080/products/getall');
			const productsArray = await result.json()
			setProducts(productsArray);
			console.log("length="+products.length)
			
		}
		
		getProduct()
		navbarRefresh()} , [] )

  return (
    <>
    <div class="container-xl">
	<div class="table-responsive">
		<div class="table-wrapper">
			<div class="table-title">
				<div class="row">
					<div class="col-sm-6">
						<h2><b>Products</b></h2>
					</div>
					
				</div>
			</div>
			<table class="table table-striped table-hover">
				<thead>
					<tr>
                        <th>ProductID</th>
						<th>Product Name</th>
						<th>Product Cost</th>
						<th>Product Type</th>
						<th>Manufacturing date</th>
						
					</tr>
				</thead>
				<tbody>		
                
                    {console.log("new thop="+products.length)}

                    {
                        products.map( (product) => {
                        return( <EachProduct product={product} />)
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

export default Products
