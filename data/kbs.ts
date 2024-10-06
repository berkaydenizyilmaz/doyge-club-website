export interface KbsType {
  id: string;
  title: string;
  description: string;
  img: string;
}

export const kbs: KbsType[] = [
  {
    id: "1",
    title: "Adım 1",
    description:
      "Açılan sayfada ilk boşluğa sadece öğrenci numaranızı ikinci boşluğa OBİS (öğrenci bilgi sistemi) şifrenizi girin.",
    img: "/kbs/kbs3.png",
  },
  {
    id: "2",
    title: "Adım 2",
    description:
      "Giriş yaptıktan sonra soldaki menüde “kulüp üyelik” kısmı gözükecek. Eğer gözükmüyorsa adım 3’e geçin. Gözüküyorsa adım 4’e atlayın.",
    img: "/kbs/kbs2.png",
  },
  {
    id: "3",
    title: "Adım 3",
    description:
      "“kulüp üyesi” sekmesi gözükmüyorsa profil sekmesinden aşağıdaki alanları doldurup kaydet butonuna tıklayın.",
    img: "/kbs/kbs3.png",
  },
  {
    id: "4",
    title: "Adım 4",
    description:
      "Kulüp üyelik sekmesine girin ve “Dijital Oyun Geliştiricileri Kulübü” yazan satırı bulup seçin.",
    img: "/kbs/kbs4.png",
  },
  {
    id: "5",
    title: "Adım 5",
    description:
      "Kulübümüzü seçtikten sonra aynı sayfada aşağı inin ve kaydet butonuna tıklayın.",
    img: "/kbs/kbs5.png",
  },
];
