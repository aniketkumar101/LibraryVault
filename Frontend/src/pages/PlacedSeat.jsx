import React, { useEffect } from 'react'
import Emoji from '../assets/emoji.png'
import { Link } from 'react-router-dom';
export default function PlacedSeat() {
    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
            navigate('/');
        }
    }, []);
    return (
        <>
            <div className='d-flex justify-content-center mt-3'>
                <div className='mb-4'>
                    <img src={Emoji} alt="" className='placed-placed-emoji' />
                </div>

            </div>
            <div className='d-flex justify-content-center mt-4'>
                <div className="btn-btn-div mt-3">
                    <Link to='/'><button className="custom-btn btn-7 mx-auto" type="button"><span>Home Page</span></button></Link>
                </div>
                <div className="btn-btn-div mx-3 mt-3">
                    <Link to='/seatdetails'><button className="custom-btn btn-7 mx-auto" type="button"><span>Seat Details</span></button></Link>
                </div>
            </div>
        </>

    )
}
