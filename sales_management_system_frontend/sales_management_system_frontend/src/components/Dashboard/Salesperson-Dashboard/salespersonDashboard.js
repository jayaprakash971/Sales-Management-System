import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from '../../Sidebar-Salesperson/Sidebar'
import Products from '../../Salesperson/Products/Products'
import Payments from '../../Salesperson/Payments/Payments'
import Orders from '../../Salesperson/Orders/Orders'
import Dashboard from '../../Salesperson/Dashboard/Dashboard'
const salespersonDashboard = ({navbarRefresh}) => {
  return (
    <div>
      <Sidebar/>
      <Routes>
          <Route path="/dashboard" element={<Dashboard navbarRefresh={navbarRefresh}/>} />
          <Route path="/products" element={<Products navbarRefresh={navbarRefresh}/>} />
          <Route path="/payments" element={<Payments navbarRefresh={navbarRefresh}/>} />
          <Route path="/orders" element={<Orders navbarRefresh={navbarRefresh}/>} />
      </Routes>
    </div>
  )
}

export default salespersonDashboard
