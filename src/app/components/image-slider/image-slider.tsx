'use client';
import Carousel from 'react-bootstrap/Carousel';
import './image-slider.css';

function ImageSlider() {
  return (
    <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="./Auditorium pictures/a01.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Welcome to Our Auditorium</h1>
          <p>Experience state-of-the-art acoustics and seating, designed for comfort and an immersive viewing experience.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="./Auditorium pictures/a02.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>Versatile Space for All Events</h1>
          <p>From concerts to conferences, our auditorium adapts to any event with modern amenities and flexible seating arrangements</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="./Auditorium pictures/a03.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>A Hub of Creativity and Learning</h1>
          <p>Join us in a space where creativity meets innovation, fostering a dynamic environment for learning and inspiration.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;
