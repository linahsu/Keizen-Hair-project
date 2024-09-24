import salaDeCorte from '../assets/sala-de-corte.jpg';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="text-container">
          <h1>Bem-vindo ao Keizen Hair!</h1>
          <h2>
            Cuidamos de você em um ambiente acolhedor, onde sua 
            <span className="highlight"> #beleza natural</span> é realçada com 
            técnicas que facilitam o seu dia a dia.
          </h2>
        </div>
        <img src={salaDeCorte} alt='Sala de corte' width='50%' />
      </div>
      <Footer />
    </>
  )
}

export default Home;