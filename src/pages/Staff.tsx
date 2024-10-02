function Staff() {
  const staffNames: string[] = ['Keith Miamura', 'Amanda Matsune', 'Edson Gondo', 'Ayla Shizue', 'Vitória Secílio'];
  const staffPhotos: {[key: string]: string} = {
    'Keith Miamura': 'Keith é o fundador do nosso espaço e é especialista em cortes, colorações e tratamentos capilares.',
    'Amanda Matsune': 'Amanda é especialista em penteados e maquiagem, com experiência em eventos e produções.',
    'Edson Gondo': 'Edson é especialista em cortes e tratamentos capilares, com foco em cabelos crespos e cacheados.',
    'Ayla Shizue': 'Ayla é especialista em colorações e tratamentos capilares, com foco em cabelos loiros e ruivos.',
    'Vitória Secílio': 'Vitória é especialista em cortes e penteados, com foco em cabelos curtos e médios.'
  }

  return (
    <>
      <h1>Nossa Equipe</h1>
      <p>
        Nosso espaço é acolhedor e nossa equipe está preparada para proporcionar uma experiência 
        única, combinando técnicas atuais com um atendimento cuidadoso, sempre respeitando o seu 
        tempo e as suas preferências.
      </p>

      <div>
        {staffNames.map((name) => (
          <div key={name}>
            <img src={staffPhotos[name]} alt={name} />
            <h2>{name}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default Staff;