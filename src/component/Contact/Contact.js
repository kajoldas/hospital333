import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="d-flex flex-column justify-content-start align-items-start p-5 border m-5 rounded">
            <h2 className=" ">In Emergency Contact</h2>
            <p>Non Profit Medical Institution </p>
            </div>

            <div className="d-flex flex-column justify-content-start align-items-start p-5 border m-5 rounded">
                <h4>Contact Us:</h4>
                <h5>Phone: 04255555 </h5>
                <h5>Address: Gulshan, Dhaka 1200.</h5>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center p-5 border m-5 rounded">
                <input className="my-4 px-5 p-2" type="text" placeholder="You Enqiry" />
                <input className="bg-primary text-white border border-primary" type="submit" value="Submit Your Enquary" />
            </div>
        </div>
    );
};

export default Contact;