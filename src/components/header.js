// Core
import Image from "next/image";
import Link from "next/link";

// Components
import ContainerGrid from "@/components/container";

// Constants

// Medias
import Logo from "@/assets/logo.svg";
import IconHamburguer from "@/assets/icon-hamburger.svg";

export const navLinks = [
    {
      label: 'Download',
      href: '#',
    },
    {
      label: 'NFTs',
      href: '#',
    },
    {
      label: 'Rank',
      href: '#',
    },
    {
      label: 'FAQ',
      href: '#',
    },
  ]

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full py-6 @laptop:p-5">
      <ContainerGrid className="flex items-center justify-between">
        <Image src={Logo} alt="Logo" className="max-w-logo" />
        <nav className="hidden @laptop:flex items-center gap-12">
          {navLinks.map((nav, index) => (
            <Link
              className="font-medium font-inter hover:text-blue-primary transition-all ease-linear"
              key={index}
              href={nav.href}
            >
              {nav.label}
            </Link>
          ))}
        </nav>
        <button className="hidden @laptop:flex bg-blue-primary rounded-full py-4 px-7 font-medium hover:bg-blue-700 transition-all ease-linear">
          Conectar carteira
        </button>
        <button className="w-10 h-10 flex items-center justify-center border border-white border-opacity-5 rounded bg-white bg-opacity-5 @laptop:hidden">
          <Image src={IconHamburguer} alt="Icon Hamburguer" />
        </button>
      </ContainerGrid>
    </header>
  );
}
