import { announcements } from "@/data/announcements";
import { doygeContent } from "@/data/doygeContents";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-16 p-8 lg:p-16 max-w-7xl mx-auto">
      {/* Başlıklar */}
      <div className="text-center mt-8 space-y-20">
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
      <Link href="/about" passHref>
        <p className="mt-6 py-3 px-8 bg-purple-400 text-purple-900 font-semibold rounded-lg text-lg hover:bg-purple-600 transition">
          Hakkımızda
        </p>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {doygeContent.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-primary-dark rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
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
        <div className="flex flex-col gap-16">
          {/* Proje 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <Image
                src="/proje/discord.jpg"
                alt="Proje 1"
                width={800}
                height={500}
                className="rounded-xl object-cover w-full shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 text-left space-y-4">
              <h3 className="text-2xl lg:text-3xl font-semibold">Proje 1</h3>
              <p className="text-lg">
                Bu projede bir oyun geliştirdik. Oyun içerisinde oyuncular
                çeşitli görevler yaparak ilerliyor ve eğleniyorlar.
              </p>
            </div>
          </div>

          {/* Proje 2 (resim sol metin sağ) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2">
              <Image
                src="/proje/tilevania.jpg"
                alt="Proje 2"
                width={800}
                height={500}
                className="rounded-xl object-cover w-full shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 text-left space-y-4">
              <h3 className="text-2xl lg:text-3xl font-semibold">Proje 2</h3>
              <p className="text-lg">
                Bu proje, bir web geliştirme projesidir. Kullanıcılar siteye
                girerek içerik oluşturabilir ve paylaşabilir.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Duyurular */}
      <div className="mt-16 w-full text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-12">Duyurular</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Duyuru Kartları */}
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
                  <p className="text-lg mt-4 bg-primary-dark rounded-md p-2 text-white">
                    Tarih: {announcement.date}
                  </p>
                )}

                {announcement.link && (
                  <Link href={announcement.link} passHref>
                    <p className="text-lg mt-4 bg-purple-400 text-purple-900 font-semibold rounded-lg py-2 px-4 hover:bg-purple-600 hover:text-purple-100 transition cursor-pointer">
                      {announcement.linkText}
                    </p>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
