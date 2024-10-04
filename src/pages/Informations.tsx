import { Banner } from '../components/Banner';
import { Section } from '../components/Section';

export function Informations() {
  return (
    <>
      <Banner
        text=""
        imgUrl="/assets/images/renders/info.png"
        title="L2JBrasil Comunidade"
        imgClass="image"
        webStatus={false}
      />
      <Section pageType="pages/Informations" />
    </>
  );
}
