import { kbs } from "@/data/kbs";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const JoinClubPage = () => {
  return (
    <>
      <Head>
        <title>Kulübe Üye Ol | Dijital Oyun Geliştiricileri Kulübü</title>
        <meta
          name="description"
          content="Dijital Oyun Geliştiricileri Kulübü'ne nasıl üye olabileceğinizi öğrenin. Adım adım kılavuzumuz ile kolayca başvuru yapın ve kulübümüze katılın."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="kulüp üyeliği, dijital oyun, yazılım geliştirme, Amasya Üniversitesi, DOYGE, kulübe katıl"
        />
        <meta
          property="og:title"
          content="Kulübe Üye Ol | Dijital Oyun Geliştiricileri Kulübü"
        />
        <meta
          property="og:description"
          content="Dijital Oyun Geliştiricileri Kulübü'ne katılma adımlarını öğrenin ve topluluğumuza hemen üye olun."
        />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:url"
          content="https://audoyge.vercel.app/kulube-uye-ol"
        />
        <meta
          name="twitter:title"
          content="Kulübe Katıl | Dijital Oyun Geliştiricileri Kulübü"
        />
        <meta
          name="twitter:description"
          content="Dijital Oyun Geliştiricileri Kulübü'ne katılmak için gerekli adımları takip edin."
        />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="flex flex-col p-8 mt-3 items-center gap-12 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Kulübe Nasıl Üye Olunur?</h2>

        <p className="text-2xl text-center">
          Amasya üniversitesi kulüp bilgi sistemi sayfasını{" "}
          <Link
            href={"https://kbs.amasya.edu.tr/Y%C3%B6netim.aspx"}
            target="_blank"
            className="underline"
          >
            buraya
          </Link>{" "}
          tıklayarak açın.
        </p>

        {/* Adım Kartları */}
        {kbs.map((step) => (
          <div key={step.id} className="flex flex-col items-center gap-8 mb-12">
            {/* Adım Metin Kısmı */}
            <div className="w-full flex flex-col items-start text-left">
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-lg">{step.description}</p>
            </div>

            {/* Adım Görsel Kısmı */}
            <div>
              <Image
                src={step.img}
                alt={step.title}
                width={1080}
                height={1920}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        ))}

        <div className="text-2xl text-center">
          Tüm bu adımları tamamladıktan sonra kulübümüze üye olmuş olacaksınız
          ve kulüp WhatsApp grubuna kısa bir süre sonra alınacaksınız. Aramıza
          hoş geldiniz.
        </div>
      </div>
    </>
  );
};

export default JoinClubPage;
