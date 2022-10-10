import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import useFirebase from '../../../Hooks/UseFirebase';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
//import CircularProgress from '@mui/material/CircularProgress';
//import Alert from '@mui/material/Alert';
const Login = () => {
    const [loginData, setLoginData] = useState({})
    const {signIn, user, isLoading,signInUsingGoogle}=useFirebase()
    //const [welcome,setWelcome]=useState(false)
    //console.log(user)
    const location = useLocation()
    const history = useHistory()

    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...loginData };
        newData[field] = value
        setLoginData(newData)

    }

    const handleLogInSubmit = (e) => {
        e.preventDefault()
        signIn(loginData.email, loginData.password, location, history)


    }

    return (
        <div className='login'>
                
                <div className='text-center text-info'><h1>Welcome To MBSTU Seminer Library</h1></div>
            
            <div className='col-md-3 m-auto border border-primary bg-dark p-5'>
                    <p className='text-center mt-5'>Log-in</p>
                    <form onSubmit={handleLogInSubmit}>
                        <TextField name="email" type="email" onChange={handleChange} sx={{ width: 1, m: 1 }} id="standard-basic" label="Your Email" variant="standard" />
                        < TextField name="password" onChange={handleChange} sx={{ width: 1, m: 1 }} id="standard-basic" type="password" label="Your Password" variant="standard" />

                        <Button sx={{ width: 1, m: 1 }} type="submit" variant='contained'>LOGIN</Button>

                        <Link to="/register">  <Button color="inherit">NEW USER?PLEASE REGISTER</Button> </Link>
                        {/* {isLoading && <CircularProgress />} */}
                        {/* {user.email && <Alert severity="success">User Created Successfully</Alert>} */}
                        {/* {
                            authError && <Alert severity="error">{authError}!</Alert>

                        } */}
                        <p>---------------------</p>
                        <button className='btn btn-warning' onClick={()=>signInUsingGoogle(location,history)}>Login With Google</button>

                    </form>


                </div>

           
        </div>
    );
};

export default Login;