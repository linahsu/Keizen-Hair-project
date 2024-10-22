import video from '../assets/site.mp4';
import mapa from '../assets/mapa.jpg';
import Footer from '../components/Footer';
import Carroulsel from '../components/Carroulsel';

function Home() {
  return (
    <>
      <div className="m-0 mx-auto relative">
      
        <div
          className="
            m-0 mx-auto md:mt-10 mb-[50px] md:mb-[59%]
            md:rounded-3xl 
            relative 
            flex
            "
        >
          <div
            className="
              hidden md:block
              ml-20 mt-20
              absolute z-20
              w-2/4
              font-caveat
              "
            >
            <h1 className="font-extrabold text-6xl text-aquamarine" >Bem-vindos ao Keizen Hair!</h1>
            <h2 className="mt-3 text-4xl" >
              Cuidamos de você em um ambiente acolhedor, onde sua 
              <span className="text-5xl text-aquamarine font-bold"> #beleza natural</span> é realçada com 
              técnicas que facilitam o seu dia a dia.
            </h2>
          </div>

          <div className="md:hidden z-20 font-caveat text-center">
            <h1 className="font-extrabold text-5xl text-aquamarine w-[70%] mx-auto mt-[20%]" >Bem-vindos ao Keizen Hair!</h1>
            <h2 className="font-caveat text-4xl mx-auto w-[90%] mt-[25%]" >
                Cuidamos de você em um ambiente acolhedor, onde sua 
                <span className="text-5xl text-aquamarine font-bold"> #beleza natural</span> é realçada com 
                técnicas que facilitam o seu dia a dia.
            </h2>
          </div>

          <video
            className="
              w-full 
              h-auto
              absolute
              md:rounded-xl 
              opacity-60
            "
            autoPlay loop muted
          >
            <source src={video} type="video/mp4"/>
          </video>
        </div>

        <div className="flex flex-col md:flex-row items-center w-full">
          <Carroulsel/>
          <div className="md:flex justify-center items-center">
            <a
              href="https://www.google.com/maps/place/KEIZEN+by+KEITH+MIAMURA/@-23.6071083,-46.6369541,17z/data=!4m6!3m5!1s0x94ce5a4a3c24cddb:0x8fb38c98f97a70a7!8m2!3d-23.6064437!4d-46.63498!16s%2Fg%2F11c43mvfhr?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
              target='_blank'
              rel='noreferrer noopener'
            >
              <img className="mx-auto md:mx-5 my-10 md:my-0 rounded-lg w-[50%] md:w-72"  src={mapa} alt='Mapa' />
            </a>
            <div className='mx-auto md:mx-10 w-[90%] md:w-144 text-center md:text-start'>
              <h2 className="mb-6 md:mb-2 text-3xl md:text-lg font-bold text-[#ff6347] underline">Aonde estamos?</h2>
              <p>
                Estamos na rua Afonso Celso, 1679, Vila Mariana. 
                A 700m do <span className='font-bold text-[#ff6347]'>metro Praça da Árvore</span>, 
                leva cerca de 10 minutinhos a pé. Caso esteja de carro, a rua é tranquila 
                e é fácil achar uma vaga.
              </p>
            </div>
          </div>
        </div>
      
      </div>
        <Footer />
    </>
  )
}

export default Home;