import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = (props) => {
    const {id, name, description, img} = props.service;
    return (
        <div className="container mb-5 col-lg-4 col-sm-6">
             <div className="card shadow-lg w-100 h-100 text-center rounded my-card">
                <div className="d-flex justify-content-center align-items-center h-75 p-2">
                    <img src={img} className="card-img-top h-75 w-75" alt="" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{description}</p>
                </div>
                <div className="card-footer ">
                    <div className="d-flex align-items-center justify-content-center ">
                        
                        <Link to={`/appointbook/${id}`}>
                            <button className="btn btn-success">Get Appointment</button>
                        </Link>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default ServiceCard;