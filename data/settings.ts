export interface SocialLinks {
  instagram: string[]
  tiktok: string[]
  youtube: string
  telegram: string
  whatsapp: string
  viber: string
  phone: string
}

export interface SiteSettings {
  siteName: string
  siteTagline: string
  logo: string
  socialLinks: SocialLinks
  contactEmail: string
  defaultLanguage: string
  availableLanguages: string[]
}

export const siteSettings: SiteSettings = {
  siteName: "KARMANUMBERS",
  siteTagline: "Код Судьбы и Предназначения",
  logo: "/images/logo.svg",
  socialLinks: {
    instagram: [
      "https://www.instagram.com/karma_number479",
      "https://www.instagram.com/karmanumbers792"
    ],
    tiktok: [
      "https://www.tiktok.com/@karmanumbers792",
      "https://www.tiktok.com/@karmanumbers779"
    ],
    youtube: "https://www.youtube.com/@KarmaNumbers777",
    telegram: "https://t.me/karmanumbers",
    whatsapp: "https://wa.me/37379216015",
    viber: "viber://chat?number=37379216015",
    phone: "+373 79 216 015"
  },
  contactEmail: "contact@karmanumbers.com",
  defaultLanguage: "ru",
  availableLanguages: ["ru", "ro", "en", "ua"]
}

export interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}

export const navigation: NavigationItem[] = [
  { label: "Главная", href: "/" },
  { label: "Мой путь", href: "/my-path" },
  {
    label: "Обучение",
    href: "/courses",
    children: [
      { label: "Курсы", href: "/courses" },
      { label: "Мини-курсы", href: "/mini-courses" },
      { label: "Практики", href: "/practices" },
      { label: "Продвинутые программы", href: "/advanced-programs" }
    ]
  },
  { label: "Медитации", href: "/meditations" },
  { label: "Ретрит", href: "/retreat" },
  { label: "Консультации", href: "/consultations" },
  { label: "Отзывы", href: "/reviews" },
  { label: "Блог", href: "/blog" }
]

export const footerNavigation = {
  platform: [
    { label: "Курсы", href: "/courses" },
    { label: "Мини-курсы", href: "/mini-courses" },
    { label: "Медитации", href: "/meditations" },
    { label: "Практики", href: "/practices" },
    { label: "Ретрит", href: "/retreat" }
  ],
  support: [
    { label: "С чего начать?", href: "/start-here" },
    { label: "Бесплатный тест", href: "/free-test" },
    { label: "Консультации", href: "/consultations" },
    { label: "FAQ", href: "/faq" },
    { label: "Контакты", href: "/consultations#contact" }
  ],
  legal: [
    { label: "Политика конфиденциальности", href: "/privacy" },
    { label: "Условия использования", href: "/terms" }
  ]
}

export interface Translation {
  [key: string]: {
    ru: string
    ro: string
    en: string
    ua: string
  }
}

export const translations: Translation = {
  "nav.home": {
    ru: "Главная",
    ro: "Acasă",
    en: "Home",
    ua: "Головна"
  },
  "nav.myPath": {
    ru: "Мой путь",
    ro: "Drumul meu",
    en: "My Path",
    ua: "Мій шлях"
  },
  "nav.courses": {
    ru: "Курсы",
    ro: "Cursuri",
    en: "Courses",
    ua: "Курси"
  },
  "nav.meditations": {
    ru: "Медитации",
    ro: "Meditații",
    en: "Meditations",
    ua: "Медитації"
  },
  "nav.consultations": {
    ru: "Консультации",
    ro: "Consultații",
    en: "Consultations",
    ua: "Консультації"
  },
  "nav.retreat": {
    ru: "Ретрит",
    ro: "Retreat",
    en: "Retreat",
    ua: "Ретрит"
  },
  "nav.reviews": {
    ru: "Отзывы",
    ro: "Recenzii",
    en: "Reviews",
    ua: "Відгуки"
  },
  "nav.blog": {
    ru: "Блог",
    ro: "Blog",
    en: "Blog",
    ua: "Блог"
  },
  "cta.getAccess": {
    ru: "Получить доступ",
    ro: "Obține acces",
    en: "Get Access",
    ua: "Отримати доступ"
  },
  "cta.learnMore": {
    ru: "Узнать подробнее",
    ro: "Află mai multe",
    en: "Learn More",
    ua: "Дізнатися більше"
  },
  "cta.telegram": {
    ru: "Написать в Telegram",
    ro: "Scrie pe Telegram",
    en: "Message on Telegram",
    ua: "Написати в Telegram"
  },
  "cta.consultation": {
    ru: "Получить консультацию",
    ro: "Obține consultație",
    en: "Get Consultation",
    ua: "Отримати консультацію"
  },
  "hero.title": {
    ru: "KARMANUMBERS",
    ro: "KARMANUMBERS",
    en: "KARMANUMBERS",
    ua: "KARMANUMBERS"
  },
  "hero.subtitle": {
    ru: "Открой свой код судьбы, энергии и предназначения",
    ro: "Descoperă codul destinului, energiei și menirii tale",
    en: "Discover your code of destiny, energy and purpose",
    ua: "Відкрий свій код долі, енергії та призначення"
  },
  "hero.description": {
    ru: "Курсы, медитации и консультации по нумерологии, отношениям, энергии, деньгам и личной трансформации.",
    ro: "Cursuri, meditații și consultații despre numerologie, relații, energie, bani și transformare personală.",
    en: "Courses, meditations and consultations on numerology, relationships, energy, money and personal transformation.",
    ua: "Курси, медитації та консультації з нумерології, стосунків, енергії, грошей та особистої трансформації."
  },
  "footer.rights": {
    ru: "Все права защищены",
    ro: "Toate drepturile rezervate",
    en: "All rights reserved",
    ua: "Всі права захищені"
  }
}

export function t(key: string, lang: string = "ru"): string {
  const translation = translations[key]
  if (!translation) return key
  return translation[lang as keyof typeof translation] || translation.ru
}

// Expert info
export const expertInfo = {
  name: "Валентина Черняк",
  title: "Цифровой психолог, коуч и наставник по дате рождения",
  experience: "749+ разобранных матриц",
  methods: [
    "Кармическая звезда",
    "Нумерология Пифагора",
    "Сюйцай",
    "Ведическая нумерология"
  ],
  achievements: [
    "ТОП-10 из 7000 учеников",
    "Выпускница школы Кристины Егизаровой"
  ]
}

// Popular directions for homepage
export const popularDirections = [
  { id: "1", title: "Деньги", icon: "banknote", href: "/mini-courses?category=money" },
  { id: "2", title: "Отношения", icon: "heart", href: "/mini-courses?category=relationships" },
  { id: "3", title: "Энергия", icon: "zap", href: "/mini-courses?category=energy" },
  { id: "4", title: "Предназначение", icon: "compass", href: "/mini-courses?category=destiny" },
  { id: "5", title: "Здоровье", icon: "activity", href: "/mini-courses?category=health" },
  { id: "6", title: "Совместимость", icon: "users", href: "/mini-courses?category=compatibility" },
  { id: "7", title: "Детская матрица", icon: "baby", href: "/mini-courses/detskaya-matrica" },
  { id: "8", title: "Травмы по дате рождения", icon: "heart-crack", href: "/mini-courses/travmy-po-date-rozhdeniya" }
]

// FAQ data
export const faqItems = [
  {
    question: "Как получить доступ к курсу?",
    answer: "После выбора курса напишите нам в Telegram или WhatsApp. Мы обсудим детали и после подтверждения оплаты откроем вам доступ в личном кабинете."
  },
  {
    question: "Есть ли оплата на сайте?",
    answer: "Нет, оплата на сайте не предусмотрена. Все платежи обсуждаются индивидуально через мессенджеры. Это позволяет подобрать удобный способ оплаты именно для вас."
  },
  {
    question: "Как проходит консультация?",
    answer: "Консультации проводятся онлайн в Zoom или в формате голосовых сообщений. Перед консультацией вы отправляете свою дату рождения и вопросы. Длительность и формат зависят от выбранного пакета."
  },
  {
    question: "Где смотреть медитации?",
    answer: "Все медитации доступны в вашем личном кабинете после получения доступа. Вы можете смотреть их в любое удобное время с любого устройства."
  },
  {
    question: "Можно ли смотреть с телефона?",
    answer: "Да, платформа полностью адаптирована для мобильных устройств. Вы также можете установить приложение на главный экран телефона для быстрого доступа."
  },
  {
    question: "Как установить приложение?",
    answer: "Откройте сайт в браузере телефона, нажмите 'Поделиться' и выберите 'На экран Домой' (iOS) или 'Добавить на главный экран' (Android). Приложение появится как обычное приложение."
  },
  {
    question: "Как попасть в Telegram?",
    answer: "Нажмите на кнопку Telegram на сайте или напишите напрямую по ссылке. Telegram — основной канал связи для вопросов, поддержки и получения доступа."
  },
  {
    question: "Когда открывается доступ после оплаты?",
    answer: "Обычно доступ открывается в течение нескольких часов после подтверждения оплаты. В редких случаях — в течение суток."
  },
  {
    question: "Можно ли задать вопрос перед покупкой?",
    answer: "Конечно! Напишите в Telegram или WhatsApp, и мы ответим на все ваши вопросы. Мы поможем выбрать подходящий курс или формат работы."
  }
]
