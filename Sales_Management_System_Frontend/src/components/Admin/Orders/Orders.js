import React, { useEffect, useState } from 'react'
import EachOrder from './EachOrder'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import "./orders.css"
import Papa from "papaparse"
import axios from 'axios'



const Orders = ({navbarRefresh}) => {
    
	const navigate = useNavigate();

    const [orders,setOrders]=useState([]);

    useEffect( () => {
		const getOrders = async(e) => {
			const result = await fetch('http://localhost:8080/salelineitems/getall');
			const ordersArray = await result.json()
			setOrders(ordersArray);
			console.log("length="+orders.length)
			
		}
		
		getOrders()
	navbarRefresh()} , [] )



	const [file, setFile] = useState("");
    const [fileData, setFiledata] = useState([]);

    const addCSV = () => {
        
         
            // If user clicks the parse button without
            // a file we show a error
            //if (!file) return setError("Enter a valid file");
     
            // Initialize a reader which allows user
            // to read any file or blob.
            const reader = new FileReader();
             
            // Event listener on reader when the file
            // loads, we parse it and set the data.
            reader.onload = async ({ target }) => {
                const csv = Papa.parse(target.result, { header: true });
                const parsedData = csv?.data;
                setFiledata(parsedData);
                //const columns = Object.keys(parsedData[0]);
                //setData(columns);
            };
            reader.readAsText(file);

            fileData.map((eachFileData) => {

                const addSaleLineItem = async(eachFileData) => {
                
                    await axios.post('http://localhost:8080/salelineitems/add', eachFileData).then(
                        res => {
                            console.log(res.data);
							navigate("/admin/orders");
                        }
                    ).catch(
                        err => {
                            console.log("error");
                        }
                    )
                    console.log("saf");
                }
                addSaleLineItem(eachFileData);
				
            })
			
			//window.location.reload();
			
    }

  return (
    <>
    <div class="container-xl">
	<div class="table-responsive">
		<div class="table-wrapper">
			<div class="table-title">
				<div class="row">
					<div class="col-sm-6">
						<h2>Manage <b>Orders</b></h2>
					</div>
					<div class="col-sm-6">
						<a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Upload</span></a>						
					</div>
				</div>
			</div>
			<table class="table table-striped table-hover">
				<thead>
					<tr>
                        <th>Salesperson Id</th>
						<th>Product Id</th>
						<th>Sale date</th>
					</tr>
				</thead>
				<tbody>		
                
                   

                    {
                        orders.map( (order) => {
                        return( <EachOrder order={order} />)
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
			<form onSubmit={addCSV}>
				<div class="modal-header">						
					<h4 class="modal-title">Add CSV File</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<div class="form-group">
						<label>CSV file</label>
						<input type="file" class="form-control" onChange={(e) => setFile(e.target.files[0])} />
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



    </>
  )
}

export default Orders
