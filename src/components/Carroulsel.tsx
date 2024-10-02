import entrada from '../assets/home-images/entrada-1.jpeg';
import lavatorio from '../assets/home-images/lavatorio-1.jpg';
import salaDeCorte1 from '../assets/home-images/sala-de-corte-1.jpeg';
import salaDeCorte2 from '../assets/home-images/sala-de-corte-2.jpg';
import passagem from '../assets/home-images/passagem-1.jpeg';
import recepcao1 from '../assets/home-images/recepção-1.jpeg';
import recepcao2 from '../assets/home-images/recepção-2.jpg';
import { useState, useEffect } from 'react';
import './Carroulsel.css';

const homeImages: string[] = [entrada, lavatorio, salaDeCorte1, salaDeCorte2, passagem, recepcao1, recepcao2];

function Carroulsel({ images = homeImages, interval = 3500 }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para mudar para a próxima imagem
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // UseEffect para alterar automaticamente a imagem a cada intervalo de tempo
  useEffect(() => {
    const slideInterval = setInterval(goToNextSlide, interval);
    return () => clearInterval(slideInterval); // Limpa o intervalo ao desmontar o componente
  }, [currentIndex, interval]);

  return (
    <div className="slider-container">
      <div className="slider">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image" />
      </div>
    </div>
  );
}

export default Carroulsel;