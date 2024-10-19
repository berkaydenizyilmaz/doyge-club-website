export interface AnnouncementType {
  id: string;
  title: string;
  content: string;
  date?: string;
  link?: string;
  linkText?: string;
}

export const announcements: AnnouncementType[] = [
  {
    id: "4",
    title: "C Programlama Dili Eğitimi",
    content:
      "DOYGE ve Yazılım Geliştirme kulübü olarak vize öncesi C programlama dili eğitimi verilecektir.",
    date: "23 Ekim Çarşamba 13.00",
  },
  {
    id: "3",
    title: "Unreal Engine 5 Eğitimi",
    content:
      "Unreal Engine 5 eğitimi verilecektir. Unreal Engine 5 hakkında bilgi sahibi olmak isteyenlerin katılımını bekliyoruz.",
    date: "Yakında",
  },
  {
    id: "4",
    title: "Valorant Turnuvası",
    content: "Valorant turnuvası düzenlenecektir.",
    date: "Yakında",
  },
];
