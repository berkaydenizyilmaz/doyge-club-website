import { team } from "@/data/team";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Head from "next/head";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Hakkımızda | Dijital Oyun Geliştiricileri Kulübü</title>
        <meta
          name="description"
          content="Dijital Oyun Geliştiricileri Kulübü, oyun ve yazılım geliştirme alanlarında eğitimler ve projeler sunarak, Amasya Üniversitesi öğrencilerinin teknolojiye olan ilgilerini destekler."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="dijital oyun, yazılım geliştirme, Amasya Üniversitesi, DOYGE"
        />
        <meta
          property="og:title"
          content="Hakkımızda | Dijital Oyun Geliştiricileri Kulübü"
        />
        <meta
          property="og:description"
          content="Dijital Oyun Geliştiricileri Kulübü, Amasya Üniversitesi'nde faaliyet gösteren bir öğrenci topluluğu."
        />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:url"
          content="https://audoyge.vercel.app/hakkimizda"
        />
        <meta
          name="twitter:title"
          content="Hakkımızda | Dijital Oyun Geliştiricileri Kulübü"
        />
        <meta
          name="twitter:description"
          content="DOYGE, oyun ve yazılım geliştirme konusunda eğitimler ve projeler sunan bir öğrenci topluluğudur."
        />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="flex flex-col p-8 mt-3 items-center gap-8 max-w-6xl mx-auto">
        {/* Hakkımızda Bölümü */}
        <h2 className="text-5xl text-center">Hakkımızda</h2>

        <p className="text-xl text-center px-4 md:px-10 lg:px-20">
          Amasya Üniversitesi bünyesinde faaliyet gösteren Dijital Oyun
          Geliştiricileri Kulübü (DOYGE), dijital oyun tasarımı ve
          geliştirilmesinin yanı sıra mobil uygulama, veritabanı yönetimi ve
          yazılım geliştirme gibi geniş bir alanda çalışmalar yürüten bir
          öğrenci topluluğudur. Teknolojiye ilgi duyan öğrencilere yönelik
          atölye çalışmaları, eğitimler ve projeler düzenleyerek, üyelerimizin
          hem bireysel gelişimini hem de ekip çalışması yeteneklerini
          geliştirmeyi amaçlıyoruz. Amacımız, oyun ve yazılım geliştirme
          alanındaki yenilikçi fikirleri destekleyerek, sektörde fark yaratacak
          projeler üretmek ve öğrencilerin bu süreçte deneyim kazanmalarını
          sağlamaktır.
        </p>

        <div className="text-center px-4 md:px-10 lg:px-20">
          <h2 className="text-3xl mt-8">Vizyonumuz</h2>
          <p className="text-xl">
            DOYGE olarak, dijital oyun ve yazılım geliştirme alanında inovasyonu
            teşvik eden, Amasya Üniversitesi’nde teknoloji meraklılarına
            rehberlik eden, yerel ve uluslararası düzeyde rekabetçi projeler
            üreten bir topluluk olmayı hedefliyoruz. Mobil uygulamalardan
            veritabanı sistemlerine kadar geniş bir yelpazede teknoloji
            çözümleri üreterek, geleceğin dijital dünyasına katkıda bulunmak
            vizyonumuzdur.
          </p>
        </div>

        <div className="text-center px-4 md:px-10 lg:px-20">
          <h2 className="text-3xl mt-8">Misyonumuz</h2>
          <p className="text-xl">
            DOYGE kulübü olarak, üyelerimize dijital oyun, mobil uygulama ve
            yazılım geliştirme alanlarında kapsamlı eğitim ve projeler sunarak,
            onların teknik ve yaratıcı becerilerini en üst seviyeye çıkarmayı
            misyon edindik. Hem teorik bilgi hem de pratik deneyim sağlayarak,
            yenilikçi ve sürdürülebilir projeler geliştirilmesini destekliyoruz.
          </p>
        </div>

        <blockquote className="text-3xl text-center italic mt-8">
          “Teknoloji, insanların hayal güçlerini özgürce ifade etmeleri için
          sınırsız bir alan yaratıyor.”
        </blockquote>

        {/* Ekip Üyeleri Bölümü */}
        <div className="mt-8 w-full">
          <h2 className="text-3xl text-center">Ekip Üyelerimiz</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
            {/* Ekip Üyesi Kartları */}
            {team.map((uye) => (
              <div key={uye.id} className="flex flex-col items-center">
                <Image
                  src={uye.img}
                  alt={uye.name}
                  width={300}
                  height={300}
                  className="w-52 h-52 rounded-xl mb-2 object-cover"
                />
                <Link href={uye.linkedin} passHref target="_blank">
                  <h3 className="text-lg font-semibold underline">
                    {uye.name}
                  </h3>
                </Link>
                <p className="text-sm">{uye.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
