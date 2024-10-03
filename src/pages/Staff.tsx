import keithPhoto from '../assets/staff/staff-keith.jpeg';
import amandaPhoto from '../assets/staff/staff-amanda.jpeg';
import edsonPhoto from '../assets/staff/staff-tar.jpeg';
import aylaPhoto from '../assets/staff/staff-ayla.jpeg';
import vitoriaPhoto from '../assets/staff/staff-vicky.jpeg';
import alinePhoto from '../assets/staff/staff-aline.jpeg';
import eduardoPhoto from '../assets/staff/staff-dudu.jpeg';
import karinaPhoto from '../assets/staff/staff-karina.jpeg';

function Staff() {
  const staffNames: string[] = [
    'Keith Miamura',
    'Amanda Matsune',
    'Edson Gondo',
    'Ayla Shizue',
    'Vitória Secílio',
    'Aline Inoue',
    'Eduardo Gialdi',
    'Karina Kael'];
  
  const staffInfo: {[key: string]: {[key: string]: string}} = {
    'Keith Miamura': {photo: keithPhoto, role: 'Cabeleireiro'},
    'Amanda Matsune': {photo: amandaPhoto, role: 'Cabeleireiro'},
    'Edson Gondo': {photo: edsonPhoto, role: 'Cabeleireiro'},
    'Ayla Shizue': {photo: aylaPhoto, role: 'Cabeleireiro'},
    'Vitória Secílio': {photo: vitoriaPhoto, role: 'Cabeleireiro'},
    'Aline Inoue': {photo: alinePhoto, role: 'Auxiliar de Cabeleireiro'},
    'Eduardo Gialdi': {photo: eduardoPhoto, role: 'Auxiliar de Cabeleireiro'},
    'Karina Kael': {photo: karinaPhoto, role: 'Recepcionista'},
  }

  return (
    <>
      <h1 className='mt-10 text-gray-600 underline'>Nossa Equipe</h1>
      <p>
        Nosso espaço é acolhedor e nossa equipe está preparada para proporcionar uma experiência 
        única, combinando técnicas atuais com um atendimento cuidadoso, sempre respeitando o seu 
        tempo e as suas preferências.
      </p>

      <div>
        {staffNames.map((name) => (
          <div key={name}>
            <img src={staffInfo[name]['photo']} alt={name} width="150"/>
            <h2>{name}</h2>
            <p>{staffInfo[name]['role']}</p>
            <br/>
          </div>
        ))}
      </div>
    </>
  );
}

export default Staff;