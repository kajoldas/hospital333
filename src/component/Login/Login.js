import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import login from './../../image/login.jpg'

const Login = () => {
    const {googleSignIn} = useAuth();
    return (
        <div className="d-flex justify-content-around align-items-center">
            <div>
                <img src={login} style={{height:'600px'}} alt="" />
            </div>
            <div className="login-form">
                <h2>LogIn </h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter Your Email" />
                    <br />
                    <input type="password" name=""  id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New Patient? <Link to="/register"> Create Account</Link></p>
                <div>---------or-----------</div>
                <button  className="btn-primary" 
                onClick={googleSignIn}
                >Google SignIn</button>
            </div>
            
        </div>
    );
};

export default Login;