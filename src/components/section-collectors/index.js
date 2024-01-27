// Constants
// Medias
import Thumb01 from "@/assets/img-nft/01.jpg";
import Thumb02 from "@/assets/img-nft/02.jpg";
import Thumb03 from "@/assets/img-nft/03.jpg";
import Thumb04 from "@/assets/img-nft/04.jpg";
import Thumb05 from "@/assets/img-nft/05.jpg";
import Thumb06 from "@/assets/img-nft/06.jpg";
import Thumb07 from "@/assets/img-nft/07.jpg";
import Thumb08 from "@/assets/img-nft/08.jpg";

export const cardsCollectors = [
  {
    thumbnail: Thumb01,
    percent: `+${Math.floor(Math.random() * 100) + 1}%`,
    name: `Cat #${Math.floor(Math.random() * 900) + 100}`,
    valueBtc: Math.round(Math.random() * 1000) / 10000,
  },
  {
    thumbnail: Thumb02,
    percent: `+${Math.floor(Math.random() * 100) + 1}%`,
    name: `Snike #${Math.floor(Math.random() * 900) + 100}`,
    valueBtc: Math.round(Math.random() * 1000) / 10000,
  },
  {
    thumbnail: Thumb03,
    percent: `+${Math.floor(Math.random() * 100) + 1}%`,
    name: `Hatter #${Math.floor(Math.random() * 900) + 100}`,
    valueBtc: Math.round(Math.random() * 1000) / 10000,
  },
  {
    thumbnail: Thumb04,
    percent: `+${Math.floor(Math.random() * 100) + 1}%`,
    name: `Sailor Skull #${Math.floor(Math.random() * 900) + 100}`,
    valueBtc: Math.round(Math.random() * 1000) / 10000,
  },
  {
    thumbnail: Thumb05,
    percent: `+${Math.floor(Math.random() * 100) + 1}%`,
    name: `Borey #${Math.floor(Math.random() * 900) + 100}`,
    valueBtc: Math.round(Math.random() * 1000) / 10000,
  },
  {
    thumbnail: Thumb06,
    percent: `+${Math.floor(Math.random() * 100) + 1}%`,
    name: `Sniper #${Math.floor(Math.random() * 900) + 100}`,
    valueBtc: Math.round(Math.random() * 1000) / 10000,
  },
  {
    thumbnail: Thumb07,
    percent: `+${Math.floor(Math.random() * 100) + 1}%`,
    name: `Dutre #${Math.floor(Math.random() * 900) + 100}`,
    valueBtc: Math.round(Math.random() * 1000) / 10000,
  },
  {
    thumbnail: Thumb08,
    percent: `+${Math.floor(Math.random() * 100) + 1}%`,
    name: `Borecx #${Math.floor(Math.random() * 900) + 100}`,
    valueBtc: Math.round(Math.random() * 1000) / 10000,
  },
];

// Components
import ContainerGrid from "@/components/container";
import TitleSection from "@/components/title-section";
import CardCollectors from "@/components/card-collectors";

export default function SectionCollectors() {
  // Divida o array de cards em duas partes
  const halfIndex = Math.ceil(cardsCollectors.length / 2);
  const leftColumn = cardsCollectors.slice(0, halfIndex);
  const rightColumn = cardsCollectors.slice(halfIndex);

  return (
    <section className="py-10 @desktop:py-28">
      <ContainerGrid>
        <TitleSection
          subtitle="Colecionadores em Foco"
          title="Principais colecionadores"
        />
        <div className="flex flex-col @tablet:flex-row gap-4 ">
          <div className="w-full space-y-4">
            {leftColumn.map((card, index) => (
              <CardCollectors key={index} index={index + 1} {...card} />
            ))}
          </div>
          <div className="w-full space-y-4">
            {rightColumn.map((card, index) => (
              <CardCollectors
                key={index + halfIndex}
                index={index + halfIndex + 1}
                {...card}
              />
            ))}
          </div>
        </div>
      </ContainerGrid>
    </section>
  );
}
