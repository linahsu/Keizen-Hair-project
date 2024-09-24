import salaDeCorte from '../assets/sala-de-corte.jpg';

function Home() {
    return (
        <>
           <h1>Seja Bem-vindo ao Keizen Hair!</h1>
           <h2>Cuidamos de você em um ambiente acolhedor, onde sua #beleza natural é realçada com técnicas que facilitam o seu dia a dia</h2>
           <img src={salaDeCorte} alt='Sala de corte' width='50%'/>
        </>
    )
}

export default Home;