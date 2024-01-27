// Core
import Image from "next/image";
import Link from "next/link";

// Constants
export const footerNav = [
  {
    title: "NFT Plus®",
    items: [
      {
        label: "Download",
        href: "#",
      },
      {
        label: "NFTs",
        href: "#",
      },
      {
        label: "Rank",
        href: "#",
      },
      {
        label: "FAQ",
        href: "#",
      },
    ],
  },
  {
    title: "Links importantes",
    items: [
      {
        label: "About us",
        href: "#",
      },
      {
        label: "Questions",
        href: "#",
      },
      {
        label: "Press",
        href: "#",
      },
      {
        label: "Contact us",
        href: "#",
      },
      {
        label: "Legal",
        href: "#",
      },
    ],
  },
];

// Medias
import Logo from "@/assets/logo.svg";

// Components
import ContainerGrid from "@/components/container";

export default function Footer() {
  return (
    <footer className="py-10 @laptop:pt-32 @laptop:pb-14">
      <ContainerGrid className=" flex flex-col @laptop:flex-row  justify-between gap-10">
        <div className="text-left @tablet:max-w-footer-content">
          <Image src={Logo} alt="Logo" className="mb-4" />
          <p className="mb-6 text-white text-opacity-70 text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="w-full @tablet:w-auto bg-blue-primary rounded-full py-4 px-7 font-medium hover:bg-blue-700 transition-all ease-linear">
            Conectar carteira
          </button>
        </div>
        <div className="space-y-10 @tablet:flex @tablet:space-y-0 @tablet:gap-[88px]">
          {footerNav.map((footer, index) => (
            <div key={index}>
              <h4 className="text-xl mb-4 font-bold">{footer.title}</h4>
              <ul className="space-y-4">
                {footer.items.map((item, index) => (
                  <li key={index}>
                    <Link
                      className="text-lg text-white text-opacity-70"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ContainerGrid>
    </footer>
  );
}
