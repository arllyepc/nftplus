import Image from "next/image";

import IconBoost from "@/assets/icon-boost.svg";
import ContainerGrid from "../container";
import SmallNFT01 from "@/assets/nft-small.png";
import SmallNFT02 from "@/assets/double-nft.png";
import GooglePlay from "@/assets/google.svg";
import AppleStore from "@/assets/apple.svg";
import CardsHero from "./cards";

export function SectioHero() {
  return (
    <section className="overflow-hidden pt-36 bg-hero-pattern bg-no-repeat">
      <ContainerGrid className="flex flex-col items-center">
        <h3 className="flex items-center gap-2 text-sm mb-3 @tablet:text-base @desktop:text-xl">
          <Image src={IconBoost} alt="Icon Boost" />
          <span>Adentre um universo de possibilidades infinitas</span>
        </h3>

        <h1 className="text-5xl/normal text-center font-poppins mb-4 @desktop:text-7xl/normal">
          Explore o universo
          <div
            className="inline-block align-middle
           mx-2 p-1 bg-white bg-opacity-5 border 
          rounded-full border-white border-opacity-5 
          w-24 @desktop:w-32"
          >
            <Image
              className="w-11 @desktop:w-auto "
              src={SmallNFT01}
              alt="NFT"
            />
          </div>
          Digital de
          <Image
            className="inline-block w-16 mx-2 @desktop:w-auto"
            src={SmallNFT02}
            alt="NFT"
          />
          Colecionáveis NFTs
        </h1>
        <p
          className="w-full text-center text-sm mb-6 @tablet:text-base 
        @desktop:text-xl @desktop:max-w-content-desc-hero
         @desktop:mb-9"
        >
          Adentre um reino de possibilidades infinitas e mergulhe nas coleções
          de NFT, onde a arte, a cultura e a inovação se unem para criar
          experiências verdadeiramente exclusivas.
        </p>

        <div className="flex flex-col items-center gap-4 @tablet:flex-row">
          <Image src={GooglePlay} alt="Google Play" />
          <Image src={AppleStore} alt="Apple Store" />
        </div>
        <CardsHero />
        <div className="w-full border-t border-white border-opacity-5 mt-10
          @desktop:mt-36
        "></div>
      </ContainerGrid>
    </section>
  );
}

export default SectioHero;
