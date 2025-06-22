import React from 'react';
import { Carousel, Card, Row, Col,Button  } from 'react-bootstrap';
import I1 from '../assets/fourth images/img1.jpg'
import I2 from '../assets/fourth images/img2.jpg'
import I3 from '../assets/fourth images/img3.jpg'
import I4 from '../assets/fourth images/img4.jpg'
import I5 from '../assets/fourth images/img5.jpg'
import I6 from '../assets/fourth images/img6.jpg'
import { useNavigate } from 'react-router-dom';

const CardProduct = () => {
  const navigate = new useNavigate();
  const handlebook = () => {
    navigate('/library')
  }
  const handlerent = () => {
    navigate('/books')
  }

  return (
    <Carousel indicators={false}>
      <Carousel.Item>
        <Row className="">
          <Col className='mb-5 mt-5'>
            <Card className='card-card' style={{backgroundColor: '#f0f0f0'}}>
              <Card.Img variant="top" src={I1}  style={{ height: '220px', width: '220px', objectFit: 'cover', marginLeft: 'auto', marginRight: 'auto', borderRadius: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}/>
              <Card.Body>
                <Card.Title className="text-center mt-2 fw-bold">Simple UI</Card.Title>
                <div className="btn-btn-div mt-2">
                    <button className="custom-btn btn-11 mx-2 w-100" type="button" onClick={handlebook}><span>Book Seat</span></button>
                </div>
                <div className="btn-btn-div mt-3">
                    <button className="custom-btn btn-10 mx-2 w-100" type="button" onClick={handlerent}><span>Rent Now</span></button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mb-5 mt-5'>
            <Card className='card-card' style={{backgroundColor: '#f0f0f0'}}>
              <Card.Img variant="top" src={I2} style={{ height: '220px', width: '220px', objectFit: 'cover', marginLeft: 'auto', marginRight: 'auto', borderRadius: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}/>
              <Card.Body>
                <Card.Title className="text-center fw-bold mt-2">Easy Booking</Card.Title>
                <div className="btn-btn-div mt-2">
                    <button className="custom-btn btn-11 mx-2 w-100" type="button" onClick={handlebook}><span>Book Seat</span></button>
                </div>
                <div className="btn-btn-div mt-3">
                    <button className="custom-btn btn-10 mx-2 w-100" type="button" onClick={handlerent}><span>Rent Now</span></button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mb-5 mt-5'>
            <Card className='card-card' style={{backgroundColor: '#f0f0f0'}}>
              <Card.Img variant="top" src={I3} style={{ height: '220px', width: '220px', objectFit: 'cover', marginLeft: 'auto', marginRight: 'auto', borderRadius: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}/>
              <Card.Body>
                <Card.Title className="text-center fw-bold mt-2">Less Cost</Card.Title>
                <div className="btn-btn-div mt-2">
                    <button className="custom-btn btn-11 mx-2 w-100" type="button" onClick={handlebook}><span>Book Seat</span></button>
                </div>
                <div className="btn-btn-div mt-3">
                    <button className="custom-btn btn-10 mx-2 w-100" type="button" onClick={handlerent}><span>Rent Now</span></button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row className="d-flex justify-content-between">
          <Col className='mb-5 mt-5'>
            <Card className='card-card' style={{backgroundColor: '#f0f0f0'}}>
              <Card.Img variant="top" src={I4} style={{ height: '220px', width: '220px', objectFit: 'cover', marginLeft: 'auto', marginRight: 'auto', borderRadius: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }} />
              <Card.Body>
                <Card.Title className="text-center fw-bold mt-2">Easy Renting</Card.Title>
                <div className="btn-btn-div mt-2">
                    <button className="custom-btn btn-11 mx-2 w-100" type="button" onClick={handlebook}><span>Book Seat</span></button>
                </div>
                <div className="btn-btn-div mt-3">
                    <button className="custom-btn btn-10 mx-2 w-100" type="button" onClick={handlerent}><span>Rent Now</span></button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mb-5 mt-5'>
            <Card className='card-card' style={{backgroundColor: '#f0f0f0'}}> 
              <Card.Img variant="top" src={I5} style={{ height: '220px', width: '220px', objectFit: 'cover', marginLeft: 'auto', marginRight: 'auto', borderRadius: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }} />
              <Card.Body>
                <Card.Title className="text-center fw-bold mt-2">Ecofrendly</Card.Title>
                <div className="btn-btn-div mt-2">
                    <button className="custom-btn btn-11 mx-2 w-100" type="button" onClick={handlebook}><span>Book Seat</span></button>
                </div>
                <div className="btn-btn-div mt-3">
                    <button className="custom-btn btn-10 mx-2 w-100" type="button" onClick={handlerent}><span>Rent Now</span></button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mb-5 mt-5'>
            <Card className='card-card' style={{backgroundColor: '#f0f0f0'}}>
              <Card.Img variant="top" src={I6} style={{ height: '220px', width: '220px', objectFit: 'cover', marginLeft: 'auto', marginRight: 'auto', borderRadius: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}/>
              <Card.Body>
                <Card.Title className="text-center fw-bold mt-2">Feasible</Card.Title>
                <div className="btn-btn-div mt-2">
                    <button className="custom-btn btn-11 mx-2 w-100" type="button" onClick={handlebook}><span>Book Seat</span></button>
                </div>
                <div className="btn-btn-div mt-3">
                    <button className="custom-btn btn-10 mx-2 w-100" type="button" onClick={handlerent}><span>Rent Now</span></button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}

export default CardProduct;
