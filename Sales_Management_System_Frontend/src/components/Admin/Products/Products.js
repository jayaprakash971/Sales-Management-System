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



		//add product
		const [productId,setProductId]=useState(0);
		const [productName,setProductName]=useState('');
		const [productCost,setProductCost]=useState(0);
		const [productType,setProductType]=useState('');
		const [productManu,setProductManu]=useState('');

		const productObj=
		{
			pname : productName,
			pcost : productCost,
			ptype_int : productType,
			pmanu_date : productManu,
		}
		const addProduct = async(e) => {
		
			await axios.post('http://localhost:8080/products/addproduct',productObj).then(
			    res => {
			        
			        console.log(res.data);
			    }
			).catch(
			    err => {
			        console.log("error");
			    }
			)
			    
		}
    

		//updateProduct 

		const edit = (product) =>
		{
			var dt = new Date(product.pmanu_date);
			var date_new = (dt.getFullDate() + "-" + (dt.getMonth() + 1) + "-" + dt.getYear());
			setUProductId(product.pid);
			setUProductCost(product.pcost);
			setUProductName(product.pname);
			setUProductManu(date_new);
			setUProductType(product.ptype_int);
		}

		const [UproductId,setUProductId]=useState(0);
		const [UproductName,setUProductName]=useState('');
		const [UproductCost,setUProductCost]=useState(0);
		const [UproductType,setUProductType]=useState('');
		const [UproductManu,setUProductManu]=useState('');

		const productUpdateObj=
		{
			pid : UproductId,
			pname : UproductName,
			pcost : UproductCost,
			ptype_int : UproductType,
			pmanu_date : UproductManu,
		}
		
		const updateProduct = async(e) => {
		
			await axios.put('http://localhost:8080/products/updateproduct',productUpdateObj).then(
			    res => {
			        
			        console.log(res.data);
			    }
			).catch(
			    err => {
			        console.log("error");
			    }
			)
		}

		//deleteproduct
		let DProductId = 0;
		const getID = (pid) =>
		{
			DProductId = pid;
			console.log(DProductId);
		}
		const deleteProduct = async(e) => {
		
			await axios.delete('http://localhost:8080/products/delproduct/'+DProductId).then(
			    res => {
			        
			        console.log(res.data);
					console.log("DPROHKGDJ]="+DProductId);
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
						<h2>Manage <b>Products</b></h2>
					</div>
					<div class="col-sm-6">
						<a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New Product</span></a>						
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
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>		
                
                    {console.log("new thop="+products.length)}

                    {
                        products.map( (product) => {
                        return( <EachProduct product={product} getID={getID} edit={edit}/>)
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

<div id="addEmployeeModal" class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<form onSubmit={addProduct}>
				<div class="modal-header">						
					<h4 class="modal-title">Add Product</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<div class="form-group">
						<label>Product Name</label>
						<input type="text" class="form-control" onChange={(e) => setProductName(e.target.value)} required/>
					</div>
					<div class="form-group">
						<label>Product Cost</label>
						<input type="number" class="form-control" onChange={(e) => setProductCost(e.target.value)} required/>
					</div>
					<div class="form-group">
						<label>Product Type</label>
						<select class="form-control" onChange={(e) => setProductType(e.target.value)} required >
							<option value="2222">Two wheeler</option>
							<option value="3333">Three wheeler</option>
							<option value="4444">Four wheeler</option>
							<option value="5555">Commercial vehicle</option>
						</select>
					</div>
					<div class="form-group">
						<label>Manufacturing date</label>
						<input type="date" class="form-control" onChange={(e) => setProductManu(e.target.value)} required/>
					</div>					
				</div>
				<div class="modal-footer">
					<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
					<input type="submit" class="btn btn-success" value="Add"/>
				</div>
			</form>
		</div>
	</div>
</div>

<div id="editEmployeeModal" class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<form onSubmit={updateProduct}>
				<div class="modal-header">						
					<h4 class="modal-title">Edit Product Details</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">		
					<div class="form-group">
						<label>Product Id</label>
						<input type="text" class="form-control" value={UproductId}  />
					</div>			
					<div class="form-group">
						<label>Product Name</label>
						<input type="text" class="form-control" value={UproductName} onChange={(e) => setUProductName(e.target.value)} required/>
					</div>
					<div class="form-group">
						<label>Product Cost</label>
						<input type="number" class="form-control" value={UproductCost} onChange={(e) => setUProductCost(e.target.value)} required/>
					</div>
					<div class="form-group">
						<label>Product Type</label>
						<select class="form-control" value={UproductType} onChange={(e) => setUProductType(e.target.value)}required >
							<option value="2222">Two wheeler</option>
							<option value="3333">Three wheeler</option>
							<option value="4444">Four wheeler</option>
							<option value="5555">Commercial vehicle</option>
						</select>
					</div>
					<div class="form-group" >
						<label>Product Manufacturing date</label>
						<input type="date" class="form-control" value={UproductManu} onChange={(e) => setUProductManu(e.target.value)} required/>
					</div>					
				</div>
				<div class="modal-footer">
					<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
					<input type="submit" class="btn btn-info" value="Save"/>
				</div>
			</form>
		</div>
	</div>
</div>

<div id="deleteEmployeeModal" class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<form onSubmit={deleteProduct}>
				<div class="modal-header">						
					<h4 class="modal-title">Delete Product</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<p>Are you sure you want to delete this Product?</p>
					<p class="text-warning"><small>This action cannot be undone.</small></p>
				</div>
				<div class="modal-footer">
					<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
					<input type="submit" class="btn btn-danger" value="Delete"/>
				</div>
			</form>
		</div>
	</div>
</div>
    </>
  )
}

export default Products
