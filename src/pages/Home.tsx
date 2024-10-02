import salaDeCorte from '../assets/sala-de-corte.jpg';
import mapa from '../assets/mapa.jpg';
import Footer from '../components/Footer';
import Carroulsel from '../components/Carroulsel';
import './Home.css';

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="text-container">
          <h1>Bem-vindo ao Studio Keizen!</h1>
          <h2>
            Cuidamos de você em um ambiente acolhedor, onde sua 
            <span className="highlight"> #beleza natural</span> é realçada com 
            técnicas que facilitam o seu dia a dia.
          </h2>
        </div>
        <img src={salaDeCorte} alt='Sala de corte' width='50%' />
      </div>

      <Carroulsel />

      <div className="map-container">
        <a
          className="map"
          href="https://www.google.com/maps/place/KEIZEN+by+KEITH+MIAMURA/@-23.6071083,-46.6369541,17z/data=!4m6!3m5!1s0x94ce5a4a3c24cddb:0x8fb38c98f97a70a7!8m2!3d-23.6064437!4d-46.63498!16s%2Fg%2F11c43mvfhr?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
          target='_blank'
          rel='noreferrer noopener'
        >
          <img src={mapa} alt='Mapa' />
        </a>
        <div className='map-text'>
          <h2>Aonde estamos?</h2>
          <p>
            Estamos na rua Afonso Celso, 1679, Vila Mariana. 
            A 700m do <span className='metro-highlight'>metro Praça da Árvore</span>, 
            leva cerca de 10 minutinhos a pé. Caso esteja de carro, a rua é tranquila 
            e é fácil achar uma vaga.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;