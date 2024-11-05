import React from "react";
import Link from "next/link";
import Head from "next/head";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>İletişim | Dijital Oyun Geliştiricileri Kulübü</title>
        <meta
          name="description"
          content="Dijital Oyun Geliştiricileri Kulübü ile iletişime geçin. Amasya Üniversitesi'nde faaliyet gösteren DOYGE hakkında sorularınız ve önerileriniz için bize ulaşın."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="iletişim, dijital oyun, yazılım geliştirme, Amasya Üniversitesi, DOYGE"
        />
        <meta
          property="og:title"
          content="İletişim | Dijital Oyun Geliştiricileri Kulübü"
        />
        <meta
          property="og:description"
          content="DOYGE ile iletişime geçmek için tıklayın. Amasya Üniversitesi bünyesinde faaliyet gösteren topluluğumuz hakkında daha fazla bilgi alın."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://audoyge.vercel.app/iletisim" />
        <meta
          name="twitter:title"
          content="İletişim | Dijital Oyun Geliştiricileri Kulübü"
        />
        <meta
          name="twitter:description"
          content="Dijital Oyun Geliştiricileri Kulübü'ne ulaşmak için iletişim bilgilerini kullanın."
        />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-scree p-4 flex flex-col items-center py-20">
        {/* Sayfa Başlığı */}
        <h1 className="text-4xl md:text-6xl font-semibold mb-4 text-center">
          İletişim
        </h1>

        {/* Sayfa Açıklaması */}
        <p className="text-lg text-center mb-6">
          Bize aşağıdaki adreslerden ulaşabilirsiniz.
        </p>

        {/* İletişim Bilgileri */}
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
              Amasya Üniversitesi Mühendislik Fakültesi C Blok 2.Kat Dijital
              Oyun Geliştiriciler Kulüp Odası
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
