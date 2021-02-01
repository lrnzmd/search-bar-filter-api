import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';


const Tour = ({ id, title, body}) => {

  return (
    <Card bg={'info'} className='carta'>
      <Card.Body className="single-tour">
          <Card.Title className="titolo">
            <h1>{title}</h1>
          </Card.Title>
          <Card.Text>
            <p>{body}</p>
          </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Tour;