import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import Loader from '../pages/Loader'

export default function OrderConfirmationPage() {
    const { bookId } = useParams()
    const [book, setBook] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const [dur, setDur] = useState(30)
    const [price, setPrice] = useState(0)

    const navigate = useNavigate()
    useEffect(() => {

        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
            toast.warning('Login first')
            navigate('/');
        }
    }, []);

    useEffect(() => {
        fetch(`https://localhost:5000/books/${bookId}`)
            .then(response => response.json())
            .then(data => {
                setBook(data);
            })
            .catch(error => console.log('error fetching book details', error))
    }, [bookId])

    useEffect(() => {
        if (book) {
            setPrice(book.price * quantity);
        }
    }, [quantity, book]);

    const handleConfirmOrder = async () => {
        try {

            fetch(`https://localhost:5000/cart/bookid/${bookId}`, {
                method: 'DELETE'
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                })
                .catch(error => {
                    console.error('There was a problem with your fetch operation:', error);
                });
            const email = localStorage.getItem('userEmail');
            const orderData = {
                email: email,
                title: book.title,
                image: book.image,
                stock: quantity,
                duration: dur
            };
            const response = await fetch('https://localhost:5000/rent/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            });
            if (response.ok && response.status === 200) {
                toast.success('Order placed successfully!');
                navigate(`/placed`);

            } else {
                toast.error('Failed to place order:', response.statusText);
                navigate(`/error`)
            }
        }
        catch (error) {
            console.error('Error placing order:', error);
        }
    }
    if (!book) {
        return <Loader/>
    }

    return (

        <div className="container mt-5 mx-auto">
            <h1 className="mb-4">Confirm Order</h1>
            <Row>
                <Col md={4}>
                    <Card className="mb-4 cnf-cnf-cnf" style={{ height: '420px', margin: '0 auto', backgroundColor: '#f0f0f0' }}>
                        <Card.Img variant="top" src={book.image} style={{ height: '350px', width: '65%', objectFit: 'cover', marginLeft: 'auto', marginRight: 'auto', marginTop: '-10px' }} />
                    </Card>

                </Col>
                <Col md={8}>
                    <Card className="mb-4 cnf-cnf-cnf" style={{ height: "420px", backgroundColor: '#f0f0f0' }}>
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>{book.description}</Card.Text>
                            <Card.Text className='text-primary fw-bold'>Price: ${book.price}</Card.Text>
                            <Card.Text className='text-dark fw-bold'>Stock: {book.stock}</Card.Text>
                            <Card.Text className='text-danger fw-bold'>Total Price: ${price}</Card.Text>
                            <div className='d-flex'>
                                <div className="mb-3 mt-1">
                                    <label htmlFor="quantity">Quantity:</label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        min={1}
                                        className='form-control mt-2'
                                        style={{ width: '50%' }}
                                    />
                                </div>
                                <div className="mb-3 mt-1">
                                    <label htmlFor="duration">Duration:</label>
                                    <input
                                        type="number"
                                        id="duration"
                                        value={dur}
                                        onChange={(e) => setDur(e.target.value)}
                                        min={30}
                                        className='form-control mt-2'
                                        style={{ width: '50%' }}
                                    />
                                </div>
                            </div>
                            {/* <Button variant="outline-primary mt-2" onClick={() => handleConfirmOrder()}>Confirm Order</Button> */}
                            <div className="btn-btn-div mt-3">
                                <button className="custom-btn btn-13 mx-2 btn-btn-xx-yy" type="button" onClick={() => handleConfirmOrder()}><span>Confirm Order</span></button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div >
    )
}
