import keithPhoto from '../assets/staff/staff-keith.jpeg';
import amandaPhoto from '../assets/staff/staff-amanda.jpeg';
import edsonPhoto from '../assets/staff/staff-tar.jpeg';
import aylaPhoto from '../assets/staff/staff-ayla.jpeg';
import vitoriaPhoto from '../assets/staff/staff-vicky.jpeg';
import alynePhoto from '../assets/staff/staff-alyne.jpeg';
import eduardoPhoto from '../assets/staff/staff-dudu.jpeg';
import karinaPhoto from '../assets/staff/staff-karina.jpeg';
import Footer from '../components/Footer';

function Staff() {
  const staffNames: string[] = [
    'Keith Miamura',
    'Amanda Matsune',
    'Edson Gondo',
    'Ayla Shizue',
    'Vitória Secílio',
    'Alyne Inoue',
    'Eduardo Gialdi',
    'Karina Kael'];
  
  const staffInfo: {[key: string]: {[key: string]: string}} = {
    'Keith Miamura': {photo: keithPhoto, role: 'Cabeleireiro'},
    'Amanda Matsune': {photo: amandaPhoto, role: 'Cabeleireiro'},
    'Edson Gondo': {photo: edsonPhoto, role: 'Cabeleireiro'},
    'Ayla Shizue': {photo: aylaPhoto, role: 'Cabeleireiro'},
    'Vitória Secílio': {photo: vitoriaPhoto, role: 'Cabeleireiro'},
    'Alyne Inoue': {photo: alynePhoto, role: 'Auxiliar de Cabeleireiro'},
    'Eduardo Gialdi': {photo: eduardoPhoto, role: 'Auxiliar de Cabeleireiro'},
    'Karina Kael': {photo: karinaPhoto, role: 'Recepcionista'},
  }

  return (
    <div className="mt-[25%] md:mt-0">
      <h1 className='mt-5 mb-10 text-center text-aquamarine font-bold text-5xl font-caveat'>Nossa Equipe</h1>
      <p className='mx-5 md:mx-0 mb-10 text-center font-caveat text-3xl' >
        Nosso espaço é acolhedor e nossa equipe está preparada para proporcionar uma experiência 
        única, combinando técnicas atuais com um atendimento cuidadoso, sempre respeitando o seu 
        tempo e as suas preferências.
      </p>

      <div className='flex-wrap flex row justify-evenly'>
        {staffNames.map((name) => (
          <div
            key={name}
            className='
              w-80
              m-4
              flex-wrap
              bg-black
              border-2 border-aquamarine
              rounded-2xl
              pt-6
            '
          >
            <img
              className='
                mx-auto mt-2
                rounded-full
                h-60 w-60
                object-cover
              '
              src={staffInfo[name]['photo']}
              alt={name}
            />
            <h2 className='mt-3 text-center text-aquamarine font-bold text-3xl font-caveat'>{name}</h2>
            <p className='text-center font-caveat text-2xl'>{staffInfo[name]['role']}</p>
            <br/>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Staff;