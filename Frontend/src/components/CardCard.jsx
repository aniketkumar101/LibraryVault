import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import studyImage from '../assets/third images/study.jpg';
import ebookImage from '../assets/third images/ebook.jpg';
import bookImage from '../assets/third images/book.jpg';

const BoxWrapper = () => {
    return (
        <div className="box-wrapper">
            <figure className="shape-box shape-box_half">
                <img src={studyImage} alt="Study" />
                <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
                <figcaption>
                    <div className="show-cont">
                        <h3 className="card-main-title">STUDY</h3>
                    </div>
                    <p className="card-content">Our library offers a peaceful study environment with vast resources, expert assistance, and comfortable facilities, enhancing academic pursuits effectively.</p>
                    <Link to="/library" className="read-more-btn">Read More</Link>
                </figcaption>
                <span className="after"></span>
            </figure>
            <figure className="shape-box shape-box_half">
                <img src={ebookImage} alt="E Book" />
                <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
                <figcaption>
                    <div className="show-cont">
                        <h3 className="card-main-title">E BOOK</h3>
                    </div>
                    <p className="card-content">Customers can effortlessly download our ebook for free, accessing valuable content anytime, anywhere, with just a few clicks.</p>
                    <a href="#" className="read-more-btn">Read More</a>
                </figcaption>
                <span className="after"></span>
            </figure>
            <figure className="shape-box shape-box_half">
                <img src={bookImage} alt="book" />
                <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
                <figcaption>
                    <div className="show-cont">
                        <h3 className="card-main-title">BORROW</h3>
                    </div>
                    <p className="card-content">Customers can easily borrow any book from our library by online or offline , selecting their desired book, presenting their library card, and checking out the book with the assistance of our staff.</p>
                    <Link to="/books" className="read-more-btn">Read More</Link>
                </figcaption>
                <span className="after"></span>
            </figure>
        </div>
    );
};

export default BoxWrapper;
