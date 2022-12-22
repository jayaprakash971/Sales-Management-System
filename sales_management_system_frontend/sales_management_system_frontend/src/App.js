import Register from './components/Register/Register'
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar'
import AdminDashboard from './components/Dashboard/Admin-Dashboard/adminDashboard';
import SalespersonDashboard from './components/Dashboard/Salesperson-Dashboard/salespersonDashboard';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useRef} from 'react'

function App() {
  const NavbarRef = useRef(null);

  const navbarRefresh = () => {
    NavbarRef.current.refresh();
  }

  return (
    <Router>
      <div className="App">
        <Navbar ref={NavbarRef}/>
        <Routes>
        <Route path="/register" element={<Register/> } />
          <Route path="/login" element={<Login navbarRefresh={navbarRefresh}/> } />
          <Route path="/admin/*" element={<AdminDashboard navbarRefresh={navbarRefresh}/> } />
          <Route path="/salesperson/*" element={<SalespersonDashboard navbarRefresh={navbarRefresh}/> } />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
