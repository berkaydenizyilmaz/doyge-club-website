"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const pathname = usePathname(); // Kullanıcının mevcut sayfasını al

  return (
    <header className="bg-menu p-4 shadow-md">
      {/* Logo */}
      <div className="container mx-auto flex flex-row justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            width={150}
            height={150}
            alt="Logo"
            className="mb-4 md:mb-0"
          />
        </Link>

        {/* Mobil menü butonu */}
        <div className="md:hidden">
          <MobileMenu />
        </div>

        {/* Sayfa menüsü */}
        <nav className="hidden md:flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <Link
            href="/"
            className={`text-lg hover:underline transition duration-300 ${
              pathname === "/" ? "text-[#62b6cb] underline" : ""
            }`}
          >
            Ana Sayfa
          </Link>
          <Link
            href="/#duyurular"
            className="text-lg hover:underline transition duration-300"
          >
            Duyurular
          </Link>
          <Link
            href="/hakkimizda"
            className={`text-lg hover:underline transition duration-300 ${
              pathname === "/hakkimizda" ? "text-[#62b6cb] underline" : ""
            }`}
          >
            Hakkımızda
          </Link>
          <Link
            href="/projeler"
            className={`text-lg hover:underline transition duration-300 ${
              pathname.startsWith("/projeler") ? "text-[#62b6cb] underline" : ""
            }`}
          >
            Projeler
          </Link>
          <Link
            href="/iletisim"
            className={`text-lg hover:underline transition duration-300 ${
              pathname === "/iletisim" ? "text-[#62b6cb] underline" : ""
            }`}
          >
            İletişim
          </Link>
          <Link
            href="/kulube-uye-ol"
            className={`bg-[#d7e3fc] font-semibold px-4 py-2 rounded-md hover:bg-[#abc4ff] transition duration-300 ${
              pathname === "/kulube-uye-ol" ? " underline" : ""
            }`}
          >
            Kulübe Üye Ol
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
