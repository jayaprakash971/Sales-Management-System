import React, { useEffect, useState } from 'react'
import "./locationquota.css"
import axios from 'axios'
import { useLocation } from 'react-router-dom';



const LocationQuota = ({navbarRefresh}) => {
    


    const [locationQuota,setLocationQuota]=useState([]);

    useEffect( () => {
		const getLocationQuota = async(e) => {
			await axios.get('http://localhost:8080/locationquota/getall').then(
			    res => {
			        setLocationQuota(res.data);
                    
			    }
			).catch(
			    err => {
			        console.log("error");
			    }
			)
            console.log(locationQuota);
		}
		
		getLocationQuota()
		navbarRefresh()
	} , [] )



		//add product
		const [sno,setSno]=useState(0);
		const [location,setLocation]=useState('');
		const [quota,setQuota]=useState(0);

		const locationQuotaObj = {
            s_no: sno, 
            location: location, 
            quota: quota
        }

		const addLocationQuota = async(e) => {
            console.log("addlocationquota");
			await axios.post('http://localhost:8080/locationquota/add',locationQuotaObj).then(
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

		const edit = (locationQuotaObj) =>
		{
			setUsno(locationQuotaObj.s_no);
            setULocation(locationQuotaObj.location);
            setUQuota(locationQuotaObj.quota);
		}

        const [Usno,setUsno]=useState(0);
		const [Ulocation,setULocation]=useState('');
		const [Uquota,setUQuota]=useState(0);

		const locationQuotaUpdateObj=
		{
			s_no : Usno,
			location : Ulocation,
			quota : Uquota
		}
		
		const updateLocationQuota = async(e) => {
		
			await axios.put('http://localhost:8080/locationquota/update',locationQuotaUpdateObj).then(
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
		let DLocation = 0;
		const getID = (location) =>
		{
			DLocation = location;
			console.log(DLocation);
		}
		const deleteLocationQuota = async(e) => {
		
			await axios.delete('http://localhost:8080/locationquota/delete/'+DLocation).then(
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
						<h2>Manage <b>LocationQuota</b></h2>
					</div>
					<div class="col-sm-6">
						<a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add Location Quota</span></a>						
					</div>
				</div>
			</div>
			<table class="table table-striped table-hover">
				<thead>
					<tr>
                        <th>Sno</th>
						<th>Location</th>
						<th>Quota</th>
                        <th>Actions</th>
					</tr>
				</thead>
				<tbody>		
                    {
                        locationQuota.map( (obj) => {
                        return( 
                            <tr key={obj.s_no}>
                
                                <td>{obj.s_no}</td>
                                <td>{obj.location}</td>
                                <td>{obj.quota}</td>
                                <td>
                                    <a href="#editEmployeeModal" class="edit" data-toggle="modal" onClick={() => { edit(obj) }}><i class="material-icons" data-toggle="tooltip" title="Edit" >&#xE254;</i></a>
                                    <a href="#deleteEmployeeModal" class="delete" data-toggle="modal" onClick={() => { getID(obj.location) }} ><i class="material-icons" data-toggle="tooltip" title="Delete" >&#xE872;</i></a>
                                </td>
                            </tr>
                        )
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
			<form onSubmit={addLocationQuota}>
				<div class="modal-header">						
					<h4 class="modal-title">Add Location Quota</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<div class="form-group">
						<label>Location</label>
						<input type="text" class="form-control" onChange={(e) => setLocation(e.target.value)} required/>
					</div>
					<div class="form-group">
						<label>Quota</label>
						<input type="number" class="form-control" onChange={(e) => setQuota(e.target.value)} required/>
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
			<form onSubmit={updateLocationQuota}>
				<div class="modal-header">						
					<h4 class="modal-title">Edit Location Quota Details</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">		
					<div class="form-group">
						<label>Sno</label>
						<input type="text" class="form-control" value={Usno}  />
					</div>			
					<div class="form-group">
						<label>Location</label>
						<input type="text" class="form-control" value={Ulocation} onChange={(e) => setULocation(e.target.value)} required/>
					</div>
					<div class="form-group">
						<label>Quota</label>
						<input type="number" class="form-control" value={Uquota} onChange={(e) => setUQuota(e.target.value)} required/>
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
			<form onSubmit={deleteLocationQuota}>
				<div class="modal-header">						
					<h4 class="modal-title">Delete Location Quota</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<p>Are you sure you want to delete this Location Quota?</p>
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

export default LocationQuota