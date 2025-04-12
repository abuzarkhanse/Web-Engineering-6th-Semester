import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, CardImg } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Lab10Task.css';
import imgSrc from '../assets/Lab03hm.jpg';

function Lab10Task() {
  return (
    <div className='stdCard'>
        <Card className='card'>
          <Card.Img variant="top" src={imgSrc} alt="Student" />
          <CardHeader>Student 01</CardHeader>
          <CardBody>
            <Card.Text>Abzar Khan</Card.Text>
            <Card.Text>21</Card.Text>
            <Card.Text>Web Engineering</Card.Text>
          </CardBody>
          <Button variant='danger'>Remove Card</Button>
        </Card>

        <Card className='card'>
          <Card.Img variant="top" src={imgSrc} alt="Student" />
          <CardHeader>Student 02</CardHeader>
          <CardBody>
            <Card.Text>Abzar Khan</Card.Text>
            <Card.Text>21</Card.Text>
            <Card.Text>Web Engineering</Card.Text>
          </CardBody>
          <Button variant='danger'>Remove Card</Button>
        </Card>

        <Card className='card'>
          <Card.Img variant="top" src={imgSrc} alt="Student" />
          <CardHeader>Student 03</CardHeader>
          <CardBody>
            <Card.Text>Abzar Khan</Card.Text>
            <Card.Text>21</Card.Text>
            <Card.Text>Web Engineering</Card.Text>
          </CardBody>
          <Button variant='danger'>Remove Card</Button>
        </Card>

        <Card className='card'>
          <Card.Img variant="top" src={imgSrc} alt="Student" />
          <CardHeader>Student 04</CardHeader>
          <CardBody>
            <Card.Text>Abzar Khan</Card.Text>
            <Card.Text>21</Card.Text>
            <Card.Text>Web Engineering</Card.Text>
          </CardBody>
          <Button variant='danger'>Remove Card</Button>
        </Card>

        <Card className='card'>
          <Card.Img variant="top" src={imgSrc} alt="Student" />
          <CardHeader>Student 05</CardHeader>
          <CardBody>
            <Card.Text>Abzar Khan</Card.Text>
            <Card.Text>21</Card.Text>
            <Card.Text>Web Engineering</Card.Text>
          </CardBody>
          <Button variant='danger'>Remove Card</Button>
        </Card>
        
    </div>
  );
}

export default Lab10Task;
