import '../view/css/informations.css';
import '../view/css/rankings.css';

import sWeaponImage from '../../public/assets/images/informations/s-weapon.png';
import sArmorImage from '../../public/assets/images/informations/s-armor.png';
import aArmorImage from '../../public/assets/images/informations/a-armor.png';
import aWeaponImage from '../../public/assets/images/informations/a-weapon.png';
import bArmorImage from '../../public/assets/images/informations/b-armor.png';
import bWeaponImage from '../../public/assets/images/informations/b-weapon.png';

import baium from '../../public/assets/images/informations/baium.png';
import antharas from '../../public/assets/images/informations/antharas.png';
import valakas from '../../public/assets/images/informations/valakas.png';
import queenant from '../../public/assets/images/informations/queenant.png';
import zaken from '../../public/assets/images/informations/zaken.png';

import cov from '../../public/assets/images/informations/cov.png';
import magnus from '../../public/assets/images/informations/magnus.png';
import noblesse from '../../public/assets/images/informations/noblesse.png';
import profice from '../../public/assets/images/informations/profice.png';
import song from '../../public/assets/images/informations/song.png';

import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AnimatedCard from './AnimatedCard';

interface PageProps {
  pageType?: '/' | 'pages/Informations';
}
interface Ranking {
  char_name: string;
  online: number;
  pvpkills?: number;
  pkkills?: number;
}

export function Section({ pageType }: PageProps) {
  const [topPvpkills, setTopPvpkills] = useState<Ranking[]>([]);
  const [topPkkills, setTopPkkills] = useState<Ranking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Animation setup
  const formSpring = useSpring({
    from: { opacity: 0, transform: 'translateX(-100vw)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { tension: 100, friction: 15 },
    delay: 700, // Delay for formSpring
  });
  useEffect(() => {
    const fetchStatus = () => {
      axios
        .get('http://localhost:4000/getRanking')
        .then((response) => {
          const { topPvpkills, topPkkills } = response.data;
          setTopPvpkills(topPvpkills);
          setTopPkkills(topPkkills);
          setLoading(false);
        })
        .catch((e) => {
          console.error('Erro ao conectar com a API:', e);
          setError('Erro ao conectar com a API.');
          setLoading(false);
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
  }, []);

  const slides = [
    {
      title: 'Top PvP Kills',
      data: topPvpkills,
      keyPrefix: 'pvp',
    },
    {
      title: 'Top PK Kills',
      data: topPkkills,
      keyPrefix: 'pk',
    },
  ];

  if (loading) {
    return (
      <div>
        <h1>Loading</h1>...
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }

  // Function to handle card click
  // const handleCardClick = (title: string) => {
  //   alert(`Você clicou em ${title}`);
  // };

  return (
    <>
      {pageType === 'pages/Informations' && (
        <motion.div
          id="informations"
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          exit={{ x: 0, opacity: 0 }}
        >
          <AnimatedCard className="card_info rate" title="Informations">
            <div className="infobox">
              <h1>Buffs</h1>
              <div id="server_imgs">
                <img src={cov} alt="Buffs" />
                <img src={profice} alt="Buffs" />
                <img src={magnus} alt="Buffs" />
                <img src={noblesse} alt="Buffs" />
                <img src={song} alt="Buffs" />
              </div>
              <div id="server_content">
                <p>Auto-Learn-Skills</p>
                <p>Npc Buffs 30 min</p>
                <p>AIO Character Buffs 120 min</p>
                <p>Noblesse AIO Character or Quest's</p>
                <p>Slots Buffs 20+4 Divine Books</p>
              </div>
              <h1>Drops</h1>
              <div id="server_imgs">
                <img src={baium} alt="Jewell" />
                <img src={antharas} alt="Jewell" />
                <img src={valakas} alt="Jewell" />
                <img src={zaken} alt="Jewell" />
                <img src={queenant} alt="Jewell" />
              </div>
              <div id="server_content">
                <p>Especial Raids Drop - 100%</p>
                <p>Random 12/24/36/48h</p>
                <p>Quests Itens in NPC.</p>
              </div>
              <h1>Enchants</h1>
              <div id="server_imgs">
                <img src={sWeaponImage} alt="Weapon" />
                <img src={sArmorImage} alt="Weapon" />
                <img src={aWeaponImage} alt="Weapon" />
                <img src={aArmorImage} alt="Weapon" />
                <img src={bWeaponImage} alt="Weapon" />
                <img src={bArmorImage} alt="Weapon" />
              </div>
              <div id="server_content">
                <p>
                  Normal enchant Weapon: Safe +3 Max +21 Decreassed -5% Next
                  Enchant(Chance of Crystalization items )
                </p>
                <p>
                  Normal enchant Armor/Jewels: Safe +3 Max +13 Decreassed -10%
                  Next Enchant(Chance of Crystalization items)
                </p>
                <p>
                  Blessed enchant Weapon/Armor/Jewels: Safe +3 Max +13 -10% Next
                  Enchant Faillure to +0 items
                </p>
              </div>
            </div>
          </AnimatedCard>
          <AnimatedCard className="card_info event" title="Eventos">
            <h1>Team vs Team</h1>
            <span>Informações sobre o seu TVT</span>
            <h1>Capture The Flag</h1>
            <span>Informações sobre o seu TVT</span>
            <h1>Death Math</h1>
            <span>Informações sobre o seu TVT</span>
          </AnimatedCard>
          <AnimatedCard className="card_info rules" title="Regras">
            <p>
              01. Sempre tratar todos os Administradores, Game Masters e membros
              da administração com respeito. Qualquer ato de desrespeito à
              administração, independentemente do meio de comunicação, resultará
              em punição.
            </p>
            <p>
              02. É proibido personificar (fingir ser) qualquer membro da
              administração.
            </p>
            <p>
              03. Publicidade, comentários ou sugestões de qualquer outro
              servidor de Lineage é proibida em qualquer chat do jogo ou outros
              meios de comunicação ligados a nós.
            </p>
            <p>
              04. É proibido o uso de programas que interajam com o Lineage 2,
              exploits ou se aproveitar de qualquer tipo de problema encontrado
              no jogo, no fórum ou no site que irá beneficiá-lo em relação a
              outros jogadores. Se um jogador descobre um bug (problema/falha)
              no jogo, fórum ou site deve comunicar imediatamente à
              administração.
            </p>
            <p>
              05. Nunca solicite níveis, itens, adena, teleport ou qualquer
              benefício à qualquer membro da administração porque você não serão
              respondido.
            </p>
            <p>
              06. Sua conta é pessoal e intransmissível, isso significa que você
              é responsável por sua própria segurança no jogo. Nunca forneça sua
              senha para qualquer outra pessoa, incluindo a administração.
              Certifique-se de que o computador usado para jogar é seguro. Nunca
              execute programas extras de interatividade com seu Lineage 2, que
              não foi fornecido pela administração, pois podem conter vírus e
              keyloguers que irão resultar no roubo de suas contas de usuário
              e/ou itens. A administração não se responsabiliza por qualquer
              roubo, itens dropados ou destruídos. A administração garante a
              integridade completa e segurança do servidor e, portanto, não são
              possíveis invasões hacks para roubar itens ou contas diretamente
              no servidor, site ou fórum, em outras palavras, qualquer tipo de
              roubo são causados por descuido ou má utilização dos usuários.
            </p>
            <p>
              07. Todos os dados do usuário (sua veracidade e manutenção) são da
              exclusiva responsabilidade do usuário. Cuide de seus dados e
              mantenha sua conta de e-mail ativa pois é necessária para
              recuperar sua senha se você esquecê-la. A administração não se
              responsabiliza por dados esquecidos, perdidos, suprimidos ou
              cancelados por qualquer motivo.
            </p>
            <p>
              08. É proibido ofender outros jogadores com palavras de baixo
              calão, nomes depreciativos e ofensivos, ofensas pornográficas,
              racistas e outros no Chat Global e quaisquer outros meios de
              comunicação fornecidos por nossa equipe. Em chats in-game utilize
              o comando /block para não ver mensagens de personagens
              indesejados. Use o chat hero com sabedoria, pois envolve a leitura
              de todo o servidor. Também é proibido o uso de qualquer bate-papo
              para incitar ou manipular os jogadores do servidor contra a
              administração.
            </p>
            <p>
              09. Jogadores que acusem, sem provas, a administração de
              favorecimento de outros jogadores serão severamente punidos. A
              administração não vai permitir que maus jogadores manchem a imagem
              do servidor pelo fato de serem maus perdedores.
            </p>
            <p>
              10. Qualquer ação dentro do jogo que a administração julgue
              anti-jogo (ações consideradas impróprias ou de mau caráter) também
              resultarão em punições, como por exemplo: perder propositalmente
              na Grand Olympiad para dar pontos a outro personagem; romper ou
              tentar enganar de forma alguma os eventos automáticos ou
              realizados pela administração; Tentar enganar outros jogadores
              oferecendo itens falsos.
            </p>
          </AnimatedCard>
        </motion.div>
      )}

      {pageType === '/' && (
        <>
          <animated.h1 style={formSpring} className="page-title">
            ESTATÍSTICAS
          </animated.h1>
          <div id="estatisticas">
            {slides.map((slide, slideIndex) => (
              <motion.div
                key={slideIndex}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 0.8 }}
                exit={{ x: 200 + 'vw', opacity: 0 }}
                className="card"
              >
                <h4 className="ranking-title">{slide.title}</h4>
                <table className="ranking-table">
                  <thead>
                    <tr>
                      <th>Position</th>
                      <th>Player</th>
                      <th>Kills</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slide.data.slice(0, 5).map((rank, index) => {
                      let positionImage = '';
                      if (index === 0) positionImage = '1st.png';
                      else if (index === 1) positionImage = '2nd.png';
                      else if (index === 2) positionImage = '3rd.png';

                      return (
                        <tr key={`${slide.keyPrefix}-${index}`}>
                          <td>
                            <center>
                              {positionImage ? (
                                <img
                                  src={`/src/assets/images/ranking/${positionImage}`}
                                  alt={`Rank ${index + 1}`}
                                  className="position-image"
                                />
                              ) : (
                                index + 1
                              )}
                            </center>
                          </td>
                          <td>{rank.char_name}</td>
                          <td>
                            <center>
                              {slide.keyPrefix === 'pvp'
                                ? rank.pvpkills
                                : rank.pkkills}
                            </center>
                          </td>
                          <td
                            style={{ color: rank.online ? '#24d124' : 'red' }}
                          >
                            {rank.online ? 'ON' : 'OFF'}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
