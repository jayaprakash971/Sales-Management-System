import {Link, useNavigate} from 'react-router-dom'
import './login.css'
import {useState, useRef} from 'react'
import axios from 'axios'

const Login = ({navbarRefresh}) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = async(e) => {
        e.preventDefault()

        if(!email || !password) {
            alert("please enter complete details");
            return;
        }

        const user = {
            semail: email,
            spassword: password
        }

        await axios.post('http://localhost:8080/auth/login', user).then(
            res => {
                if(res.data === "") {
                    alert("Invalid Credentials");
                }
                else {
                    localStorage.setItem('id', res.data.sid);
                    navbarRefresh();
                    if(res.data.semail === 'admin@gmail.com') {
                      navigate("/admin");
                    }
                    else {
                      navigate("/salesperson");
                    }
                }
            }
        ).catch(
            err => {
                console.log("error");
            }
        )
    }

  return (
    <section class=" md-10 h-custom" style={{backgroundColor: 'white'}}>
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-8 col-xl-6">
                    <div class="card rounded-3">
                        <div class="card-body p-4 p-md-5">
                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Login</h3>

            <form class="px-md-2" onSubmit={onLogin}>

              <div class="form-outline mb-4">
                <input type="text" id="form3Example1q"
                    class="form-control" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div class="form-outline mb-4">
                <input type="password" id="form3Example1q"
                    class="form-control" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>


              <button type="submit" class="btn btn-success btn-lg mb-1">Login</button>

            </form>
            <br/>
            <p><span style={{paddingRight: '10px'}}>Don't have an Account?</span><Link to='/register'>Register</Link></p>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Login
