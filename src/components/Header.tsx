import { useSpring, animated } from '@react-spring/web';
import '../view/css/header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  // Define as propriedades dos botões e calcula animações com atraso
  const buttons = [
    { text: 'Home', href: '/' },
    { text: 'Informações', href: '/pages/Informations' },
    { text: 'Criar Conta', href: '/pages/Register' },
    { text: 'Downloads', href: '/pages/Downloads' },
    { text: 'Donate', href: '/pages/Donate' },
  ];
  // Cria animações para cada botão com atraso
  const buttonSprings = buttons.map((_, index) =>
    useSpring({
      from: { opacity: 0, transform: 'translateY(-30vw)' },
      to: { opacity: 1, transform: 'translateY(2vw)' },
      config: { tension: 50, friction: 15 },
      delay: index * 250, // Atraso entre animações dos botões
    }),
  );

  return (
    <header>
      <div id="animated_menu">
        {buttons.map((button, index) => (
          <animated.button
            key={button.text}
            style={buttonSprings[index]} // Aplica a animação correspondente ao botão
          >
            <Link to={button.href} className="button-link">
              {button.text}
            </Link>
          </animated.button>
        ))}
      </div>
    </header>
  );
}
