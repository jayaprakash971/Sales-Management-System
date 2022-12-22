import React, { useEffect } from 'react'
import LineChart from './LineChart/LineChart'
const Dashboard = ({navbarRefresh}) => {
    useEffect( () => {
		navbarRefresh()} , [] )
   
  return (
    <div>
      <LineChart/>
    </div>
  )
}

export default Dashboard
