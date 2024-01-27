import ContainerGrid from "./container";
import TitleSection from "./title-section";

import CarrouselCards from "./carrousel-cards";

export function SectionCarrousel({ subtitle, title, data }) {
  return (
    <section
      classtitle="
    @desktop:py-28"
    >
      <ContainerGrid className="py-10 @desktop:px-3">
        <TitleSection subtitle={subtitle} title={title} />
        <CarrouselCards data={data} />
      </ContainerGrid>
    </section>
  );
}

export default SectionCarrousel;
