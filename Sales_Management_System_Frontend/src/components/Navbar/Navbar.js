import {Link, useNavigate} from 'react-router-dom'
import {useState, forwardRef, useImperativeHandle} from 'react'
import axios from 'axios';
import logo from './UseSMS.png';
import "./navbar.css"
const Navbar = forwardRef((props, ref) => {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');

  const updateUsername = async() => {
    const id = (localStorage.getItem('id'));
    console.log(id);
    if(id === null)
      setUsername("");
    else {
      await axios.get('http://localhost:8080/auth/username/'+id).then(
        res => {
          setUsername(res.data);
        }
      ).catch(
        err => {
          console.log("get username error");
        }
      )
    }
  }

  const logout = () => {
    localStorage.removeItem('id');
    updateUsername();
    navigate("/login");
  }

  useImperativeHandle(ref, () => ({
    refresh() {
      updateUsername();
      console.log("refresh Navbar");
    }
  }));

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div class="container">
        {/* <<img src={logo} className="App-logo" style={{width:"100px",height:"100px"}} alt="logo" /> */}
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <span class='nav-link active'>Sales Management</span>
            </li>
        </ul>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/">Home</Link>
        </li>
      </ul>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">

          {
          (() => {

          if(username === "")
            return (
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/login">Login</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/register">Register</Link>
                </li>
              </ul>
            )
          else
            return (
              <ul class="navbar-nav ms-auto">
                              <li class="nav-item">
                                <span class="nav-link">Hello, {username}</span>
                              </li>
                              <li class="nav-item">
                                <button class="nav-link" style={{backgroundColor: 'rgb(33, 37, 41)', border: 'none'}} onClick={logout}>Logout</button>
                              </li>
                            </ul>
            )
          })()
        }

      </div>
  </div>
</nav>
  )
});

export default Navbar
