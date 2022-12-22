
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from "../../Sidebar-Admin/Sidebar"
import Products from "../../Admin/Products/Products"
import Salesperson from '../../Admin/Salesperson/Salesperson';
import LocationQuota from '../../Admin/LocationQuota/LocationQuota'
import Payments  from '../../Admin/Payments/Payments';
import ComissionRules from '../../Admin/ComissionRules/ComissionRules';
import Orders from '../../Admin/Orders/Orders';



const adminDashboard = ({navbarRefresh}) => {
  return (
    
    <div>
      <Sidebar/>
      <Routes>
          
          <Route path="/orders" element={<Orders navbarRefresh={navbarRefresh}/>} />
          <Route path="/comissionrules" element={<ComissionRules navbarRefresh={navbarRefresh}/>} />
          <Route path="/payments" element={<Payments navbarRefresh={navbarRefresh}/>}/>
          <Route path="/locationquota" element={<LocationQuota navbarRefresh={navbarRefresh}/>} />
          <Route path="/salesperson" element={<Salesperson navbarRefresh={navbarRefresh}/>} />
          <Route path="/products" element={<Products navbarRefresh={navbarRefresh}/>} />
          
      </Routes>
    </div>
    

  )
}

export default adminDashboard
