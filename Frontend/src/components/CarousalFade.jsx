import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import L1 from '../assets/second images/slide1.jpg';
import L2 from '../assets/second images/slide2.jpg';
import L3 from '../assets/second images/slide3.jpg';

function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item className='let-let'>
        <div className="image-overlay">
          <ExampleCarouselImage imageUrl={L1} altText="First slide" />
          <div className="caption-overlay">
            <h3 style={{fontWeight:'bolder'}}>Vast Collection of Resources</h3>
            <p style={{fontWeight:'bold',fontStyle:'italic'}}>A library should have a wide range of books, journals, and other materials to cater to the diverse needs of its users.</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='let-let'>
        <div className="image-overlay">
          <ExampleCarouselImage imageUrl={L2} altText="Second slide" />
          <div className="caption-overlay">
            <h3 style={{fontWeight:'bolder'}}>Comfortable Study Environment</h3>
            <p style={{fontWeight:'bold',fontStyle:'italic'}}>Peaceful and conducive environment for study and research is crucial. This includes comfortable seating, adequate lighting, and minimal noise.</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='let-let'>
        <div className="image-overlay">
          <ExampleCarouselImage imageUrl={L3} altText="Third slide" />
          <div className="caption-overlay">
            <h3 style={{fontWeight:'bolder'}}>Collaborative Spaces</h3>
            <p style={{fontWeight:'bold',fontStyle:'italic'}}>Spaces that encourage collaboration and group work, such as group study rooms or collaborative workstations.</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;