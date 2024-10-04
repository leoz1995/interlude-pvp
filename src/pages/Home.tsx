import '../view/css/home.css';

import { Banner } from '../components/Banner';
import { Section } from '../components/Section';

export function Home() {
  return (
    <>
      <Banner
        text=""
        imgUrl="/public/assets/images/renders/pvp.png"
        title="L2JBrasil"
        imgClass="image"
        webStatus={true}
      />
      <Section pageType="/" />
    </>
  );
}
