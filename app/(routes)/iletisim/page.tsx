import React from "react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-primary p-4 flex flex-col items-center py-20">
      <h1 className="text-4xl md:text-6xl font-semibold mb-4 text-center">
        İletişim
      </h1>

      <p className="text-lg text-center mb-6">
        Bize aşağıdaki adreslerden ulaşabilirsiniz.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-md">
        <div className="border p-4 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold">E-Mail</h2>
          <Link href="mailto:audoyge@gmail.com" className="underline">
            audoyge@gmail.com
          </Link>
        </div>

        <div className="border p-4 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold">Instagram</h2>
          <p>
            <Link
              href="https://www.instagram.com/audoyge/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              @audoyge
            </Link>
          </p>
        </div>

        <div className="border p-4 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold">Discord</h2>
          <p>
            <Link
              href="https://discord.gg/VUttf2VXeq"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              https://discord.gg/VUttf2VXeq
            </Link>
          </p>
        </div>

        <div className="border p-4 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold">Adres</h2>
          <p>
            Amasya Üniversitesi Mühendislik Fakültesi C Blok 2.Kat Dijital Oyun
            Geliştiriciler Kulüp Odası
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
