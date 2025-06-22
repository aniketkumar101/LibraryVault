import React from 'react';
import { Carousel, Card, Row, Col } from 'react-bootstrap';

const CardSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Row className="d-flex justify-content-between">
          <Col className='mb-5 mt-5'>
            <Card className='card-card-card'>
              <Card.Img variant="top" src="https://source.unsplash.com/random/900x700/?books" />
              <Card.Body>
                <Card.Title className="text-center">Simple UI</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mb-5 mt-5'>
            <Card className='card-card-card'>
              <Card.Img variant="top" src="https://source.unsplash.com/random/900x700/?books" />
              <Card.Body>
                <Card.Title className="text-center text-underline">Easy Booking</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mb-5 mt-5'>
            <Card className='card-card-card'>
              <Card.Img variant="top" src="https://source.unsplash.com/random/900x700/?books" />
              <Card.Body>
                <Card.Title className="text-center">Less Cost</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row className="d-flex justify-content-between">
          <Col className='mb-5 mt-5'>
            <Card className='card-card-card'>
              <Card.Img variant="top" src="https://source.unsplash.com/random/900x700/?books" />
              <Card.Body>
                <Card.Title className="text-center">Easy Renting</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mb-5 mt-5'>
            <Card className='card-card-card'>
              <Card.Img variant="top" src="https://source.unsplash.com/random/900x700/?books" />
              <Card.Body>
                <Card.Title className="text-center">Ecofrendly</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mb-5 mt-5'>
            <Card className='card-card-card'>
              <Card.Img variant="top" src="https://source.unsplash.com/random/900x700/?books" />
              <Card.Body>
                <Card.Title className="text-center">Feasible</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}

export default CardSlider;
