import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const {user, logout} = useAuth();
    return (
        <div>
            <div className="container-fluid bg-primary text-white"> contact: +880 01000 99 99 99 for Emergency</div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="d-flex">
                        {/* <img src={} style={{ height: '50px', width: '100px' }} alt="" /> */}
                        <h1 className="navbar-brand">Non Profit Medical College</h1>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup ">
                        <div className="navbar-nav ms-auto">

                            <Link to="/home" className="nav-link">Home</Link>
                            <Link to="/department" className="nav-link">Department</Link>
                            <Link to="/service" className="nav-link">Our Services</Link>
   
                            <Link to="/contact" className="nav-link">Emergency Contact</Link>
                            {
                                 <Link to="/login">
                                 <button className="btn btn-danger me-2" >Patient Log In</button>
                                 </Link> 
                            }
                            <span>{user.displayName}</span>
                            {user ?.email && <button onClick={logout} > Log Out </button>  }
                             {/* { <button className="btn btn-warning"></button>} */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;