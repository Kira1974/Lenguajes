
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const ImageSlider = () => {
  return (
    <Carousel>
      <div className='slider'>
      <img className='first-image' src="src/img/nose.jpg" alt="Imagen 1" />
        </div>
  
      <div>
        <img src="src/img/costeña.jpg" alt="Imagen 2" />
      </div>
      {/* Agrega más imágenes según sea necesario */}
    </Carousel>
  );
};

export default ImageSlider;
