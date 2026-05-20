export interface Meditation {
  id: string
  slug: string
  title: string
  description: string
  category: MeditationCategory
  duration: string
  level: "beginner" | "intermediate" | "advanced"
  coverImage: string
  videoPlaceholder?: string
  audioFile?: string
  youtubeLink?: string
  isBlackWhite: boolean
  status: "available" | "coming_soon"
  featured: boolean
}

export type MeditationCategory = 
  | "morning"
  | "energy"
  | "healing"
  | "deep"
  | "black_white"
  | "coming_soon"

export const meditationCategories: { id: MeditationCategory; name: string; description: string }[] = [
  { id: "morning", name: "Утренние медитации", description: "Начните день с осознанности" },
  { id: "energy", name: "Энергия", description: "Наполнение и восстановление энергии" },
  { id: "healing", name: "Исцеление", description: "Медитации для исцеления души и тела" },
  { id: "deep", name: "Глубокие практики", description: "Для продвинутой работы с собой" },
  { id: "black_white", name: "Black & White", description: "Особая серия глубинных медитаций" },
  { id: "coming_soon", name: "Скоро", description: "Новые медитации в разработке" }
]

export const meditations: Meditation[] = [
  {
    id: "1",
    slug: "utrennee-poslanie-verni-energiyu-sebe",
    title: "Утреннее послание — верни энергию себе",
    description: "Мощная утренняя практика для возвращения своей энергии и настройки на продуктивный день. Эта медитация поможет вам проснуться, наполниться силой и войти в день с ясным намерением.",
    category: "morning",
    duration: "15 мин",
    level: "beginner",
    coverImage: "/images/meditations/morning-message.jpg",
    videoPlaceholder: "IMG_1201.MOV",
    isBlackWhite: false,
    status: "available",
    featured: true
  },
  {
    id: "2",
    slug: "probuzhdenie-zhenskoy-energii",
    title: "Пробуждение женской энергии",
    description: "Медитация для активации и гармонизации женской энергии. Соединение с внутренней богиней и раскрытие женственности.",
    category: "energy",
    duration: "20 мин",
    level: "beginner",
    coverImage: "/images/meditations/feminine-energy.jpg",
    videoPlaceholder: "IMG_1202.MOV",
    isBlackWhite: false,
    status: "available",
    featured: true
  },
  {
    id: "3",
    slug: "iscelenie-vnutrennego-rebenka",
    title: "Исцеление внутреннего ребёнка",
    description: "Глубокая практика для работы с внутренним ребёнком, исцеления детских травм и возвращения радости жизни.",
    category: "healing",
    duration: "30 мин",
    level: "intermediate",
    coverImage: "/images/meditations/inner-child.jpg",
    videoPlaceholder: "IMG_1203.MOV",
    isBlackWhite: false,
    status: "available",
    featured: true
  },
  {
    id: "4",
    slug: "ochishenie-roda",
    title: "Очищение рода",
    description: "Медитация для работы с родовыми программами, исцеления родовых травм и освобождения от кармических долгов рода.",
    category: "deep",
    duration: "45 мин",
    level: "advanced",
    coverImage: "/images/meditations/lineage-healing.jpg",
    videoPlaceholder: "IMG_1204.MOV",
    isBlackWhite: false,
    status: "available",
    featured: false
  },
  {
    id: "5",
    slug: "bw-tishina-dushi",
    title: "Тишина души",
    description: "Медитация из серии Black & White. Погружение в абсолютную тишину, встреча с истинным собой за пределами ума.",
    category: "black_white",
    duration: "25 мин",
    level: "advanced",
    coverImage: "/images/meditations/bw-soul-silence.jpg",
    videoPlaceholder: "IMG_1205.MOV",
    isBlackWhite: true,
    status: "available",
    featured: true
  },
  {
    id: "6",
    slug: "bw-ten-i-svet",
    title: "Тень и Свет",
    description: "Глубокая практика интеграции теневых аспектов личности. Принятие всех частей себя.",
    category: "black_white",
    duration: "35 мин",
    level: "advanced",
    coverImage: "/images/meditations/bw-shadow-light.jpg",
    videoPlaceholder: "IMG_1206.MOV",
    isBlackWhite: true,
    status: "available",
    featured: false
  },
  {
    id: "7",
    slug: "bw-pustota",
    title: "Пустота",
    description: "Медитация на пустоту и небытие. Освобождение от привязанностей и обретение внутренней свободы.",
    category: "black_white",
    duration: "40 мин",
    level: "advanced",
    coverImage: "/images/meditations/bw-void.jpg",
    videoPlaceholder: "IMG_1207.MOV",
    isBlackWhite: true,
    status: "available",
    featured: false
  },
  {
    id: "8",
    slug: "napolnenie-energiey-solnca",
    title: "Наполнение энергией Солнца",
    description: "Визуализация для наполнения солнечной энергией, активации жизненных сил и повышения уверенности.",
    category: "energy",
    duration: "18 мин",
    level: "beginner",
    coverImage: "/images/meditations/sun-energy.jpg",
    isBlackWhite: false,
    status: "available",
    featured: false
  },
  {
    id: "9",
    slug: "utrennyaya-blagodarnost",
    title: "Утренняя благодарность",
    description: "Короткая утренняя практика благодарности для настройки на позитивный день.",
    category: "morning",
    duration: "10 мин",
    level: "beginner",
    coverImage: "/images/meditations/morning-gratitude.jpg",
    isBlackWhite: false,
    status: "available",
    featured: false
  },
  {
    id: "10",
    slug: "iscelenie-serdca",
    title: "Исцеление сердца",
    description: "Медитация для исцеления сердечных ран, отпускания боли и открытия сердца для любви.",
    category: "healing",
    duration: "25 мин",
    level: "intermediate",
    coverImage: "/images/meditations/heart-healing.jpg",
    isBlackWhite: false,
    status: "available",
    featured: true
  },
  {
    id: "11",
    slug: "aktivaciya-tretiego-glaza",
    title: "Активация третьего глаза",
    description: "Практика для развития интуиции и активации шестой чакры.",
    category: "deep",
    duration: "30 мин",
    level: "advanced",
    coverImage: "/images/meditations/third-eye.jpg",
    isBlackWhite: false,
    status: "coming_soon",
    featured: false
  },
  {
    id: "12",
    slug: "bw-vozrozhdenie",
    title: "Возрождение",
    description: "Медитация трансформации и перерождения. Отпускание старого и рождение нового себя.",
    category: "black_white",
    duration: "50 мин",
    level: "advanced",
    coverImage: "/images/meditations/bw-rebirth.jpg",
    isBlackWhite: true,
    status: "coming_soon",
    featured: false
  }
]

export function getMeditationBySlug(slug: string): Meditation | undefined {
  return meditations.find(m => m.slug === slug)
}

export function getMeditationsByCategory(category: MeditationCategory): Meditation[] {
  return meditations.filter(m => m.category === category)
}

export function getFeaturedMeditations(): Meditation[] {
  return meditations.filter(m => m.featured && m.status === "available")
}

export function getAvailableMeditations(): Meditation[] {
  return meditations.filter(m => m.status === "available")
}
