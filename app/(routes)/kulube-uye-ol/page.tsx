import { kbs } from "@/data/kbs";
import Image from "next/image";
import Link from "next/link";

const JoinClubPage = () => {
  return (
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
        Tüm bu adımları tamamladıktan sonra kulübümüze üye olmuş olacaksınız ve
        kulüp WhatsApp grubuna kısa bir süre sonra alınacaksınız. Aramıza hoş
        geldiniz.
      </div>
    </div>
  );
};

export default JoinClubPage;