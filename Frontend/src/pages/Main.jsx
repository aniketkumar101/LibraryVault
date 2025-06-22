import React from 'react'
import Carousal from '../components/Carousal'
import CarouselFade from '../components/CarousalFade'
import CardSlier from '../components/CardSlider'
import CardProduct from '../components/CardProduct'
import CarousalThree from '../components/CarousalThree'
import ContactUs from '../components/ContactUs'
import CardCard from '../components/CardCard'
import CoverFlow from '../components/CoverFlow'
export default function Main() {
  return (
    <>
      <div className='container rounded-3'>
        <div className="d-flex justify-content-center mt-4 mb-4">
          <h1 className='animate-charcter'>WElCOME TO LIBRALOGIC</h1>
        </div>
        <Carousal />
      </div>
      <div className="ttttx">
        <center>
          <h3 className="ttx">Welcome to E-Library System</h3>
        </center>
      </div>
      <CarouselFade />
      <div className="ttttx">
        <center>
          <h3 className="ttx" >Here Our Main Features</h3>
        </center>
      </div>
      {/* <CardSlier /> */}
      <CardCard />
      <div className="ttttx">
        <center>
          <h3 className="ttx" >Our Libraries</h3>
        </center>
      </div>
      <CoverFlow />
      <div className="ttttx">
        <center>
          <h3 className="ttx">Here Our Special Features</h3>
        </center>
      </div>
      <CardProduct />
      {/* <div className="row g-0">
        <div className='col-md-6 mt-5'>
          <CarousalThree />
        </div>
        <div className='col-md-6 bg bg-dark-blue'>
          <ContactUs />
        </div>
      </div> */}
      <div className='col-md-6 bg bg-dark-blue'>
          <ContactUs />
      </div>
    </>
  )
}
