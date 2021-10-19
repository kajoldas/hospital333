import React from 'react';
import Doctors from '../Doctors/Doctors';
import Service from '../Service/Service';
import Banner from './Banner/Banner';
import Navbar from './Navbar/Navbar';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>

            <Doctors></Doctors>
        </div>
    );
};

export default Home;