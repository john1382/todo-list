import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <Carousel style={{marginTop:20}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/model1.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/model2.webp"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;