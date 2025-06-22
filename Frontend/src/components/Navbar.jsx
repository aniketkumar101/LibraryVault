import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { useMediaQuery } from 'react-responsive';
import './Navbar.css';

export default function Navbar() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const navigate = useNavigate();

    const handleCloseLoginModal = () => setShowLoginModal(false);
    const handleShowLoginModal = () => setShowLoginModal(true);

    const handleCloseRegisterModal = () => setShowRegisterModal(false);
    const handleShowRegisterModal = () => setShowRegisterModal(true);

    const toggleRegisterModal = () => {
        setShowLoginModal(false);
        setShowRegisterModal(true);
    };

    const toggleLoginModal = () => {
        setShowRegisterModal(false);
        setShowLoginModal(true);
    };

    const handleLoginAfterRegistration = () => {
        setShowRegisterModal(false);
        handleShowLoginModal();
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        window.location.reload('/');
    };

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const email = localStorage.getItem('userEmail');
                if (!email) {
                    navigate('/');
                    return;
                }
                const response = await fetch(`https://library-management-backend-sepia.vercel.app/cart/${email}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch cart');
                }
                const cartData = await response.json();

                setBooks(cartData);
                console.log(cartData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCart();
    }, [navigate]);

    const cartItemCount = Array.from(new Set(books.map(book => book._id))).length;

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const closeNavbar = () => {
        setIsNavbarOpen(false);
    };

    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container p-2">
                    <Link className="navbar-brand italic-text animate-charcter-1" to="/">LibraLogic</Link>
                    <button className="navbar-toggler" type="button" aria-expanded={isNavbarOpen} aria-label="Toggle navigation" onClick={toggleNavbar}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse justify-content-start ${isNavbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/" onClick={closeNavbar}>Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/contactus" onClick={closeNavbar}>Contactus</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/about" onClick={closeNavbar}>About</Link>
                            </li>
                            {localStorage.getItem("authToken") && (
                                isMobile ? (
                                    <>
                                        <li className="nav-item mx-2">
                                            <Link className="nav-link" to="https://tushargandhi77-book-recommender-system.hf.space/" onClick={closeNavbar}>Recommend</Link>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <Link className="nav-link" to="/books" onClick={closeNavbar}>Store</Link>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <Link className="nav-link" to="/library" onClick={closeNavbar}>Library</Link>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <Link className="nav-link" to="/order" onClick={closeNavbar}>Order Details</Link>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <Link className="nav-link" to="/seatdetails" onClick={closeNavbar}>Seat Details</Link>
                                        </li>
                                    </>
                                ) : (
                                    <li className="nav-item dropdown mx-2">
                                        <Link className="nav-link dropdown-toggle active" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Details</Link>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item" to="https://tushargandhi77-book-recommender-system.hf.space/" onClick={closeNavbar}>Recommend</Link></li>
                                            <li><Link className="dropdown-item" to="/books" onClick={closeNavbar}>Store</Link></li>
                                            <li><Link className="dropdown-item" to="/library" onClick={closeNavbar}>Library</Link></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><Link className="dropdown-item" to="/order" onClick={closeNavbar}>Order Details</Link></li>
                                            <li><Link className="dropdown-item" to="/seatdetails" onClick={closeNavbar}>Seat Details</Link></li>
                                        </ul>
                                    </li>
                                )
                            )}
                        </ul>
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="mr-sm-4 form-control-control"
                        />
                        {!localStorage.getItem("authToken") ? (
                            <div className="d-flex">
                                <div className="btn-btn-div">
                                    <button className="custom-btn btn-3 mx-2" type="button" onClick={handleShowLoginModal}><span>Login</span></button>
                                </div>
                                <div className="btn-btn-div">
                                    <button className="custom-btn btn-3" type="button" onClick={handleShowRegisterModal}><span>Register</span></button>
                                </div>
                            </div>
                        ) : (
                            <div className='d-flex '>
                                <div className="btn-btn-div">
                                    <button className="custom-btn btn-5 mx-2" type="button" onClick={handleLogout}><span>Logout</span></button>
                                </div>
                                <div className="btn-btn-div">
                                    <Link to='/cart'>
                                        <button className="custom-btn btn-12" type="button" onClick={closeNavbar}>
                                            <span>{cartItemCount > 0 ? `${cartItemCount}` : '0'}</span>
                                            <span>My Cart</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginForm handleCloseLoginModal={handleCloseLoginModal} />
                    <p className="text-center mt-3">Not registered? <button className="btn btn-link" onClick={toggleRegisterModal}>Register here</button></p>
                </Modal.Body>
            </Modal>

            <Modal show={showRegisterModal} onHide={handleCloseRegisterModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RegisterForm onSuccess={handleLoginAfterRegistration} />
                    <p className="text-center mt-3">Already a user? <button className="btn btn-link" onClick={toggleLoginModal}>Login here</button></p>
                </Modal.Body>
            </Modal>

            <div id="scroll-container">
                <div id="scroll-text">
                    <h2 className='text-text-text'>This Summer Avail  Many Offers Here 50% Off in Books Renting and Study Online Free</h2>
                </div>
            </div>
        </>
    );
}
