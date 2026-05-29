export interface Practice {
  id: string
  slug: string
  title: string
  description: string
  fullDescription: string
  format: string
  benefit: string
  coverImage: string
  icon: string
  category: "practice" | "advanced"
  status: "available" | "coming_soon"
}

export const practices: Practice[] = [
  {
    id: "1",
    slug: "koleso-sansary",
    title: "Колесо сансары",
    description: "Практика освобождения от кармических циклов и повторяющихся паттернов",
    fullDescription: "Глубокая трансформационная практика для выхода из замкнутых кругов судьбы. Вы научитесь распознавать повторяющиеся сценарии в своей жизни и осознанно выходить из них.",
    format: "Видео-практика + руководство",
    benefit: "Освобождение от повторяющихся негативных сценариев",
    coverImage: "/images/practices/samsara-wheel.jpg",
    icon: "circle-dot",
    category: "practice",
    status: "available"
  },
  {
    id: "2",
    slug: "vnutrenniy-rebenok",
    title: "Внутренний ребёнок",
    description: "Работа с детскими травмами и исцеление внутреннего ребёнка",
    fullDescription: "Практика для глубокого исцеления детских травм, возвращения радости и спонтанности. Вы встретитесь со своим внутренним ребёнком и дадите ему то, что было недополучено.",
    format: "Медитативная практика",
    benefit: "Исцеление детских травм, возвращение радости жизни",
    coverImage: "/images/practices/inner-child.jpg",
    icon: "heart",
    category: "practice",
    status: "available"
  },
  {
    id: "3",
    slug: "ritualy",
    title: "Ритуалы",
    description: "Священные ритуалы для привлечения желаемого",
    fullDescription: "Коллекция проверенных ритуалов для разных целей: привлечение денег, любви, здоровья, защита энергии. Основано на древних знаниях и адаптировано для современного человека.",
    format: "Видео-инструкции + материалы",
    benefit: "Практические инструменты для манифестации",
    coverImage: "/images/practices/rituals.jpg",
    icon: "flame",
    category: "practice",
    status: "available"
  },
  {
    id: "4",
    slug: "affirmacii",
    title: "Аффирмации",
    description: "Персональные аффирмации по вашей матрице",
    fullDescription: "Набор мощных аффирмаций, подобранных специально под вашу дату рождения и текущие задачи. Ежедневная практика перепрограммирования подсознания.",
    format: "Аудио + текстовые материалы",
    benefit: "Перепрограммирование подсознания",
    coverImage: "/images/practices/affirmations.jpg",
    icon: "sparkles",
    category: "practice",
    status: "available"
  },
  {
    id: "5",
    slug: "manifest",
    title: "Манифест",
    description: "Техника осознанной манифестации желаний",
    fullDescription: "Пошаговая система манифестации, основанная на понимании своей энергии и предназначения. Вы научитесь правильно формулировать намерения и притягивать желаемое.",
    format: "Видео-курс + шаблоны",
    benefit: "Осознанное создание реальности",
    coverImage: "/images/practices/manifest.jpg",
    icon: "wand-2",
    category: "practice",
    status: "available"
  },
  {
    id: "6",
    slug: "regress-gipnoz",
    title: "Регресс / Гипноз",
    description: "Погружение в прошлые жизни и глубинное исцеление",
    fullDescription: "Практика регрессивного гипноза для исследования прошлых воплощений, понимания кармических связей и исцеления на глубинном уровне.",
    format: "Индивидуальная сессия",
    benefit: "Исцеление кармических паттернов",
    coverImage: "/images/practices/regression.jpg",
    icon: "eye",
    category: "practice",
    status: "available"
  },
  {
    id: "7",
    slug: "gvozdi",
    title: "Гвозди",
    description: "Практика отпускания и освобождения",
    fullDescription: "Мощная трансформационная техника для отпускания обид, привязанностей и блоков. Символическое забивание и вытаскивание 'гвоздей' — того, что держит вас в прошлом.",
    format: "Групповая практика",
    benefit: "Освобождение от привязанностей и обид",
    coverImage: "/images/practices/nails.jpg",
    icon: "hammer",
    category: "practice",
    status: "available"
  },
  {
    id: "8",
    slug: "igra-vyhod-iz-matricy",
    title: "Игра «Выход из матрицы»",
    description: "Трансформационная игра для проработки жизненных сценариев",
    fullDescription: "Уникальная игровая практика, сочетающая элементы расстановок, нумерологии и коучинга. В игровом формате вы проработаете блоки и найдёте ответы на важные вопросы.",
    format: "Игровая сессия (онлайн/офлайн)",
    benefit: "Проработка блоков в лёгком игровом формате",
    coverImage: "/images/practices/matrix-game.jpg",
    icon: "gamepad-2",
    category: "practice",
    status: "available"
  }
]

export const advancedPrograms: Practice[] = [
  {
    id: "a1",
    slug: "fokus-gruppa-vedigora",
    title: "Фокус группа Ведигора",
    description: "Эксклюзивная группа глубинной работы",
    fullDescription: "Закрытая группа для продвинутой работы с ведической нумерологией и методом Ведигора. Еженедельные разборы, практики и поддержка сообщества.",
    format: "Закрытая группа",
    benefit: "Глубокая трансформация в поддерживающем сообществе",
    coverImage: "/images/practices/vedigora.jpg",
    icon: "users",
    category: "advanced",
    status: "available"
  },
  {
    id: "a2",
    slug: "chakrovidenie-1",
    title: "Чакровидение — часть 1",
    description: "Видение и работа с чакрами",
    fullDescription: "Курс по развитию способности видеть и чувствовать чакры. Вы научитесь диагностировать состояние энергетических центров и проводить базовую коррекцию.",
    format: "Видео-курс + практика",
    benefit: "Развитие энергетического видения",
    coverImage: "/images/practices/chakra-vision-1.jpg",
    icon: "scan-eye",
    category: "advanced",
    status: "available"
  },
  {
    id: "a3",
    slug: "chakrovidenie-2-prognoz",
    title: "Чакровидение — часть 2: прогноз",
    description: "Прогнозирование через чакры",
    fullDescription: "Продвинутый курс по прогнозированию событий и состояний через анализ чакр. Для тех, кто прошёл первую часть.",
    format: "Видео-курс + практика",
    benefit: "Способность прогнозировать через энергию",
    coverImage: "/images/practices/chakra-vision-2.jpg",
    icon: "eye",
    category: "advanced",
    status: "available"
  },
  {
    id: "a4",
    slug: "vedicheskaya-numerologiya",
    title: "Ведическая нумерология",
    description: "Глубокое погружение в ведическую традицию",
    fullDescription: "Полный курс ведической нумерологии. Интеграция древних ведических знаний с современными методами анализа. Для серьёзных практиков.",
    format: "Видео-курс + разборы",
    benefit: "Глубокие знания ведической традиции",
    coverImage: "/images/practices/vedic.jpg",
    icon: "book-open",
    category: "advanced",
    status: "available"
  }
]

export function getPracticeBySlug(slug: string): Practice | undefined {
  return [...practices, ...advancedPrograms].find(p => p.slug === slug)
}
