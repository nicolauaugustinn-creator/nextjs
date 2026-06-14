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
  youtubeVideoId?: string
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
    title: "4 аркан ИМПЕРАТОР. Рождённые 4-го, 13-го, 22-го или 31-го числа",
    description: "Мощная медитация для активации энергии императора. Пробуди в себе силу, уверенность и способность достигать целей. Энергия, позволяющая управлять жизнью и воплощать мечты.",
    category: "morning",
    duration: "13 мин",
    level: "beginner",
    coverImage: "/images/meditations/morning-message.jpg",
    youtubeLink: "https://youtu.be/SFbS0EDFXxo?si=clbsu1hZ7Elf3bol",
    youtubeVideoId: "SFbS0EDFXxo",
    isBlackWhite: false,
    status: "available",
    featured: true
  },
  {
    id: "2",
    slug: "probuzhdenie-zhenskoy-energii",
    title: "6 аркан ВЛЮБЛЁННЫЕ. Рождённые 6-го, 15-го или 24-го числа",
    description: "Медитация безусловной любви к себе и к миру. Соединение с внутренней богиней, открытие сердца и раскрытие женственности.",
    category: "energy",
    duration: "8 мин",
    level: "beginner",
    coverImage: "/images/meditations/feminine-energy.jpg",
    youtubeLink: "https://youtu.be/5K3gK67s-28?si=ljYb26LX-VfKqDDy",
    youtubeVideoId: "5K3gK67s-28",
    isBlackWhite: false,
    status: "available",
    featured: true
  },
  {
    id: "3",
    slug: "iscelenie-vnutrennego-rebenka",
    title: "5 аркан ИЕРОФАНТ. Рождённые 5-го, 14-го или 23-го числа",
    description: "Медитация просветления и раскрытия божественных знаний. Подключись к Творцу и почувствуй бесконечные возможности.",
    category: "healing",
    duration: "10 мин",
    level: "intermediate",
    coverImage: "/images/meditations/inner-child.jpg",
    youtubeLink: "https://youtu.be/GpheYX6cvpc?si=2NaXrDj8H0LPY2Z4",
    youtubeVideoId: "GpheYX6cvpc",
    isBlackWhite: false,
    status: "available",
    featured: true
  },
  {
    id: "4",
    slug: "ochishenie-roda",
    title: "8 аркан СПРАВЕДЛИВОСТИ",
    description: "Медитация баланса и справедливости. Найди внутренний покой и ясность, отпусти внутреннего судью.",
    category: "deep",
    duration: "9 мин",
    level: "advanced",
    coverImage: "/images/meditations/lineage-healing.jpg",
    youtubeLink: "https://youtu.be/wML8IVv236o?si=pU24dD_4SF1UrciM",
    youtubeVideoId: "wML8IVv236o",
    isBlackWhite: false,
    status: "available",
    featured: false
  },
  {
    id: "5",
    slug: "bw-tishina-dushi",
    title: "9 аркан ОТШЕЛЬНИК. Рождённые 9-го, 18-го, 27-го числа",
    description: "Медитация интроспекции и внутреннего света. Мудрость, тихая уверенность, близость к себе.",
    category: "black_white",
    duration: "13 мин",
    level: "advanced",
    coverImage: "/images/meditations/bw-soul-silence.jpg",
    youtubeLink: "https://youtu.be/dsNIa5gUpE0?si=KoPoFkctWc8WWy3s",
    youtubeVideoId: "dsNIa5gUpE0",
    isBlackWhite: true,
    status: "available",
    featured: true
  },
  {
    id: "6",
    slug: "bw-ten-i-svet",
    title: "Медитация",
    description: "Медитация на тему интеграции теневых аспектов личности. Гармонизация противоположностей.",
    category: "black_white",
    duration: "10 мин",
    level: "advanced",
    coverImage: "/images/meditations/bw-shadow-light.jpg",
    youtubeLink: "https://youtu.be/kKrqASoVn4M?si=8_ZrSmjJGavtE9Sg",
    youtubeVideoId: "kKrqASoVn4M",
    isBlackWhite: true,
    status: "available",
    featured: false
  },
  {
    id: "7",
    slug: "bw-pustota",
    title: "Медитация",
    description: "Медитация на пустоту и ничто. Освобождение от привязанностей и обретение внутренней свободы.",
    category: "black_white",
    duration: "12 мин",
    level: "advanced",
    coverImage: "/images/meditations/bw-void.jpg",
    youtubeLink: "https://youtu.be/w4UYJ87NGBw?si=exHzLRDxnB6F3yog",
    youtubeVideoId: "w4UYJ87NGBw",
    isBlackWhite: true,
    status: "available",
    featured: false
  },
  {
    id: "8",
    slug: "napolnenie-energiey-solnca",
    title: "Медитация",
    description: "Визуализация для наполнения солнечной энергией, активации жизненных сил и повышения уверенности.",
    category: "energy",
    duration: "14 мин",
    level: "beginner",
    coverImage: "/images/meditations/sun-energy.jpg",
    youtubeLink: "https://youtu.be/DwSPAOTxhFg?si=v1AR0ZsMKVveX4CS",
    youtubeVideoId: "DwSPAOTxhFg",
    isBlackWhite: false,
    status: "available",
    featured: false
  },
  {
    id: "9",
    slug: "utrennyaya-blagodarnost",
    title: "Медитация",
    description: "Короткая утренняя практика благодарности для настройки на позитивный день.",
    category: "morning",
    duration: "11 мин",
    level: "beginner",
    coverImage: "/images/meditations/morning-gratitude.jpg",
    youtubeLink: "https://youtu.be/VBMTEqrRtlE?si=nIw029eOBWVhD8b4",
    youtubeVideoId: "VBMTEqrRtlE",
    isBlackWhite: false,
    status: "available",
    featured: false
  },
  {
    id: "10",
    slug: "iscelenie-serdca",
    title: "Медитация",
    description: "Медитация для исцеления сердечных ран, отпускания боли и открытия сердца для любви.",
    category: "healing",
    duration: "15 мин",
    level: "intermediate",
    coverImage: "/images/meditations/heart-healing.jpg",
    youtubeLink: "https://youtu.be/bX7YVDFEC3c?si=v6rA2bLx1E45oe81",
    youtubeVideoId: "bX7YVDFEC3c",
    isBlackWhite: false,
    status: "available",
    featured: true
  },
  {
    id: "11",
    slug: "aktivaciya-tretiego-glaza",
    title: "Медитация",
    description: "Практика для развития интуиции и активации шестой чакры.",
    category: "deep",
    duration: "16 мин",
    level: "advanced",
    coverImage: "/images/meditations/third-eye.jpg",
    youtubeLink: "https://youtu.be/NpN5W2vjfNc?si=3hSUrv2TOUp8ECd6",
    youtubeVideoId: "NpN5W2vjfNc",
    isBlackWhite: false,
    status: "available",
    featured: false
  },
  {
    id: "12",
    slug: "bw-vozrozhdenie",
    title: "Медитация",
    description: "Медитация трансформации и перерождения. Отпускание старого и рождение нового себя.",
    category: "black_white",
    duration: "18 мин",
    level: "advanced",
    coverImage: "/images/meditations/bw-rebirth.jpg",
    youtubeLink: "https://youtu.be/n8EvRN-VLSc?si=wB_IqT0g3-nBYV5N",
    youtubeVideoId: "n8EvRN-VLSc",
    isBlackWhite: true,
    status: "available",
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
