// import React, { useState, useEffect } from 'react'
// import { Card, Row, Col, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import cartpng from '../assets/shopping-cart.png'
// import cartpng1 from '../assets/add-to-cart.png'
// import rent from '../assets/Rent2.jpg'
// import { toast } from 'react-toastify';
// import Loader from '../pages/Loader'

// export default function BooksPage() {
//   const [books, setBooks] = useState([])
//   const [isLoading, setIsLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const authToken = localStorage.getItem('authToken');
//     if (!authToken) {
//       toast.warning('Login First')
//       navigate('/');
//     }
//   }, []);

//   useEffect(() => {
//     fetch('https://library-management-backend-sepia.vercel.app/books/')
//       .then(response => response.json())
//       .then(data => {
//         setTimeout(() => {
//           setBooks(data);
//           setIsLoading(false); // Set loading state to false after fetching data
//         }, 1500);
//       })
//       .catch(error => console.log('error fetching data', error))
//   }, [])

//   const handleRentNow = (bookId) => {
//     navigate(`/books/${bookId}`);
//   };

//   const handleaddtocart = async (bookId, title, author, publisher, description, price, stock, image) => {
//     try {
//       const email = localStorage.getItem('userEmail');
//       const cart = {
//         email: email,
//         bookId: bookId,
//         title: title,
//         author: author,
//         publisher: publisher,
//         description: description,
//         price: price,
//         stock: stock,
//         image: image
//       }
//       const response = await fetch('https://library-management-backend-sepia.vercel.app/cart/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(cart)
//       });
//       if (response.ok && response.status === 200) {
//         toast.success('Add to cart Succesfully')
//       }
//     }
//     catch (error) {
//       console.log(error)
//     }

//   }
//   return (
//     <>
//     {isLoading ? ( 
//         <Loader />
//       ) : (
//       <Row className='d-flex justify-content-center'>
//         {books.map(book => (
//           <Col key={book.bookId} className='mt-5' md={4}>
//             <Card className='card-card-x' style={{ width: '26rem', margin: '0 auto', backgroundColor: '#f0f0f0' }}>
//               <Card.Img
//                 variant="top"
//                 src={book.image}
//                 style={{ height: '350px', width: '85%', objectFit: 'cover', marginLeft: 'auto', marginRight: 'auto', borderRadius: '3px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }} // Set fixed height and cover the image
//               />
//               <Card.Body>
//                 <Card.Title style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
//                   {book.title}
//                 </Card.Title>
//                 <div style={{ overflowY: 'auto', height: '100px', marginBottom: '15px', marginTop: '5px', WebkitOverflowScrolling: 'touch', backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>
//                   <style>
//                     {`
//                     /* Style the scrollbar for Webkit (Safari, Chrome) */
//                     ::-webkit-scrollbar {
//                         width: 8px;
//                         height: 8px;
//                     }

//                     ::-webkit-scrollbar-track {
//                         background: #f0f0f0;
//                     }

//                     ::-webkit-scrollbar-thumb {
//                         background: lightblue;
//                         border-radius: 4px;
//                     }

//                     /* Style the scrollbar for Firefox */
//                     scrollbar-width: thin;
//                     scrollbar-color: lightblue #f0f0f0;
//                   `}
//                   </style>
//                   <Card.Text>Author: {book.author}</Card.Text>
//                   <Card.Text>Publisher: {book.publisher}</Card.Text>
//                   <Card.Text>Description: {book.description}</Card.Text>
//                 </div>
//                 <Card.Text style={{ fontWeight: 'bold' }}>Price: {book.price}</Card.Text>
//                 <Card.Text>Stock: {book.stock}</Card.Text>
//                 <Col className="justify-content-center">
//                   {/* <Button variant="outline-primary" onClick={() => handleRentNow(book.bookId)} style={{ width: "50%" }}>Rent Now</Button> */}
//                   <div className="btn-btn-div">
//                     <button className="custom-btn btn-3 mx-2 w-50" type="button" onClick={() => handleRentNow(book.bookId)}><span>Confirm Order</span></button>
//                   </div>
//                   {/* <Button variant="outline-success" onClick={() => handleaddtocart(book.bookId, book.title, book.author, book.publisher, book.description, book.price, book.stock, book.image)}>Add to Cart</Button> */}
//                   <Button
//                     variant="outline-success"
//                     onClick={() => handleaddtocart(book.bookId, book.title, book.author, book.publisher, book.description, book.price, book.stock, book.image)}
//                     style={{ position: 'relative', height: '40px', borderColor: 'transparent', marginLeft: '220px', backgroundColor: 'transparent', width: "50%", marginTop: '-78px' }}
//                   >
//                     <img
//                       src={cartpng1}
//                       alt="Add to Cart"
//                       style={{ width: '50px', height: '50px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
//                     />
//                   </Button>

//                 </Col>

//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//       )}
//     </>
//   )
// }

import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import cartpng1 from '../assets/add-to-cart.png';
import { toast } from 'react-toastify';
import Loader from '../pages/Loader';

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Check authToken on mount
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      toast.warning('Please login first');
      navigate('/');
    }
  }, []);

  // Fetch books from local backend
  useEffect(() => {
    fetch('http://localhost:5000/books/')
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          setBooks(data);
          setIsLoading(false);
        }, 1500);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
        toast.error('Failed to load books');
      });
  }, []);

  const handleRentNow = (bookId) => {
    navigate(`/books/${bookId}`);
  };

  const handleAddToCart = async (bookId, title, author, publisher, description, price, stock, image) => {
    try {
      const email = localStorage.getItem('userEmail');
      const cart = {
        email,
        bookId,
        title,
        author,
        publisher,
        description,
        price,
        stock,
        image
      };

      const response = await fetch('http://localhost:5000/cart/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cart)
      });

      if (response.ok && response.status === 200) {
        toast.success('Added to cart successfully');
      } else {
        toast.error('Failed to add to cart');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error('Server error while adding to cart');
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Row className='d-flex justify-content-center'>
          {books.map(book => (
            <Col key={book.bookId} className='mt-5' md={4}>
              <Card className='card-card-x' style={{ width: '26rem', margin: '0 auto', backgroundColor: '#f0f0f0' }}>
                <Card.Img
                  variant="top"
                  src={book.image}
                  style={{
                    height: '350px',
                    width: '85%',
                    objectFit: 'cover',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    borderRadius: '3px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)'
                  }}
                />
                <Card.Body>
                  <Card.Title style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
                    {book.title}
                  </Card.Title>

                  <div style={{
                    overflowY: 'auto',
                    height: '100px',
                    marginBottom: '15px',
                    marginTop: '5px',
                    WebkitOverflowScrolling: 'touch',
                    backgroundColor: 'white',
                    padding: '10px',
                    borderRadius: '5px'
                  }}>
                    <style>
                      {`
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
                        scrollbar-width: thin;
                        scrollbar-color: lightblue #f0f0f0;
                      `}
                    </style>
                    <Card.Text>Author: {book.author}</Card.Text>
                    <Card.Text>Publisher: {book.publisher}</Card.Text>
                    <Card.Text>Description: {book.description}</Card.Text>
                  </div>

                  <Card.Text style={{ fontWeight: 'bold' }}>Price: {book.price}</Card.Text>
                  <Card.Text>Stock: {book.stock}</Card.Text>

                  <Col className="justify-content-center">
                    <div className="btn-btn-div">
                      <button
                        className="custom-btn btn-3 mx-2 w-50"
                        type="button"
                        onClick={() => handleRentNow(book.bookId)}
                      >
                        <span>Confirm Order</span>
                      </button>
                    </div>

                    <Button
                      variant="outline-success"
                      onClick={() => handleAddToCart(book.bookId, book.title, book.author, book.publisher, book.description, book.price, book.stock, book.image)}
                      style={{
                        position: 'relative',
                        height: '40px',
                        borderColor: 'transparent',
                        marginLeft: '220px',
                        backgroundColor: 'transparent',
                        width: "50%",
                        marginTop: '-78px'
                      }}
                    >
                      <img
                        src={cartpng1}
                        alt="Add to Cart"
                        style={{
                          width: '50px',
                          height: '50px',
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)'
                        }}
                      />
                    </Button>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}
