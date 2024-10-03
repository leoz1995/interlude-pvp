import { useSpring, animated } from '@react-spring/web';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PortServer {
  portStatus?: boolean[]; // Mudado para um array de booleanos
  totalOnlinePlayers?: number;
}
interface PageProps {
  imgUrl?: string;
  title: string;
  text: string;
  imgClass: string;
  webStatus?: boolean;
}
export function Banner({
  imgUrl,
  title,
  text,
  imgClass,
  webStatus,
}: PageProps) {
  const [server, setServer] = useState<PortServer>({});

  useEffect(() => {
    // Função para buscar o status do servidor
    const fetchStatus = () => {
      axios
        .get('http://localhost:4000/getStatus')
        .then((response) => {
          const { players, portStatus } = response.data;
          setServer({
            portStatus: portStatus,
            totalOnlinePlayers: players,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };

    // Busca o status ao carregar o componente
    fetchStatus();

    // Atualiza o status a cada 5 segundos
    const interval = setInterval(() => {
      fetchStatus();
    }, 5000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, []); // Dependência vazia para executar apenas uma vez após o componente montar

  // Configuração da animação
  const formSpring = useSpring({
    from: { opacity: 0, transform: 'translateX(-100vw)' },
    to: {
      opacity: 1,
      transform: imgUrl ? 'translateX(0)' : 'translateX(35)', // Ajuste do transform para centralizar verticalmente
    },
    config: { tension: 100, friction: 15 },
  });
  // Determinar o status geral das portas
  const overallPortStatus =
    server.portStatus?.every((status) => status) || false;

  // Condição para adicionar a classe full-width ao texto
  const textContainerStyle = imgUrl ? {} : { width: '100%' };

  // Condição para adicionar a classe hide-img ao img
  const imgClassName = imgUrl ? imgClass : `${imgClass} hide-img`;

  return (
    <animated.nav style={formSpring}>
      <div className={`banner`}>
        <img src={imgUrl || ''} className={imgClassName} alt="Banner" />
        <div
          id="home-conteiner-text"
          style={textContainerStyle} // Aplica o estilo condicionalmente
        >
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        {webStatus && ( // Renderiza o bloco de status apenas se webStatus for true
          <div id={`home-conteiner-status`}>
            <h1>STATUS DO SERVIDOR</h1>
            <motion.h2
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1.3, opacity: 0.8 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{ color: overallPortStatus ? '#24d124' : 'red' }}
            >
              {overallPortStatus ? 'ONLINE' : 'OFFLINE'}
            </motion.h2>
            <h1>PLAYERS ONLINE</h1>
            <motion.h2
              initial={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                color: server.totalOnlinePlayers ? '#24d124' : 'red',
              }}
            >
              {server.totalOnlinePlayers !== undefined
                ? `${server.totalOnlinePlayers} `
                : '0'}
            </motion.h2>
          </div>
        )}
      </div>
    </animated.nav>
  );
}
