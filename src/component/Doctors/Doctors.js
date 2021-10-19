import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Doctors = () => {
    return (
        <div className=" container">
            <h2 className="text-center fw-bolder py-5">Our Doctors</h2>
            {/* <div className="container mb-5 col-lg-4 col-sm-6">
                
                    <div className="card shadow-lg w-100 h-100 text-center rounded">
                        <div className="d-flex justify-content-center align-items-center h-75 p-2">
                        <img src="http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/veronica-400x400.jpg" className="card-img-top h-75 w-75" alt="" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Dr. Kamrunnahar</h5>
                            <p>Pulmonary</p>
                            <p>Kamrunnahar was born and raised in Jakarta, Indonesia. He graduated from the University of...</p>
                        </div>
                    </div>
                
            </div> */}


<CardGroup>
  <Card>
    <Card.Img variant="top" src="http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/veronica-400x400.jpg" />
    <Card.Body>
      <Card.Title>Dr. Kamrunnahar</Card.Title>
      <Card.Text>
      Kamrunnahar was born and raised in Jakarta, Indonesia. He graduated from the University of...
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src="http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/Dr-Kathirnia-400x400.jpg" />
    <Card.Body>
      <Card.Title>Dr. Kathryn Wood</Card.Title>
      <Card.Text>
      Kathryn was born and raised in Indonesia, North Way Indonesia He graduated from the University...
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src="http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/pediactirc-Doctors-e1460536658595-400x400.jpg" />
    <Card.Body>
      <Card.Title>Dr. Peter Parker</Card.Title>
      <Card.Text>
      Parker was born and raised in UK, North Way Australia He graduated from the University of...
      </Card.Text>
    </Card.Body>

  </Card>
</CardGroup>
            
        </div>
    );
};

export default Doctors;