export interface ProjectTeamType {
  name: string;
  role: string;
}

export interface ProjectType {
  id: string;
  title: string;
  shortDescription: string;
  mainImg: string;
  detail: string;
  technicalDetails: string;
  features: string[];
  img: string[];
  projectTeam: ProjectTeamType[];
  github?: string;
}

export const projects: ProjectType[] = [
  {
    id: "doyge-bot",
    title: "Doyge Discord Bot",
    shortDescription:
      "DOYGE Bot, üniversitemizin Dijital Oyun Geliştiricileri kulübüne ait discord sunucusunu yönetmek için tasarlanmış güçlü bir yardımcıdır.",
    mainImg: "/projects/discord/discord.jpg",
    detail: `DOYGE Bot’un geliştirilme süreci, kulübümüzün Discord sunucusunun ihtiyaçlarını karşılamak üzere kapsamlı bir araştırma ve tasarım aşamasıyla başladı. İlk aşamada, sunucu üyeleriyle yapılan anketler ve görüşmelerle, botun hangi özelliklere ihtiyaç duyduğuna dair veriler toplandı. Bu bilgiler ışığında, botun işlevselliğini artırmak için belirli hedefler belirlendi.

Planlama ve Tasarım: Bu aşamada, botun temel özellikleri için bir yol haritası oluşturuldu. Sunucu moderasyon komutları, eğlenceli oyunlar ve bilgi komutları gibi ana işlevler tasarlandı. Özellikle, moderasyon araçlarının kullanıcı deneyimini iyileştirmek için kullanıcı dostu bir arayüz tasarlandı.

Geliştirme: Geliştirme süreci, Node.js ve Discord.js kütüphanesinin kullanılmasıyla başladı. JavaScript ile kodlama yaparak, botun her bir özelliği için ayrı modüller oluşturuldu. Kodlama sırasında, test senaryoları geliştirildi ve her yeni özellik, sunucudaki performansını değerlendirmek için gerçek zamanlı olarak test edildi.

Test ve Optimizasyon: Geliştirilen her modül, topluluk üyeleriyle birlikte test edildi. Bu aşamada, kullanıcı geri bildirimlerine dayalı olarak düzenlemeler yapıldı. Moderasyon sisteminin etkinliği, oyunların kullanıcılar arasında ne kadar ilgi çektiği gibi metrikler sürekli olarak gözden geçirildi ve botun performansı optimize edildi.

Sonuç ve Uygulama: Geliştirme sürecinin sonunda, DOYGE Bot sunucuda aktif olarak kullanılmaya başlandı. Kullanıcıların deneyimlerini izlemek için sürekli bir geri bildirim mekanizması oluşturuldu. Böylece, botun gelecekteki güncellemeleri ve iyileştirmeleri için kullanıcıların talepleri dikkate alınacak.`,
    technicalDetails: `Geliştirme Ortamı: Node.js
Kütüphane: Discord.js (sürüm 14)
Programlama Dili: JavaScript`,
    features: [
      "Moderasyon Komutları: Sunucudaki düzeni sağlamak için otomatik moderasyon araçları.",
      "Sunucu Koruma Sistemi: Spam ve kötü niyetli etkinliklere karşı koruma sağlar.",
      "Eğlence Amaçlı Oyunlar: Topluluk üyeleri arasında etkileşimi artıran çeşitli oyunlar.",
      "Bilgi Komutları: Kullanıcılara anlık bilgi sunan komutlar",
      "Kullanıcı Dostu Arayüz: Botun özelliklerini kolayca kullanmak için basit ve anlaşılır bir arayüz.",
    ],
    img: ["/projects/discord/discord-1.png"],
    projectTeam: [
      {
        name: "Berkay Deniz Yılmaz",
        role: "Proje Yöneticisi",
      },
    ],
    github: "https://www.linkedin.com/in/berkaydenizyilmaz/",
  },

  {
    id: "tilevania",
    title: "Tilevania Platformer Oyunu",
    shortDescription:
      "Tilevania, klasik 2D platform oyunlarına dayalı bir projedir. Oyuncular, farklı platformlar arasında zıplayarak engelleri aşarken düşmanlarla mücadele eder ve çeşitli görevleri tamamlar.",
    mainImg: "/projects/tilevania/tilevania.jpg",
    detail: `Tilevania oyunu, Unity’nin Tilemap sistemi kullanılarak inşa edildi. Geliştirme sürecinde, farklı seviyelerde zorluklar oluşturarak oyuncuların reflekslerini ve strateji becerilerini test etmeyi amaçladım. Fizik motoru ve düşman hareketleri optimize edilerek oyuncu etkileşimi iyileştirildi. Oyuncunun elindeki fener ışığı gibi özel objeler ile oyunun atmosferi derinleştirildi.

Sonuç ve Uygulama
Tilevania projesi, platform oyunlarının temel dinamiklerini öğrenmek ve geliştirmek için harika bir deneyim sunuyor. Oyun sırasında elde edilen geri bildirimlere dayalı olarak seviyeler ve oynanış mekaniği sürekli olarak güncelleniyor. Geliştirme aşamasında edinilen dersler, gelecekteki platform oyunları için temel teşkil edecek.`,
    technicalDetails: `Geliştirme Ortamı: Unity 2022.3.19f1
Programlama Dili: C#
Grafik Motoru: Tilemap sistemi kullanarak 2D sprite tabanlı seviyeler`,
    features: [
      "Tilemap sistemi ile dinamik seviyeler oluşturma",
      "Basit düşman AI’si ve savaş mekanikleri",
      "Karakterin fener ışığı gibi özel objeler",
      "Zamanlı görevler ve bulmacalar",
      "Kolaydan zora doğru artan zorluk seviyeleri",
    ],
    img: ["/projects/tilevania/tilevania-1.jpg"],
    projectTeam: [
      {
        name: "Mustafa Buğra Karatürk",
        role: "Proje Yöneticisi",
      },
    ],
  },

  {
    id: "ilk-tiklayan-kazanir",
    title: "İlk Tıklayan Kazanır Oyunu",
    shortDescription:
      "Bu eğitim amaçlı oyun, hız ve refleks üzerine kurulmuştur. Oyuncular, ekrandaki hedefe ilk tıklayan kişi olmaya çalışırlar.",
    mainImg: "/projects/ilk-tiklayan-kazanir/ilk-tiklayan-kazanir.jpg",
    detail: `Oyunun geliştirilmesi, refleks tabanlı mini oyunların basit ve eğitici yönlerini hedefleyerek başladı. Geliştirme sürecinde hedeflerin yerleşiminde rastgelelik sağlanarak her oynanışın farklı olması amaçlandı.`,
    technicalDetails: `Geliştirme Ortamı: Unreal Engine 5
Programlama Dili: Blueprint`,
    features: [
      "Hızlı refleks gerektiren hedef tıklama",
      "Tek oyunculu ve çok oyunculu mod seçenekleri",
      "Rastgele hedef yerleşimi",
    ],
    img: ["/projects/ilk-tiklayan-kazanir/ilk-tiklayan-kazanir.jpg"],
    projectTeam: [
      {
        name: "Mustafa Buğra Karatürk",
        role: "Proje Yöneticisi",
      },
    ],
  },
];
