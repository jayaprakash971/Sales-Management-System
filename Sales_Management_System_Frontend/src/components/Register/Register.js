import {Link} from 'react-router-dom'
import './register.css'
import {useState} from 'react'
import axios from 'axios'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [location, setLocation] = useState('');
    const [level, setLevel] = useState('');
    const [password, setPassword] = useState('');

    const onRegister = async(e) => {
        e.preventDefault()

        if(!name || !email || !mobile || !location || !level || !password) {
            alert("please enter complete details");
            return;
        }

        const user = {
            sname: name,
            semail: email,
            sphone: mobile,
            slocation: location,
            slevel: level,
            spassword: password
        }
        await axios.post('http://localhost:8080/auth/register', user).then(
            res => {
                if(res.data === "") {
                    alert("User already exists!");
                }
                else {
                    alert("User Registered Successfully");
                    setName('');
                    setEmail('');
                    setMobile('');
                    setLocation('');
                    setLevel('');
                    setPassword('');
                }
            }
        ).catch(
            err => {
                console.log("error");
            }
        )
    }

  return (
    <section class="h-100 h-custom" style={{backgroundColor: 'white'}}>
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-8 col-xl-6">
                    <div class="card rounded-3">
                        <div class="card-body p-4 p-md-5">
                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration</h3>

            <form class="px-md-2" onSubmit={onRegister}>

              <div class="form-outline mb-4">
                <input type="text" id="form3Example1q"
                    class="form-control" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="form3Example1q"
                    class="form-control" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="form3Example1q"
                    class="form-control" placeholder='Phone Number' value={mobile} onChange={(e) => setMobile(e.target.value)}/>
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="form3Example1q"
                    class="form-control" placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)}/>
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="form3Example1q"
                    class="form-control" placeholder='Level' value={level} onChange={(e) => setLevel(e.target.value)}/>
              </div>

              <div class="form-outline mb-4">
                <input type="password" id="form3Example1q"
                    class="form-control" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>


              <button type="submit" class="btn btn-success btn-lg mb-1">Register</button>

            </form>
            <br/>
            <p><span style={{paddingRight: '10px'}}>Already had an account?</span><Link to='/login'>Login</Link></p>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Register
