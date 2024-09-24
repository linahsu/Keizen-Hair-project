import whatsappIcon from '../assets/64px-WhatsApp_icon.png';
import './Footer.css';

function Footer() {
  const whatsappLink = 'https://wa.me/5511978149428';

  return (
    <footer>
      <a className='whatsapp-icon' href={whatsappLink} target="_blank">
        <img src={whatsappIcon} alt='Whatsapp Icon' />
      </a>

      <div className='footer-info'>
        <p>Rua Afonso Celso, 1679 - Vila Mariana</p>
        <p>Telefone: (11) 5572-4625</p>
        <p>Whatsapp: (11) 97814-9428</p>
      </div>

      <p className='copyright'>&copy; 2024 Lina Hsu. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
