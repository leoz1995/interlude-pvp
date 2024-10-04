import hopzone from '../../public/assets/images/footer/hopzone.jpg';
import l2jbrasil from '../../public/assets/images/footer/l2jbrasil.jpg';
import l2network from '../../public/assets/images/footer/l2network.jpg';
import topzone from '../../public/assets/images/footer/topzone.jpg';

interface ServerConfig {
  serverName?: string;
}
function voteserver(url: string) {
  window.open(url, '_blank');
}
export function Vote({ serverName }: ServerConfig) {
  const linkUrl = [
    { url: 'https://www.hopzone.com' },
    { url: 'https://www.l2jbrasil.com' },
    { url: 'https://www.l2network.com' },
    { url: 'https://www.topzone.com' },
  ];
  return (
    <>
      <div id="vote-box">
        <div id="vote_info">
          <h4>Vote no SERVIDOR</h4>
          <p>
            É com o seu voto que o nosso servidor CRESCE! Faça parte da FAMÍLIA
          </p>
          <h5>{serverName}</h5>
          <img
            onClick={() => voteserver(linkUrl[0].url)}
            className="top-img"
            src={hopzone}
            alt=""
          />
          <img
            onClick={() => voteserver(linkUrl[1].url)}
            className="top-img"
            src={l2jbrasil}
            alt=""
          />
          <img
            onClick={() => voteserver(linkUrl[2].url)}
            className="top-img"
            src={l2network}
            alt=""
          />
          <img
            onClick={() => voteserver(linkUrl[3].url)}
            className="top-img"
            src={topzone}
            alt=""
          />
        </div>
        <img
          className="voto_render"
          src="../public/assets/images/renders/vote.png"
          alt=""
        />
      </div>
    </>
  );
}
