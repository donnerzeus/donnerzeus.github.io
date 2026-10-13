import { createContext, useContext, useEffect, useMemo, useState } from 'react';

/* eslint-disable react-refresh/only-export-components */

const copy = {
  en: {
    nav: { apps: 'Apps', about: 'About', skills: 'Skills', experience: 'Experience', contact: 'Contact', resume: 'Resume' },
    hero: {
      kicker: 'Full-stack engineer · Istanbul',
      apps: 'Explore my apps',
      resume: 'View resume',
      brief: 'In brief',
      quote: 'I care about software that feels clear on the surface and stays dependable underneath.',
      current: 'Currently'
    },
    apps: {
      eyebrow: 'Products, experiments, and playable systems',
      title: 'Apps I actually ship.',
      intro: 'Apps, browser games, and internal tools I’ve built. Explore a live project or take a look at the code.',
      repositories: 'All repositories',
      filters: { all: 'All builds', live: 'Live apps', game: 'Games', system: 'Systems' },
      open: 'Open app',
      source: 'Source'
    },
    about: {
      eyebrow: 'Focus',
      title: 'Professional, low-noise delivery for systems that need to stay alive.',
      intro: 'I work best where backend reliability, integration complexity, and maintainability matter more than hype.',
      contributions: 'Recent contribution themes',
      principles: 'Working principles'
    },
    skills: {
      title: 'Core stack',
      intro: 'Strongest on PHP ecosystems and integration-heavy delivery, with enough frontend range to ship complete experiences when needed.'
    },
    experience: { title: 'Experience and operating style', education: 'Education', certifications: 'Certifications', style: 'Working style' },
    contact: {
      title: 'Contact',
      intro: 'If you need a pragmatic engineer for Laravel, Drupal, migrations, or messy integration work, reach out with context and I can assess fit quickly.',
      resume: 'Resume',
      fit: 'Best fit collaborations',
      fitNote: 'Clear scope, realistic constraints, production-ready output.',
      built: 'Designed and built by'
    }
  },
  tr: {
    nav: { apps: 'Uygulamalar', about: 'Hakkımda', skills: 'Yetkinlikler', experience: 'Deneyim', contact: 'İletişim', resume: 'Özgeçmiş' },
    hero: {
      kicker: 'Full-stack yazılım geliştirici · İstanbul',
      apps: 'Uygulamalarımı keşfet',
      resume: 'Özgeçmişi görüntüle',
      brief: 'Kısaca',
      quote: 'Kullanırken sade hissettiren, arka planda ise güvenilir çalışan yazılımlar üretmeye önem veriyorum.',
      current: 'Şu anda'
    },
    apps: {
      eyebrow: 'Ürünler, deneyler ve oynanabilir sistemler',
      title: 'Yayına aldığım uygulamalar.',
      intro: 'Geliştirdiğim uygulamalar, tarayıcı oyunları ve iş araçları. Canlı projeleri deneyebilir veya kaynak kodlarına bakabilirsin.',
      repositories: 'Tüm repolar',
      filters: { all: 'Tüm projeler', live: 'Canlı uygulamalar', game: 'Oyunlar', system: 'Sistemler' },
      open: 'Uygulamayı aç',
      source: 'Kaynak kod'
    },
    about: {
      eyebrow: 'Odak',
      title: 'Uzun ömürlü sistemler için sade, güvenilir ve profesyonel teslimat.',
      intro: 'Backend güvenilirliğinin, entegrasyon karmaşıklığının ve sürdürülebilirliğin gösterişten daha önemli olduğu işlerde en güçlü performansımı gösteriyorum.',
      contributions: 'Son dönem katkı alanlarım',
      principles: 'Çalışma prensiplerim'
    },
    skills: {
      title: 'Temel teknoloji setim',
      intro: 'En güçlü olduğum alan PHP ekosistemi ve entegrasyon ağırlıklı geliştirme; ihtiyaç olduğunda uçtan uca deneyim sunacak frontend yetkinliğine de sahibim.'
    },
    experience: { title: 'Deneyim ve çalışma biçimi', education: 'Eğitim', certifications: 'Sertifikalar', style: 'Çalışma biçimi' },
    contact: {
      title: 'İletişim',
      intro: 'Laravel, Drupal, geçiş projeleri veya karmaşık entegrasyon işleri için çözüm odaklı bir geliştirici arıyorsanız kapsamı paylaşın; birlikte çalışmaya uygunluğumuzu hızlıca değerlendirebilirim.',
      resume: 'Özgeçmiş',
      fit: 'Birlikte çalışabileceğimiz alanlar',
      fitNote: 'Net kapsam, gerçekçi kısıtlar ve canlıya hazır çıktı.',
      built: 'Tasarım ve geliştirme'
    }
  }
};

const turkishData = {
  personalInfo: {
    name: 'Barış Delikaya',
    title: 'Backend odaklı Full-Stack Yazılım Geliştirici',
    phone: '+90-539-493-0112',
    location: 'İstanbul, Türkiye',
    email: 'barisdelikaya2@gmail.com',
    github: 'https://github.com/donnerzeus',
    linkedin: 'https://www.linkedin.com/in/barisdelikaya',
    resumeUrl: './cv.pdf',
    summary: 'Backend ağırlıklı bir yaklaşımla sürdürülebilir web sistemleri geliştiriyorum. Laravel, PHP, Drupal modernizasyonu ve kurumsal entegrasyonlar en güçlü olduğum alanlar; ayrıca .NET ve .NET Core ile çalışıyorum.',
    intro: 'Laravel, Drupal, entegrasyonlar ve teslimat operasyonlarında güvenilir ürün ve platform çalışmaları geliştiriyorum.'
  },
  heroStats: [
    { value: '50+', label: 'destek verilen kurumsal site' },
    { value: '3', label: 'tamamlanan büyük yenileme' },
    { value: '%40', label: 'son yenilemelerde hız artışı' },
    { value: '7→12', label: 'Drupal geçiş aralığı' }
  ],
  heroHighlights: ['Laravel ve PHP geliştirme', 'Drupal 7’den 12’ye modernizasyon', 'SSO, CRM ve API entegrasyonları', 'Geliştirme ve canlı ortam uyumu'],
  focusAreas: [
    { title: 'Kurumsal CMS modernizasyonu', description: 'Eski Drupal sistemleri, sürüm yükseltme planları, modül temizliği ve canlı sistem kararlılığını koruyan gerçekçi geçiş yolları.' },
    { title: 'Okunabilir kalan backend sistemleri', description: 'Devir sonrasında da sürdürülebilir kalan servis sınırları, net veri akışları ve entegrasyon ağırlıklı uygulama kodu.' },
    { title: 'Teslimat disiplini', description: 'Ortam tutarlılığı, CI farkındalığı, güvenli canlıya çıkışlar ve operasyonel sürprizleri azaltan hata ayıklama süreçleri.' }
  ],
  keyContributions: [
    'Kurumsal multisite mimarisinin standartlaştırılması',
    'Geliştirme, test ve canlı ortamlar arasında tutarlılık',
    'OAuth2, OIDC ve SAML ile kimlik doğrulama akışları',
    'Uzun ömürlü sistemler için daha güvenli API entegrasyonu',
    'Performans odaklı eski şablon ve sorgu modernizasyonu',
    'Responsive, asenkron ve erişilebilir gelişmiş DataTable deneyimi'
  ],
  deliveryPrinciples: [
    'Gösterişli soyutlamalar yerine canlı ortam güvenliğini seç.',
    'Sorunlar olaya dönüşmeden hata biçimlerini görünür kıl.',
    'Mimariyi sonraki geliştirici için anlaşılır bırak.',
    'Hızlı ilerle; ama geri dönüş planın her zaman hazır olsun.'
  ],
  skills: [
    { category: 'Backend Platformları' },
    { category: 'Frontend Geliştirme' },
    { category: 'Veri ve Entegrasyonlar' },
    { category: 'DevOps ve Araçlar' },
    { category: 'Mimari Yaklaşım' }
  ],
  experience: [
    {
      company: 'Sabancı Üniversitesi', role: 'Yazılım Geliştirme Uzmanı', period: 'Şub 2023 - Günümüz',
      description: [
        'Drupal özelliklerini geliştirdim, test ettim ve canlıya aldım; tarayıcılar arası kararlılığı sağladım',
        '50’den fazla kurumsal site için Google Analytics entegrasyonlarını yönettim',
        'React Native mobil bileşen geliştirdim',
        'JavaScript, HTML, SCSS ve PHP ile full-stack web geliştirme yaptım',
        'Docker ve Ubuntu’yu aktif olarak kullandım',
        'Üç web sitesi yenilemesine liderlik ederek yükleme hızını yaklaşık %40 artırdım'
      ]
    },
    { company: 'Sakıp Sabancı Müzesi', role: 'Veritabanı Yönetimi Stajyeri', period: 'Şub 2022 - May 2022', description: ['Veritabanı geri yükleme, normalizasyon ve şema tasarımı', 'Drupal yönetimi ve içerik girişi'] },
    { company: 'Login ERP Yazılım', role: 'Veritabanı Stajyeri', period: 'Şub 2017 - Kas 2018', description: ['İstemci tarafı sunucu desteği ve optimizasyonu', 'Mantıksal ve fiziksel veritabanı tasarımı', 'Veritabanı performans takibi ve yedekleme süreçleri'] }
  ],
  education: { degree: 'Bilgisayar Mühendisliği Lisans Programı', school: 'Selçuk Üniversitesi', period: '2019-2023' },
  certifications: ['Çevik Proje Yönetimi - Google', 'Etkili İletişim Teknikleri - Boğaziçi Enstitüsü', 'Verimliliği En Üst Düzeye Çıkarma Eğitimi - Boğaziçi Enstitüsü'],
  workingStyle: ['Canlı ortam güvenliğinde teslimat', 'Kök neden odaklı hata ayıklama', 'Temiz devir kalitesi', 'Ekipler arası iletişim', 'Pragmatik mimari', 'Disiplinli hızlı iterasyon'],
  collaborationPoints: ['Portföy ve kurumsal web geliştirme', 'Laravel veya Drupal danışmanlığı', 'Geçiş ve refaktör planlaması', 'Entegrasyon ağırlıklı backend geliştirme'],
  productApps: [
    { category: 'Verimlilik', status: 'Canlı PWA', description: 'Günlük kontroller, Ekran Süresi sınırları, takvim aktarımı ve 14 günlük ritim raporuyla davranış odaklı uyku ve rutin yardımcısı.' },
    { category: 'Sağlık', status: 'Canlı PWA', description: 'Döngü evresi farkındalığı, günlük planlama ve sakin görsel yönlendirme sunan, veriyi cihazda tutan özel döngü planlayıcı.' },
    { category: 'Oyun', status: 'Oynanabilir', description: 'Oda tabanlı çok oyunculu yapı, gizli roller, oylama akışları, ses ve Firebase senkronizasyonu içeren gerçek zamanlı sosyal çıkarım oyunu.' },
    { category: 'Fitness', status: 'Canlı uygulama', description: 'Beslenme, ölçümler, antrenman sayaçları, gelişim geçmişi ve görsel dönüşüm için kişisel fitness kontrol merkezi.' },
    { category: 'Oyun', status: 'Oynanabilir', description: 'Televizyonun sahneye, oyuncuların telefonlarının kumandaya dönüştüğü oda tabanlı parti platformu.' },
    { category: 'Oyun', status: 'Oynanabilir', description: 'Karakter seçimi, geliştirme döngüleri, envanter sistemi, mobil kontroller ve özel oyun motoru içeren tarayıcı tabanlı hayatta kalma oyunu.' },
    { category: 'Operasyon', status: 'Geliştiriliyor', description: 'Rol tabanlı yetki, denetim kayıtları, durum geçişleri ve operatör akışları içeren etkinlik personeli operasyon platformu.' },
    { category: 'Analitik', status: 'Kaynak kod', description: 'SLA risk sinyalleri, tahminleme, oyunlaştırma, yönetici metrikleri ve dışa aktarılabilir raporlar sunan kurumsal Jira analitik yüzeyi.' },
    { category: 'Platform laboratuvarı', status: 'Kaynak kod', description: 'Modüller, vardef tanımları, metadata, logic hook’lar ve entegrasyonlar için Docker üzerinde SuiteCRM ve eski SugarCRM öğrenme ortamı.' }
  ]
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('portfolio-language');
    if (saved === 'tr' || saved === 'en') return saved;
    return navigator.language.toLowerCase().startsWith('tr') ? 'tr' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: copy[language],
    localize: (key, fallback) => language === 'tr' && turkishData[key] ? turkishData[key] : fallback
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
