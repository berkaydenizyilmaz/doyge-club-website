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
    id: "1",
    title: "LinkedIn ve Medium Ortak Eğitimi",
    content:
      "DOYGE ve Yazılım Geliştirme Kulübü ile ortak olarak düzenlediğimiz LinkedIn ve Medium eğitimine katılmayı unutmayın.",
    date: "8 Ekim Salı 15:15",
  },
  {
    id: "2",
    title: "Oyun Turnuvası",
    content:
      "DOYGE olarak düzenlediğimiz valorant oyun turnuvasına katılmayı unutmayın.",
    link: "https://discord.gg/VUttf2VXeq",
    linkText: "Başvurmak için tıklayın.",
  },
  {
    id: "3",
    title: "Unreal Engine 5",
    content:
      "DOYGE olarak düzenlediğimiz Unreal Engine 5 eğitimine katılmayı unutmayın.",
    date: "Yakında",
  },
];
