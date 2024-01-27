import ContainerGrid from "@/components/container";
import { TitleSection } from "@/components/title-section";
import CardNft from "@/components/card-nft";
import CardCollector from "@/components/card-collectors";
import SectioHero from "@/components/section-hero";
import SectionCarrousel from "@/components/section-carrousel";
import SectionCollectors from "@/components/section-collectors";
import SectionBanner from "@/components/section-banner";

import Thumb01 from "@/assets/img-nft/01.jpg";
import Thumb02 from "@/assets/img-nft/02.jpg";
import Thumb03 from "@/assets/img-nft/03.jpg";
import Thumb04 from "@/assets/img-nft/04.jpg";
import Thumb05 from "@/assets/img-nft/05.jpg";
import Thumb06 from "@/assets/img-nft/06.jpg";
import Thumb07 from "@/assets/img-nft/07.jpg";
import Thumb08 from "@/assets/img-nft/08.jpg";
import SectionQuestions from "@/components/section-questions";

export const cardsCollectors = [
  {
    thumbnail: Thumb01,
    percent: `+${Math.floor(Math.random() * 100) + 1}%`,
    name: `Cat #${Math.floor(Math.random() * 900) + 100}`,
    valueBtc: Math.round(Math.random() * 1000) / 10000,
    valueBrl: Math.round(Math.random() * 1000),
    creator: "Arlly",
  },
  {
    thumbnail: Thumb02,
    percent: `+${Math.floor(Math.random() * 100) + 1}%`,
    name: `Snike #${Math.floor(Math.random() * 900) + 100}`,
    valueBtc: Math.round(Math.random() * 1000) / 10000,
    valueBrl: Math.round(Math.random() * 1000),
    creator: "Agebaba",
  },
  {
    thumbnail: Thumb03,
    percent: `+${Math.floor(Math.random() * 100) + 1}%`,
    name: `Hatter #${Math.floor(Math.random() * 900) + 100}`,
    valueBtc: Math.round(Math.random() * 1000) / 10000,
    valueBrl: Math.round(Math.random() * 1000),
    creator: "MasterOfOblivion",
  },
  {
    thumbnail: Thumb04,
    percent: `+${Math.floor(Math.random() * 100) + 1}%`,
    name: `Sailor Skull #${Math.floor(Math.random() * 900) + 100}`,
    valueBtc: Math.round(Math.random() * 1000) / 10000,
    valueBrl: Math.round(Math.random() * 1000),
    creator: "Arlly",
  },
  {
    thumbnail: Thumb05,
    percent: `+${Math.floor(Math.random() * 100) + 1}%`,
    name: `Borey #${Math.floor(Math.random() * 900) + 100}`,
    valueBtc: Math.round(Math.random() * 1000) / 10000,
    valueBrl: Math.round(Math.random() * 1000),
    creator: "Mamamia",
  },
  {
    thumbnail: Thumb06,
    percent: `+${Math.floor(Math.random() * 100) + 1}%`,
    name: `Sniper #${Math.floor(Math.random() * 900) + 100}`,
    valueBtc: Math.round(Math.random() * 1000) / 10000,
    valueBrl: Math.round(Math.random() * 1000),
    creator: "Kurumin",
  },
  {
    thumbnail: Thumb07,
    percent: `+${Math.floor(Math.random() * 100) + 1}%`,
    name: `Dutre #${Math.floor(Math.random() * 900) + 100}`,
    valueBtc: Math.round(Math.random() * 1000) / 10000,
    valueBrl: Math.round(Math.random() * 1000),
    creator: "Ahoy",
  },
  {
    thumbnail: Thumb08,
    percent: `+${Math.floor(Math.random() * 100) + 1}%`,
    name: `Borecx #${Math.floor(Math.random() * 900) + 100}`,
    valueBtc: Math.round(Math.random() * 1000) / 10000,
    valueBrl: Math.round(Math.random() * 1000),
    creator: "Baby",
  },
];

export default function Home() {
  return (
    <>
      <SectioHero />
      <SectionCarrousel
        subtitle="Destaque em Coleções"
        title="Coleções notáveis"
        data={cardsCollectors}
      />
      <hr className="border-t border-white border-opacity-5 max-w-grid mx-auto" />
      <SectionCarrousel
        subtitle="Seleção Mensal"
        title="Destaque do Mês"
        data={cardsCollectors}
      />
      <SectionCollectors />
      <hr className="border-t border-white border-opacity-5 max-w-grid mx-auto" />
      <SectionCarrousel
        subtitle="Em Tendência"
        title="Tendências"
        data={cardsCollectors}
      />
      <SectionBanner />
      <SectionQuestions />
    </>
  );
}
