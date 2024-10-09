import entrada from '../assets/home-images/entrada-1.jpeg';
import lavatorio from '../assets/home-images/lavatorio-1.jpg';
import salaDeCorte1 from '../assets/home-images/sala-de-corte-1.jpeg';
import salaDeCorte2 from '../assets/home-images/sala-de-corte-2.jpg';
import passagem from '../assets/home-images/passagem-1.jpeg';
import recepcao1 from '../assets/home-images/recepção-1.jpeg';
import recepcao2 from '../assets/home-images/recepção-2.jpg';
import { useState, useEffect } from 'react';
// import './Carroulsel.css';

const homeImages: string[] = [entrada, lavatorio, salaDeCorte1, salaDeCorte2, passagem, recepcao1, recepcao2];

function Carroulsel({ images = homeImages, interval = 3500 }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(goToNextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [currentIndex, interval]);

  return (
    <div className="relative w-[550px] md:w-[570px] h-[600px] md:h-[600px] flex justify-center items-center overflow-auto">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`
            absolute inset-0
            w-full h-full
            object-cover 
            md:rounded-2xl
            transition-opacity duration-1000
            ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
            }
          `}
        />
      ))}
    </div>
  );
}

export default Carroulsel;