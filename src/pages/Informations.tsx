import { Banner } from '../components/Banner';
import { Section } from '../components/Section';

export function Informations() {
  return (
    <>
      <Banner
        text=""
        imgUrl="../public/assets/images/renders/info.png"
        title="Server - Informations"
        imgClass="image"
        webStatus={false}
      />
      <Section pageType="pages/Informations" />
    </>
  );
}
