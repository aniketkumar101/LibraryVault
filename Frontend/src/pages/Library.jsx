import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../pages/Loader'

export default function Library() {
    const [LibraryDetails, SetlibraryDetails] = useState([])
    const [isLoading, setIsLoading] = useState(true); 
    const navigate = useNavigate();

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
            toast.warning("Login First")
            navigate('/')
        } 
      }, []);

    useEffect(() => {
        axios.get('https://localhost:5000/library/')
            .then(response => {
                setTimeout(() => { 
                    SetlibraryDetails(response.data);
                    setIsLoading(false); 
                  }, 1500);
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    const handleBookNow = (_id) => {
        navigate(`/seat/${_id}`)
    }

    return (
        <>
        {isLoading ? ( // Render loader if loading state is true
        <Loader />
      ) : (
            <Row className='d-flex justify-content-center'>
                {LibraryDetails.slice().reverse().map(library => (
                    <Col key={library._id} md={4} className='mt-5'>
                        <Card className='card-card-y' style={{ width: '26rem', margin: '0 auto', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
                            <Card.Img variant="top" src={library.image} style={{ height: '350px', width: '350px', objectFit: 'cover', marginLeft: 'auto', marginRight: 'auto', borderRadius: '100%' ,boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }} />
                            <Card.Body>
                                <Card.Title style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{library.name}</Card.Title>
                                <Card.Text style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>Location: {library.location}</Card.Text>
                                <Card.Text>Available Seats: {library.available}</Card.Text>
                                <div className="btn-btn-div">
                                    <button className="custom-btn btn-7 mx-auto w-100" type="button" onClick={()=>handleBookNow(library._id)}><span>Book Seat</span></button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
      )}
        </>
    )
}
