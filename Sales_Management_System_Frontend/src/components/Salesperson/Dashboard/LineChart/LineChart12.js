import axios from 'axios';
import React, { Component } from 'react';
import CanvasJSReact from '../../../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class LineChart extends Component {
	constructor()
	{
		super();
		this.state={
			DataPoints : [],
			sales : [],
		}
	}
	componentDidMount() {
        //window.addEventListener('onbeforeunload', this.updateData())
		this.updateData();
    }

    
	updateData()
		{
			
			const getSalesForDay= async(sid,year,month,day) => {
		
				await axios.get('http://localhost:8080/salelineitems/getsalesforday/'+sid+'/'+year+'-'+month+'-'+day).then(
					res => {
						
						this.state.sales.push(res.data);
						console.log("lengthaxios="+res.data);
					}
				).catch(
					err => {
						console.log("error");
					}
				)

				.finally(() => {
                    this.state.DataPoints.push(
						{
							x: this.state.sales.length,
							y: this.state.sales[this.state.sales.length-1],
						}
					)
					console.log(this.state.DataPoints);
                });
				
			}

			let day=String(new Date().getDate()).padStart(2, '0');
			day = parseInt(day)
			console.log(Number(localStorage.getItem("id")),new Date().getFullYear(),new Date().getMonth(),day);
			for(var i=1;i<day;i++)
			{
				console.log("day"+i);
				getSalesForDay(Number(localStorage.getItem("id")),new Date().getFullYear(),new Date().getMonth()+1,i);
				console.log("length="+this.state.sales.length);
			}
			
			console("update="+this.state.DataPoints);

		}
		
	render() {
		const state = {
			monthList: ["January","February","March","April","May","June","July","August","September","October","November","December"],
			
		};
		
		
		 
  
		const options = {
			
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "Current Month Sales"
			},
			axisY: {
				title: "Sales",
				includeZero: false,
				suffix: "Rs"
			},
			axisX: {
				title: state.monthList[new Date().getMonth()],
				prefix: "",
				interval: 1
			},
			data: [{
				type: "line",
				toolTipContent: "Month {x}: {y}Rs",
				dataPoints: this.state.DataPoints,

			}]
		}
		
		
		return (
		<div class="container">
			<h1>bdjbdjc</h1>
			<h1>cxlndk{this.state.DataPoints}</h1>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default LineChart;   

