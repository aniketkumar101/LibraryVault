import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
export default function SeatDetails() {
    const [library, setLibrary] = useState([])
    const email = localStorage.getItem('userEmail')
    const navigate = useNavigate();

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
            toast.warning("Login first")
            navigate('/')
        }
    }, [])

    useEffect(() => {
        axios.get(`https://localhost:5000/booklibrary/${email}`)
            .then(response => {
                setLibrary(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        const updateSeatAvailability = async () => {
            const currentTime = new Date();
            const updatedLibrary = await Promise.all(library.map(async booking => {
                if (new Date(booking.endTime) < currentTime && (!booking.expired)) {
                    const id = booking.LibId;
                    const _id = booking._id
                    try {
                        const availableResponse = await axios.get(`https://localhost:5000/library/${id}`);
                        const currentAvailableSeats = availableResponse.data.available;
                        console.log(currentAvailableSeats);
                        const newAvailableSeats = currentAvailableSeats + booking.seat;
                        console.log(newAvailableSeats);
                        await axios.post(`https://localhost:5000/library/${id}`, { available: newAvailableSeats });
                        await axios.put(`https://localhost:5000/booklibrary/${_id}`, { expired: true });
                        return { ...booking, expired: true };
                    } catch (error) {
                        console.log('Error updating seat availability:', error);
                        return null;
                    }
                }
                return booking;
            }));
            setLibrary(updatedLibrary);
        };

        const intervalId = setInterval(updateSeatAvailability, 600); 

        return () => clearInterval(intervalId);
    }, [library, navigate]);

    return (
        <>
            <Row className='d-flex justify-content-center'>
                {library.slice().reverse().map(libraryItem => (
                    <Col key={libraryItem._id} md={4} className='mt-5'>
                        <Card className={libraryItem.expired ? 'expired-card' : ''} style={{ width: '26rem', margin: '0 auto', marginBottom: '20px', boxShadow: '0 6px 20px 0 rgba(0, 0, 0, .12)' }}>
                            <Card.Img variant="top" src={libraryItem.image} style={{ height: '350px', width: '350px', objectFit: 'cover', marginLeft: 'auto', marginRight: 'auto', borderRadius: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }} />
                            <Card.Body className='mt-3'>
                                <Card.Title style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{libraryItem.name}</Card.Title>
                                <Card.Text style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Location: {libraryItem.location}</Card.Text>
                                <Card.Text>Booked Seats: {libraryItem.seat}</Card.Text>
                                <Card.Text style={{ fontWeight: 'bold' }}>Date: {new Date(libraryItem.date).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</Card.Text>
                                <Card.Text>Start Time: <span style={{ color: 'green', fontWeight: 'bold' }}><i>{new Date(libraryItem.startTime).toLocaleTimeString()}</i></span></Card.Text>
                                <Card.Text>End Time: <span style={{ color: 'red', fontWeight: 'bold' }}><i>{new Date(libraryItem.endTime).toLocaleTimeString()}</i></span></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>


        </>
    )
}
