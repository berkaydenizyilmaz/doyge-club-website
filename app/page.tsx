import { Button } from "@/components/ui/button";
import { announcements } from "@/data/announcements";
import { doygeContent } from "@/data/doygeContents";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        {/* Sayfa Başlığı */}
        <title>
          Dijital Oyun Geliştiricileri Kulübü | Hayal et, Kodla, Geliştir!
        </title>

        {/* Meta Açıklaması */}
        <meta
          name="description"
          content="Dijital Oyun Geliştiricileri Kulübü, Amasya Üniversitesi'nde oyun ve yazılım geliştirme alanında projeler üreten bir topluluktur. Hayal et, kodla, geliştir!"
        />

        {/* Anahtar Kelimeler */}
        <meta
          name="keywords"
          content="dijital oyun geliştiricileri, oyun geliştirme, yazılım geliştirme, amasya üniversitesi, projeler"
        />

        {/* Open Graph - Sosyal Medya Paylaşımı */}
        <meta
          property="og:title"
          content="Dijital Oyun Geliştiricileri Kulübü"
        />
        <meta
          property="og:description"
          content="Amasya Üniversitesi'nde oyun ve yazılım geliştirme alanında projeler üreten bir kulüp."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://audoyge.vercel.app/" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dijital Oyun Geliştiricileri Kulübü"
        />
        <meta
          name="twitter:description"
          content="Amasya Üniversitesi'nde oyun ve yazılım geliştirme projeleri üreten topluluk."
        />
        <meta name="twitter:image" content="/logo.png" />

        {/* Viewport Ayarı */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="flex flex-col items-center gap-16 p-8 lg:p-16 max-w-7xl mx-auto">
        {/* Başlıklar */}
        <div className="text-center mt-8 space-y-6 lg:space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold">
            Dijital Oyun Geliştiricileri Kulübü
          </h1>
          <p className="text-xl lg:text-2xl">
            Amasya Üniversitesi bünyesinde oyun ve diğer yazılım alanlarında
            eğitim veren proje üreten bir kulüp.
          </p>
          <p className="text-2xl font-semibold">Hayal et, kodla, geliştir!</p>
        </div>

        {/* Hakkımızda Butonu */}
        <Link href="/hakkimizda" passHref>
          <Button>Hakkımızda</Button>
        </Link>

        {/* Resim */}
        <div className="w-full mt-8">
          <Image
            src="/doyge-ana-sayfa-resim.jpg"
            alt="Kulüp Banner"
            width={1200}
            height={600}
            className="rounded-xl object-cover w-full shadow-md"
          />
        </div>

        {/* Doyge Ne Yapıyor */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Doyge Ne Yapıyor?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {doygeContent.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-primary-light rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              >
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Örnek Projeler */}
        <div className="mt-16 w-full">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center">
            Bazı Projelerimiz
          </h2>
          <div className="flex flex-col gap-12 lg:gap-16">
            {/* Proje 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <Image
                  src="/projects/discord/discord.jpg"
                  alt="Proje 1"
                  width={800}
                  height={500}
                  className="rounded-xl object-cover w-full shadow-md"
                />
              </div>
              <div className="w-full md:w-1/2 text-left space-y-4">
                <h3 className="text-2xl lg:text-3xl font-semibold">
                  {projects[0].title}
                </h3>
                <p className="text-lg">{projects[0].shortDescription}</p>

                <Link href={`/projeler/doyge-bot`} passHref>
                  <Button className="mt-4">Projeye Git</Button>
                </Link>
              </div>
            </div>

            {/* Proje 2 (resim sol metin sağ) */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2">
                <Image
                  src="/projects/tilevania/tilevania.jpg"
                  alt="Proje 2"
                  width={800}
                  height={500}
                  className="rounded-xl object-cover w-full shadow-md"
                />
              </div>
              <div className="w-full md:w-1/2 text-left space-y-4">
                <h3 className="text-2xl lg:text-3xl font-semibold">
                  {projects[1].title}
                </h3>
                <p className="text-lg">{projects[1].shortDescription}</p>

                <Link href={`/projeler/tilevania`} passHref>
                  <Link href={`/projeler/doyge-bot`} passHref>
                    <Button className="mt-4">Projeye Git</Button>
                  </Link>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Duyurular */}
        <div id="duyurular" className="mt-16 w-full text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12">Duyurular</h2>
          <div>
            {/* Duyuru Kartları */}
            {announcements.length > 0 && (
              <div
                className={`grid ${
                  announcements.length === 1
                    ? "grid-cols-1 justify-items-center"
                    : `md:grid-cols-${Math.min(announcements.length, 3)}`
                } gap-12 lg:gap-16`}
              >
                {announcements.map((announcement, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-between h-full p-6 bg-primary-light rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                  >
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
                        {announcement.title}
                      </h3>
                      <p className="text-lg">{announcement.content}</p>
                    </div>

                    {/* Tarih ve Link Kısımları */}
                    <div className="mt-6">
                      {announcement.date && (
                        <p className="text-lg mt-4 bg-[#a3a3f8] rounded-md p-2">
                          Tarih: {announcement.date}
                        </p>
                      )}

                      {announcement.link && (
                        <Link href={announcement.link} passHref>
                          <Button className="w-full bg-[#7575fc] text-primary-light hover:text-primary-dark">
                            {announcement.linkText}
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
