import React, { useEffect, useState } from 'react'

import EachComissionRule from './EachComissionRules.js'
import "./comissionrules.css"
import axios from 'axios'
import EachComissionRules from './EachComissionRules.js'



const ComissionRules = ({navbarRefresh}) => {
    
    const [comissionrules,setComissionrules]=useState([]);

    useEffect( () => {
		const getComissionrules = async(e) => {
			const result = await fetch('http://localhost:8080/comissionrules/getall');
			const ComissionArray = await result.json()
			setComissionrules(ComissionArray);
			console.log("length="+comissionrules.length)
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
		
		getComissionrules()
		navbarRefresh()
		} , [] )



		//add comission rule
		const [comissionSNumber,setComissionSNumber]=useState(0);
		const [comissionAmount,setComissionAmount]=useState(0);
		const [comissionLevel,setComissionLevel]=useState(0);
	

		const comissionObj=
		{
			s_number : comissionSNumber,
			comissionamount : comissionAmount,
			level : comissionLevel,
		
		}
		const addComissionrule = async(e) => {
		
			await axios.post('http://localhost:8080/comissionrules/add',comissionObj).then(
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

		const edit = (comissionrule) =>
		{
			
			setUComissionSNumber(comissionrule.s_number);
			setUComissionAmount(comissionrule.comissionamount);
			setUComissionLevel(comissionrule.level);

		}

        const [UcomissionSNumber,setUComissionSNumber]=useState(0);
		const [UcomissionAmount,setUComissionAmount]=useState(0);
		const [UcomissionLevel,setUComissionLevel]=useState(0);

		const UcomissionObj=
		{
			s_number : UcomissionSNumber,
			comission_amount : UcomissionAmount,
			level : UcomissionLevel,
		
		}
		
		const updateComissionrule = async(e) => {
		
			await axios.put('http://localhost:8080/comissionrules/update',UcomissionObj).then(
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
		let Dcomissionlevel = 0;
		const getID = (level) =>
		{
			Dcomissionlevel = level;
			console.log(Dcomissionlevel);
		}
		const deleteComissionrule = async(e) => {
		
			await axios.delete('http://localhost:8080/comissionrules/delete/'+Dcomissionlevel).then(
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
						<h2>Manage <b>Comission Rules</b></h2>
					</div>
					<div class="col-sm-6">
						<a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New Comission Rule</span></a>						
					</div>
				</div>
			</div>
			<table class="table table-striped table-hover">
				<thead>
					<tr>
                        
						<th>comission amount</th>
						<th>comission level</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>		
                
                    
                    {console.log("jvhadjcvvsfsdfhdsjc")}
                    {
                        comissionrules.map( (comissionrule) => {
							console.log(comissionrule.comissionamount)
                        return( <EachComissionRules comissionrule={comissionrule} getID={getID} edit={edit}/>)
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
			<form onSubmit={addComissionrule}>
				<div class="modal-header">						
					<h4 class="modal-title">Add Comission Rule</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<div class="form-group">
						<label>comission amount</label>
						<input type="text" class="form-control" onChange={(e) => setComissionAmount(e.target.value)} required/>
					</div>
					<div class="form-group">
						<label>Product Level</label>
						<input type="number" class="form-control" onChange={(e) => setComissionLevel(e.target.value)} required/>
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
			<form onSubmit={updateComissionrule}>
				<div class="modal-header">						
					<h4 class="modal-title">Edit Product Details</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">		
					<div class="form-group">
						<label>Comission s_number</label>
						<input type="text" class="form-control" value={UcomissionSNumber}  />
					</div>			
					<div class="form-group">
						<label>Comission amount</label>
						<input type="text" class="form-control" value={UcomissionAmount} onChange={(e) => setUComissionAmount(e.target.value)} required/>
					</div>
					<div class="form-group">
						<label>comission Level</label>
						<input type="number" class="form-control" value={UcomissionLevel} onChange={(e) => setUComissionLevel(e.target.value)} required/>
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
			<form onSubmit={deleteComissionrule}>
				<div class="modal-header">						
					<h4 class="modal-title">Delete comissionrule</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<p>Are you sure you want to delete this Comission rule?</p>
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

export default ComissionRules
