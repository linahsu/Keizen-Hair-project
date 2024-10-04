import Footer from "../components/Footer";

function Services() {
  return (
    <div>
      <h1 className='mt-5 mb-10 text-center text-aquamarine font-bold text-5xl font-caveat'>Nossos Serviços</h1>
      
      <div className="mb-10 flex items-center">
        <p className='text-xl w-2/4 mr-10'>
          No nosso salão, acreditamos que a verdadeira beleza está em realçar o que você tem de mais 
          natural, proporcionando um cuidado que valoriza sua individualidade. Oferecemos uma ampla 
          gama de serviços pensados para facilitar sua rotina, sem abrir mão do seu bem-estar e da sofisticação.
        <br/><br/>
          Desde cortes modernos e tratamentos capilares personalizados, até colorações que respeitam a saúde 
          dos fios, tudo é feito com atenção aos detalhes e às suas necessidades. Para nós, beleza é sinônimo 
          de leveza, por isso criamos looks práticos e descomplicados que refletem o seu estilo, permitindo 
          que você se sinta confiante e radiante todos os dias.
        </p>

        <ul className='text-xl w-2/4 border-2 border-aquamarine py-12 px-10 rounded-2xl bg-black'>
          <li>✂️ Corte Masculino</li>
          <li>✂️ Corte Feminino</li>
          <li>✂️ Corte Infantil</li>
          <li>✂️ Modelagem capilar: Escova, Prancha, Babyliss</li>
          <li>✂️ Coloração com tinta ou tonalizante</li>
          <li>✂️ Reflexo</li>
          <li>✂️ Ombré Hair</li>
          <li>✂️ Decapagem</li>
          <li>✂️ Mechas</li>
          <li>✂️ Permanente</li>
          <li>✂️ Hidratação simples ou profunda</li>
          <li>✂️ Reconstrução Capilar</li>
          <li>✂️ Botox ou Selagem</li>
          <li>✂️ Progressiva</li>
        </ul>
      </div>

      <Footer />
    </div>

  )
}

export default Services;
