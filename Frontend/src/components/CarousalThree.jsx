import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import C1 from '../assets/contact1.jpg';
// import C2 from '../assets/contact2.jpg';
// import C3 from '../assets/contact3.jpg';

function UncontrolledExample() {
  return (
    <Carousel controls={false}  indicators={false}>
      <Carousel.Item className='let-let-let-let-let'>
        <ExampleCarouselImage imageUrl={C1} altText="First slide"/>
      </Carousel.Item>
      {/* <Carousel.Item className='let-let'>
        <ExampleCarouselImage imageUrl={C1} altText="First slide"/>
      </Carousel.Item>
      <Carousel.Item className='let-let'>
        <ExampleCarouselImage imageUrl={C1} altText="First slide" />
      </Carousel.Item> */}
    </Carousel>
  );
}

export default UncontrolledExample;