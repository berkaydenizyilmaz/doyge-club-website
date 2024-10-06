"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname(); // Kullanıcının mevcut sayfasını al

  return (
    <header className="bg-primary-dark p-4 shadow-md">
      {/* Logo */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            width={150}
            height={150}
            alt="Logo"
            className="mb-4 md:mb-0"
          />
        </Link>
        {/* Sayfa menüsü */}
        <nav className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <Link
            href="/"
            className={`text-lg hover:underline transition duration-300 ${
              pathname === "/" ? "text-purple-300 underline" : "text-white"
            }`}
          >
            Ana Sayfa
          </Link>
          <Link
            href="/hakkimizda"
            className={`text-lg hover:underline transition duration-300 ${
              pathname === "/hakkimizda"
                ? "text-purple-300 underline"
                : "text-white"
            }`}
          >
            Hakkımızda
          </Link>
          <Link
            href="/projeler"
            className={`text-lg hover:underline transition duration-300 ${
              pathname.startsWith("/projeler")
                ? "text-purple-300 underline"
                : "text-white"
            }`}
          >
            Projeler
          </Link>
          <Link
            href="/iletisim"
            className={`text-lg hover:underline transition duration-300 ${
              pathname === "/iletisim"
                ? "text-purple-300 underline"
                : "text-white"
            }`}
          >
            İletişim
          </Link>
          <Link
            href="/kulube-uye-ol"
            className={`bg-purple-300 text-purple-800 font-semibold px-4 py-2 rounded-md hover:bg-purple-200 transition duration-300 ${
              pathname === "/kulube-uye-ol" ? "text-purple-800 underline" : ""
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
