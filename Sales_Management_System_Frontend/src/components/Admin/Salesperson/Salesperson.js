import React, { useEffect, useState } from 'react'

import EachSalesperson  from './EachSalesperson.js'
import "./salesperson.css"
import axios from 'axios'



const Salesperson = ({navbarRefresh}) => {
    


    const [salesperson,setSalesperson]=useState([]);

    useEffect( () => {
		const getSalesperson = async(e) => {
			const result = await fetch('http://localhost:8080/salesperson/getall');
			const SalespersonArray = await result.json()
			setSalesperson(SalespersonArray);
			console.log("length="+salesperson.length)
			// await axios.get('http://localhost:8080/saleperson/getall').then(
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
		
		getSalesperson()
	navbarRefresh()} , [] )



		//add product
		const [salespersonId,setSalespersonId]=useState(0);
		const [salespersonEmail,setSalespersonEmail]=useState('');
		const [salespersonLevel,setSalespersonLevel]=useState(0);
		const [salespersonLocation,setSalespersonLocation]=useState('');
		const [salespersonName,setSalespersonName]=useState('');
        const [salespersonPassword,setSalespersonPassword]=useState('');
        const [salespersonPhone,setSalespersonPhone]=useState('');


		const salespersonObj=
		{
            sid : salespersonId,
            semail : salespersonEmail,
			slevel : salespersonLevel,
			slocation : salespersonLocation,
			sname : salespersonName,
			spassword : salespersonPassword,
            sphone : salespersonPhone,
		}
		const addSalesperson = async(e) => {
		
			await axios.post('http://localhost:8080/salesperson/add',salespersonObj).then(
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

		const edit = (salesperson) =>
		{
			
			setUSalespersonId(salesperson.sid);
			setUSalespersonEmail(salesperson.semail);
			setUSalespersonLevel(salesperson.slevel);
			setUSalespersonLocation(salesperson.slocation);
			setUSalespersonName(salesperson.sname);
			setUSalespersonPassword(salesperson.spassword);
			setUSalespersonPhone(salesperson.sphone);
		}
		const [UsalespersonId,setUSalespersonId]=useState(0);
		const [UsalespersonEmail,setUSalespersonEmail]=useState('');
		const [UsalespersonLevel,setUSalespersonLevel]=useState(0);
		const [UsalespersonLocation,setUSalespersonLocation]=useState('');
		const [UsalespersonName,setUSalespersonName]=useState('');
        const [UsalespersonPassword,setUSalespersonPassword]=useState('');
        const [UsalespersonPhone,setUSalespersonPhone]=useState('');


		const UsalespersonObj=
		{
            sid : UsalespersonId,
            semail : UsalespersonEmail,
			slevel : UsalespersonLevel,
			slocation : UsalespersonLocation,
			sname : UsalespersonName,
			spassword : UsalespersonPassword,
            sphone : UsalespersonPhone,
		}
		
		const updateSalesperson = async(e) => {
		
			await axios.put('http://localhost:8080/salesperson/update',UsalespersonObj).then(
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
		let DSalespersonId = 0;
		const getID = (sid) =>
		{
			DSalespersonId = sid;
			console.log(DSalespersonId);
		}
		const deleteSalesperson = async(e) => {
		
			await axios.delete('http://localhost:8080/salesperson/delete/'+DSalespersonId).then(
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
						<h2>Manage <b>Salespersons</b></h2>
					</div>
					<div class="col-sm-6">
						<a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New salesperson</span></a>						
					</div>
				</div>
			</div>
			<table class="table table-striped table-hover">
				<thead>
					<tr>
                        <th>Salesperson ID</th>
						<th>Salesperson Name</th>
						<th>Salesperson email</th>
						<th>Salesperson Level</th>
						<th>Salesperson Location</th>
						<th>Salesperson password</th>
						<th>Salesperson phone</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>		
                
                 {console.log("ghxdhsadlfdsyfsrkhffcasghfvfshkv")}

                    {
                        salesperson.map( (salep) => {
                        return( <EachSalesperson key={salep.sid} salesperson={salep} getID={getID} edit={edit}/>)
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
			<form onSubmit={addSalesperson}>
				<div class="modal-header">						
					<h4 class="modal-title">Add Salesperson</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<div class="form-group">
						<label>Salesperson Name</label>
						<input type="text" class="form-control" onChange={(e) => setSalespersonName(e.target.value)} required/>
					</div>
					<div class="form-group">
						<label>Salesperson email</label>
						<input type="email" class="form-control" onChange={(e) => setSalespersonEmail(e.target.value)} required/>
					</div>
					<div class="form-group">
						<label>Salesperson Level</label>
						<input type="number" class="form-control" onChange={(e) => setSalespersonLevel(e.target.value)} required />
					</div>
					<div class="form-group">
						<label>Salesperson password</label>
						<input type="password" class="form-control" onChange={(e) => setSalespersonPassword(e.target.value)} required/>
					</div>		
					<div class="form-group">
						<label>Salesperson Location</label>
						<input type="text" class="form-control" onChange={(e) => setSalespersonLocation(e.target.value)} required/>
					</div>		
					<div class="form-group">
						<label>Salesperson Phonenumber</label>
						<input type="text" class="form-control" onChange={(e) => setSalespersonPhone(e.target.value)} required/>
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
			<form onSubmit={updateSalesperson}>
				<div class="modal-header">						
					<h4 class="modal-title">Edit Salesperson Details</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">		
					<div class="form-group">
						<label>Salesperson Id</label>
						<input type="text" class="form-control" value={UsalespersonId}  />
					</div>			
					<div class="form-group">
						<label>Salesperson Name</label>
						<input type="text" class="form-control" value={UsalespersonName} onChange={(e) => setUSalespersonName(e.target.value)} required />
					</div>
					<div class="form-group">
						<label>Saleperson email</label>
						<input type="email" class="form-control" value={UsalespersonEmail} onChange={(e) => setUSalespersonEmail(e.target.value)} required />
					</div>
					<div class="form-group" >
						<label>Salesperson password</label>
						<input type="password" class="form-control" value={UsalespersonPassword} />
					</div>
					<div class="form-group">
						<label>Saleperson Level</label>
						<input type="number" class="form-control" value={UsalespersonLevel} onChange={(e) => setUSalespersonLevel(e.target.value)} required />
					</div>
					<div class="form-group" >
						<label>Salesperson Location</label>
						<input type="text" class="form-control" value={UsalespersonLocation} onChange={(e) => setUSalespersonLocation(e.target.value)} required/>
					</div>	
					<div class="form-group" >
						<label>Salesperson Phone number</label>
						<input type="text" class="form-control" value={UsalespersonPhone} onChange={(e) => setUSalespersonPhone(e.target.value)} required/>
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
			<form onSubmit={deleteSalesperson}>
				<div class="modal-header">						
					<h4 class="modal-title">Delete Salesperson</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<p>Are you sure you want to delete this Salesperson record?</p>
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

export default Salesperson
