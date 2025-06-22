import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import L1 from '../assets/first images/slide 1.jpg';
import L2 from '../assets/first images/slide2.jpg';
import L3 from '../assets/first images/slide3.jpg';

function Carousal() {
  return (
    <Carousel className='rounded-2'>
      <Carousel.Item className="let-let-let">
        <ExampleCarouselImage imageUrl={L1} altText="First slide" />
      </Carousel.Item>
      <Carousel.Item className="let-let-let">
        <ExampleCarouselImage imageUrl={L2} altText="Second slide" />
      </Carousel.Item>
      <Carousel.Item className="let-let-let">
        <ExampleCarouselImage imageUrl={L3} altText="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousal;