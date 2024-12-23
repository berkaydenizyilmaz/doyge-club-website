import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="">
        <div className="bg-menu flex justify-between items-center md:flex-row shadow-inner">
          {/* Logo Bölümü */}
          <div className="flex w-1/3 justify-center mb-4 md:mb-0">
            <Image
              src="/logo.png"
              width={200}
              height={1024}
              alt="Logo"
              className="mb-4 md:mb-0"
            />
          </div>

          {/* Orta Bölüm - Hakkımızda ve İletişim */}
          <div className="flex flex-col w-1/3 gap-6 text-center mb-4 md:mb-0 justify-center md:justify-center">
            <div>
              <Link
                href="/hakkimizda"
                className="text-lg md:text-base hover:underline"
              >
                Hakkımızda
              </Link>
            </div>
            <div>
              <Link
                href="/iletisim"
                className="text-lg md:text-base hover:underline"
              >
                İletişim
              </Link>
            </div>
          </div>

          {/* Sağ Bölüm - Sosyal Medya Bağlantıları */}
          <div className="text-center w-1/3">
            <h2 className="text-lg font-semibold mb-2">Sosyal</h2>
            <div className="flex flex-col gap-2">
              <Link
                href="https://www.instagram.com/audoyge/"
                target="_blank"
                rel="noreferrer"
                className="underline text-lg md:text-base"
              >
                Instagram
              </Link>
              <Link
                href="https://discord.gg/VUttf2VXeq"
                target="_blank"
                rel="noreferrer"
                className="underline text-lg md:text-base"
              >
                Discord
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#edf2fb] text-center text-sm md:text-base">
        &copy; {new Date().getFullYear()} Doyge Kulübü. Tüm Hakları Saklıdır.
      </div>
    </div>
  );
};

export default Footer;
