import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Card, Button, Col, Row, Form } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';


export default function SeatBook() {
    const { id } = useParams()
    const [library, Setlibrary] = useState(null)
    const [seat, Setseat] = useState(1)
    const [date, setDate] = useState(new Date())
    const [startTime, setstarttime] = useState(new Date())
    const [endTime, setendtime] = useState(new Date())

    const navigate = useNavigate()
    useEffect(() => {

        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
            toast.warning("Login First")
            navigate('/');
        }
    }, []);

    useEffect(() => {
        fetch(`https://localhost:5000/library/${id}`)
            .then(response => response.json())
            .then(data => {
                Setlibrary(data);
                console.log(data)
            })
            .catch(error => console.log('error fetching library details', error))
    }, [id])


    const handlelibrary = async () => {
        try {
            const email = localStorage.getItem('userEmail');
            const seatValue = seat;
            const dateValue = date;
            const startTimeFull = `${date}T${startTime}:00`;
            const endTimeFull = `${date}T${endTime}:00`;
            const Library = {
                email: email,
                LibId: id,
                name: library.name,
                location: library.location,
                image: library.image,
                seat: seatValue,
                date: dateValue,
                startTime: startTimeFull,
                endTime: endTimeFull
            };
            const response = await fetch('https://localhost:5000/booklibrary/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Library)
            })

            if (response.ok && response.status === 200) {

                const availablityResponse = await fetch(`https://localhost:5000/library/${id}`)
                const availabilityData = await availablityResponse.json();
                const currentavailable = availabilityData.available;

                if (currentavailable < seatValue){
                    toast.error('Please select less seat value')
                    return;
                }

                const updatedAvailability = currentavailable - seatValue;

                const updateResponse = await fetch(`https://localhost:5000/library/${id}`,{
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        available: updatedAvailability
                    })
                });
                if (updateResponse.ok && updateResponse.status === 200) {
                    toast.success("Booking seat confirmed")
                    navigate(`/seatconfirm`);
                } else {
                    toast.error('Failed to update availability:', updateResponse.statusText);
                    navigate(`/error`);
                }
            }
            else {
                toast.error('Failed to book Seat:', response.statusText);
                navigate(`/error`);
            }

        }
        catch (error) {
            console.error('Error placing order:', error);
        }
    }


    if (!library) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container'>
            <h1 className='mt-4 mb-4 text-bold'>Confirm Booking</h1>

            <Row>
                <Col md={4}>
                    <Card className="mb-4 cnf-cnf-cnf" style={{ height: '420px', margin: '0 auto', backgroundColor: '#f0f0f0' }}>
                        <Card.Img variant="top" src={library.image} style={{ height: '300px', width: '300px', objectFit: 'cover', marginLeft: 'auto', marginRight: 'auto', marginTop: '18px', borderRadius: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }} />
                    </Card>
                </Col>
                <Col md={8}>
                    <Card style={{ height: "420px", backgroundColor: '#f0f0f0' }}>
                        <Card.Body>
                            <Card.Title>Name: {library.name}</Card.Title>
                            <Card.Text>Location: {library.location}</Card.Text>

                            <div className='d-flex mt-2'>
                                <div className='mb-3 mt-1'>
                                    <label htmlFor="seat">Seat:</label>
                                    <input type="number" value={seat} onChange={(e) => Setseat(e.target.value)} min={1} className='form-control mt-2' style={{ width: '50%' }} />
                                </div>
                                <div className='mb-3 mt-1'>
                                    <label htmlFor="date">Date:</label>
                                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} min={1} className='form-control mt-2' style={{ width: '100%' }} />
                                </div>
                            </div>
                            <div className='d-flex mt-3'>
                                <div className='mb-3 mt-1'>
                                    <label htmlFor="startTime">Start Time:</label>
                                    <input type="time" value={startTime} onChange={(e) => setstarttime(e.target.value)} min={1} className='form-control mt-2' style={{ width: '120%' }} />
                                </div>
                                <div className='mb-3 mt-1'>
                                    <label htmlFor="endTime" style={{ marginLeft: '120px' }}>End Time:</label>
                                    <input type="time" value={endTime} onChange={(e) => setendtime(e.target.value)} min={1} className='form-control mt-2' style={{ width: '75%', marginLeft: '120px' }} />
                                </div>
                            </div>

                            <div className="btn-btn-div mt-3">
                                <button className="custom-btn btn-13 mx-2 w-50" type="button" onClick={() => handlelibrary()}><span>Confirm</span></button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
