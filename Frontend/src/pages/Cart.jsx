import React, { useState, useEffect } from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Cart() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const authToken = localStorage.getItem('authToken')
    if (!authToken) {
      toast.warning('Login First')
      navigate('/')
    }
  }, [])

  useEffect(() => {
    const fetchcart = async () => {
      try {
        const email = localStorage.getItem('userEmail')
        if (!email) {
          navigate('/')
        }
        const response = await fetch(`https://localhost:5000/cart/${email}`)
        if (!response.ok) {
          throw new Error('Failed to fetch cart')
        }
        const cartData = await response.json();

        setBooks(cartData)
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchcart();
  }, [])

  const hangleprocced = (bookId) => {
    navigate(`/books/${bookId}`)
  }

  const handledelete = (bookId) => {
    fetch(`https://localhost:5000/cart/bookid/${bookId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        toast.info('Item deleted successfully!');
        window.location.reload();
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });
  }

  return (
    <>
      {books.length === 0 ? (
        <div className="text-center mt-5">
          <h1 className='mb-3' style={{ fontStyle: 'italic' }}>Your cart is empty</h1>
          <Button variant="primary" onClick={() => navigate(`/books`)}>Go to Store</Button>
        </div>
      ) : (
        <Row className='d-flex justify-content-center'>
          {books.slice().reverse().map(book => (
            <Col key={book._id} className='mt-5' md={4}>
              <Card className='card-card-x' style={{ width: '26rem', margin: '0 auto', backgroundColor: '#f0f0f0' }}>
                <Card.Img
                  variant="top"
                  src={book.image}
                  style={{ height: '350px', width: '85%', objectFit: 'cover', marginLeft: 'auto', marginRight: 'auto' }} // Set fixed height and cover the image
                />
                <Card.Body>
                  <Card.Title className="text-center" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
                    {book.title}
                  </Card.Title>
                  <div style={{ overflowY: 'auto', height: '100px', marginBottom: '15px', marginTop: '5px', WebkitOverflowScrolling: 'touch', backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>
                    <style>
                      {`
                    /* Style the scrollbar for Webkit (Safari, Chrome) */
                    ::-webkit-scrollbar {
                        width: 8px;
                        height: 8px;
                    }

                    ::-webkit-scrollbar-track {
                        background: #f0f0f0;
                    }

                    ::-webkit-scrollbar-thumb {
                        background: lightblue;
                        border-radius: 4px;
                    }

                    /* Style the scrollbar for Firefox */
                    scrollbar-width: thin;
                    scrollbar-color: lightblue #f0f0f0;
                  `}
                    </style>
                    <Card.Text>Author: {book.author}</Card.Text>
                    <Card.Text>Publisher: {book.publisher}</Card.Text>
                    <Card.Text>Description: {book.description}</Card.Text>
                  </div>
                  <Card.Text style={{ fontWeight: 'bold' }}>Price: {book.price}</Card.Text>
                  <Row className="justify-content-center">
                    {/* <Button variant="outline-success" onClick={() => hangleprocced(book.bookId)}>Proceed</Button> */}
                    <div className="btn-btn-div">
                      <button className="custom-btn btn-14 mx-2 w-100" type="button" onClick={() => hangleprocced(book.bookId)}><span>Proccedd</span></button>
                    </div>
                    <div className="btn-btn-div">
                      <button className="custom-btn btn-5 mx-2 w-100 mt-3" type="button" onClick={() => handledelete(book.bookId)}><span>Delete from cart</span></button>
                    </div>
                    {/* <Button variant="outline-danger" className='mt-3' onClick={() => handledelete(book.bookId)}>Delete from cart</Button> */}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </>

  )
}
