import entrance from '../assets/missao-visao.jpg'
import Footer from '../components/Footer';

function About() {
  return (
    <div>
      <div className='mb-10 flex items-center'>

        <div className=''>
          <h1 className='mt-5 mb-10 text-aquamarine font-bold text-5xl font-caveat'>Nossa Missão e Visão</h1>

          <p className='mr-5 font-caveat text-3xl'>
            No Keizen Hair, acreditamos que a beleza verdadeira está na simplicidade e na naturalidade.
            Somos um salão de beleza com um ambiente acolhedor, cuidadosamente decorado com elementos
            rústicos e muitas plantas, criando um espaço onde cada cliente se sente em casa.
            <br /><br />
            Nosso objetivo é realçar sua beleza natural, oferecendo serviços que facilitam o seu dia
            a dia e valorizam a sua autenticidade. Com uma equipe dedicada ao seu bem-estar, proporcionamos
            cuidados personalizados que permitem que você mantenha um look elegante e prático, sempre
            focado na simplicidade e facilidade para sua rotina diária.
            <br /><br />
            Aqui no Keizen Hair, não tratamos apenas de estética, mas de proporcionar uma experiência de
            cuidado e conforto. Cada detalhe do nosso atendimento reflete a nossa missão de tornar sua
            rotina de beleza mais leve, com resultados que você pode manter facilmente em casa.
          </p>
        </div>

        <img
          className='w-[600px] h-[800px] object-cover rounded-2xl'
          src={entrance}
          alt='Entrada Keizen com a nossa querida Missô'
        />

      </div>

      <Footer />
    </div>
  );
}

export default About;
