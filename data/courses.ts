export interface Course {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  category: "main" | "mini"
  coverImage: string
  format: string
  duration: string
  level: "beginner" | "intermediate" | "advanced"
  modules: CourseModule[]
  benefits: string[]
  forWhom: string[]
  status: "available" | "coming_soon" | "archived"
  featured: boolean
  price?: number
  originalPrice?: number
}

export interface CourseModule {
  id: string
  title: string
  lessons: CourseLesson[]
}

export interface CourseLesson {
  id: string
  title: string
  duration: string
  videoPlaceholder?: string
  youtubeLink?: string
}

export const courses: Course[] = [
  {
    id: "1",
    slug: "karmicheskaya-zvezda-individual",
    title: "Кармическая звезда — индивидуальный курс",
    shortDescription: "Полный разбор вашей кармической матрицы с персональным сопровождением",
    fullDescription: "Глубокий индивидуальный курс, где вы познакомитесь с методом «Кармическая звезда» и получите полный разбор своей матрицы судьбы. Вы узнаете о своём предназначении, энергетических блоках, отношениях, деньгах и здоровье через призму цифр вашей даты рождения.",
    category: "main",
    coverImage: "/images/courses/karmic-star-individual.jpg",
    format: "Видео-уроки + персональная поддержка",
    duration: "4 недели",
    level: "beginner",
    modules: [
      {
        id: "m1",
        title: "Введение в метод Кармической звезды",
        lessons: [
          { id: "l1", title: "Что такое кармическая звезда", duration: "25 мин", videoPlaceholder: "IMG_2905.MOV" },
          { id: "l2", title: "Как рассчитать свою матрицу", duration: "30 мин", videoPlaceholder: "IMG_2909.MOV" },
          { id: "l3", title: "Значение каждой точки звезды", duration: "45 мин" }
        ]
      },
      {
        id: "m2",
        title: "Энергия и деньги",
        lessons: [
          { id: "l4", title: "Финансовый код в матрице", duration: "35 мин" },
          { id: "l5", title: "Блоки денежного потока", duration: "40 мин" },
          { id: "l6", title: "Практика: активация денежной энергии", duration: "20 мин" }
        ]
      },
      {
        id: "m3",
        title: "Отношения и совместимость",
        lessons: [
          { id: "l7", title: "Код отношений", duration: "35 мин" },
          { id: "l8", title: "Совместимость партнёров", duration: "45 мин" },
          { id: "l9", title: "Кармические уроки в отношениях", duration: "30 мин" }
        ]
      },
      {
        id: "m4",
        title: "Предназначение и миссия",
        lessons: [
          { id: "l10", title: "Высшая миссия души", duration: "40 мин" },
          { id: "l11", title: "Реализация предназначения", duration: "35 мин" },
          { id: "l12", title: "Интеграция знаний", duration: "30 мин" }
        ]
      }
    ],
    benefits: [
      "Персональный разбор вашей матрицы",
      "Видео-уроки в записи",
      "Доступ к закрытому Telegram-каналу",
      "Поддержка на протяжении всего курса",
      "Рабочие материалы и шаблоны"
    ],
    forWhom: [
      "Тем, кто хочет понять своё предназначение",
      "Тем, кто ищет ответы на вопросы о деньгах и отношениях",
      "Тем, кто готов к глубокой трансформации",
      "Тем, кто хочет изучить нумерологию для себя"
    ],
    status: "available",
    featured: true,
    price: 199,
    originalPrice: 299
  },
  {
    id: "2",
    slug: "karmicheskaya-zvezda-group",
    title: "Кармическая звезда — групповой курс",
    shortDescription: "Изучите метод кармической звезды в группе единомышленников",
    fullDescription: "Групповой формат курса по методу «Кармическая звезда». Вы пройдёте обучение в группе, получите обратную связь и сможете практиковаться на реальных примерах. Идеальный вариант для тех, кто хочет не только понять свою матрицу, но и научиться читать матрицы других.",
    category: "main",
    coverImage: "/images/courses/karmic-star-group.jpg",
    format: "Онлайн-занятия в группе",
    duration: "6 недель",
    level: "beginner",
    modules: [
      {
        id: "m1",
        title: "Основы метода",
        lessons: [
          { id: "l1", title: "Знакомство с группой и введение", duration: "60 мин" },
          { id: "l2", title: "Расчёт матрицы", duration: "90 мин" },
          { id: "l3", title: "Практика в парах", duration: "60 мин" }
        ]
      },
      {
        id: "m2",
        title: "Глубокий анализ",
        lessons: [
          { id: "l4", title: "Деньги и энергия", duration: "90 мин" },
          { id: "l5", title: "Отношения", duration: "90 мин" },
          { id: "l6", title: "Здоровье и предназначение", duration: "90 мин" }
        ]
      }
    ],
    benefits: [
      "Живые групповые занятия",
      "Практика на реальных примерах",
      "Сертификат по завершении",
      "Закрытый чат группы",
      "Записи всех занятий"
    ],
    forWhom: [
      "Тем, кто любит учиться в группе",
      "Тем, кто хочет практиковаться на других",
      "Будущим практикам нумерологии",
      "Тем, кто ценит обмен опытом"
    ],
    status: "available",
    featured: true,
    price: 149,
    originalPrice: 249
  }
]

export const miniCourses: Course[] = [
  {
    id: "m1",
    slug: "kod-uspeha",
    title: "Код успеха",
    shortDescription: "Узнайте свой личный код успеха и научитесь его активировать",
    fullDescription: "Мини-курс о том, как найти свой уникальный путь к успеху через цифры даты рождения.",
    category: "mini",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-15-11-yegbGtf1HQOJdnjNbJNj95OxzBMKkW.jpg",
    format: "Видео-уроки",
    duration: "3 урока",
    level: "beginner",
    modules: [],
    benefits: ["Понимание своего кода успеха", "Практические рекомендации", "Аффирмации"],
    forWhom: ["Для всех, кто стремится к успеху"],
    status: "available",
    featured: false,
    price: 29,
    originalPrice: 49
  },
  {
    id: "m2",
    slug: "planetarnaya-numerologiya",
    title: "Планетарная нумерология",
    shortDescription: "Влияние планет на вашу судьбу через цифры",
    fullDescription: "Изучите связь между планетами и числами в вашей матрице.",
    category: "mini",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-15-12-Sio8tHD2DFRtPUkfwwCjawJpgT7upJ.jpg",
    format: "Видео-уроки",
    duration: "4 урока",
    level: "intermediate",
    modules: [],
    benefits: ["Знания о планетарных влияниях", "Расчёт личных планет"],
    forWhom: ["Для тех, кто интересуется астрологией и нумерологией"],
    status: "available",
    featured: false,
    price: 39,
    originalPrice: 59
  },
  {
    id: "m3",
    slug: "detskaya-matrica",
    title: "Детская матрица",
    shortDescription: "Понимание ребёнка через его дату рождения",
    fullDescription: "Как понять таланты, характер и потребности ребёнка через нумерологию.",
    category: "mini",
    coverImage: "/images/mini-courses/child-matrix.jpg",
    format: "Видео-уроки",
    duration: "5 уроков",
    level: "beginner",
    modules: [],
    benefits: ["Понимание ребёнка", "Рекомендации по воспитанию", "Выявление талантов"],
    forWhom: ["Родители", "Воспитатели", "Педагоги"],
    status: "available",
    featured: true,
    price: 49,
    originalPrice: 79
  },
  {
    id: "m4",
    slug: "travmy-po-date-rozhdeniya",
    title: "Травмы по дате рождения",
    shortDescription: "Исцеление глубинных травм через осознание",
    fullDescription: "Узнайте, какие кармические травмы записаны в вашей дате рождения и как их исцелить.",
    category: "mini",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-15-13-tranuwtxUn8XBLggZwRnL3vqVjdNwo.jpg",
    format: "Видео-уроки",
    duration: "4 урока",
    level: "advanced",
    modules: [],
    benefits: ["Понимание корневых травм", "Методы исцеления", "Медитации"],
    forWhom: ["Для глубокой внутренней работы"],
    status: "available",
    featured: true,
    price: 59,
    originalPrice: 99
  },
  {
    id: "m5",
    slug: "harakteristika-lichnosti",
    title: "Характеристика личности",
    shortDescription: "Полный портрет личности через цифры",
    fullDescription: "Детальный разбор характера, сильных и слабых сторон через нумерологию.",
    category: "mini",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-15-14-HxOBI0EDggmGISRi9l2rUDsgLvrQfL.jpg",
    format: "Видео-уроки",
    duration: "3 урока",
    level: "beginner",
    modules: [],
    benefits: ["Самопознание", "Понимание своих особенностей"],
    forWhom: ["Для всех желающих понять себя"],
    status: "available",
    featured: false,
    price: 29,
    originalPrice: 49
  },
  {
    id: "m6",
    slug: "kak-napolnit-sebya-energiey",
    title: "Как наполнить себя энергией",
    shortDescription: "Источники и способы наполнения энергией",
    fullDescription: "Узнайте, откуда брать энергию именно вам и как её сохранять.",
    category: "mini",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-15-15-WmQns6FJlikTE0rTvXdvvFwGFLwRdv.jpg",
    format: "Видео-уроки + практики",
    duration: "4 урока",
    level: "beginner",
    modules: [],
    benefits: ["Понимание своих источников энергии", "Практики наполнения", "Защита энергии"],
    forWhom: ["Для тех, кто чувствует упадок сил"],
    status: "available",
    featured: true,
    price: 39,
    originalPrice: 69
  },
  {
    id: "m7",
    slug: "gde-moi-bolshie-dengi",
    title: "Где мои большие деньги",
    shortDescription: "Найдите свой денежный поток",
    fullDescription: "Расшифровка финансового кода и активация денежного потока.",
    category: "mini",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-15-16-lkfIuRAQ4bKJ4YckWufH9ujF7rkvQ5.jpg",
    format: "Видео-уроки",
    duration: "5 уроков",
    level: "beginner",
    modules: [],
    benefits: ["Денежный код", "Блоки и их устранение", "Аффирмации богатства"],
    forWhom: ["Для тех, кто хочет улучшить финансы"],
    status: "available",
    featured: true,
    price: 49,
    originalPrice: 79
  },
  {
    id: "m8",
    slug: "kod-seksualnosti",
    title: "Код сексуальности",
    shortDescription: "Раскройте свою сексуальную энергию",
    fullDescription: "Понимание своей сексуальности и привлекательности через цифры.",
    category: "mini",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-15-17-mRZSss4g3HO2dEIsjKb215PLx4Y1wp.jpg",
    format: "Видео-уроки",
    duration: "3 урока",
    level: "intermediate",
    modules: [],
    benefits: ["Понимание своей сексуальности", "Раскрытие привлекательности"],
    forWhom: ["Для тех, кто хочет раскрыть свою женственность/мужественность"],
    status: "available",
    featured: false,
    price: 29,
    originalPrice: 49
  },
  {
    id: "m9",
    slug: "otnosheniya",
    title: "Отношения",
    shortDescription: "Сек��еты гармоничных отношений в цифрах",
    fullDescription: "Как строить отношения, исходя из своей матрицы и матрицы партнёра.",
    category: "mini",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-15-18-q0OrxgZNOFBUL7JkfVHJVlqbWVQMpo.jpg",
    format: "Видео-уроки",
    duration: "4 урока",
    level: "beginner",
    modules: [],
    benefits: ["Понимание паттернов отношений", "Совместимость", "Исцеление"],
    forWhom: ["Для тех, кто хочет улучшить отношения"],
    status: "available",
    featured: true,
    price: 39,
    originalPrice: 59
  },
  {
    id: "m10",
    slug: "sovmestimost-v-otnosheniyah",
    title: "Совместимость в отношениях",
    shortDescription: "Проверьте совместимость с партнёром",
    fullDescription: "Детальный анализ совместимости двух людей через нумерологию.",
    category: "mini",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-15-19-NaAEoDaOQK30RxtzN6eOUzP3dlykJs.jpg",
    format: "Видео-уроки",
    duration: "3 урока",
    level: "beginner",
    modules: [],
    benefits: ["Расчёт совместимости", "Понимание динамики пары"],
    forWhom: ["Для пар и желающих найти партнёра"],
    status: "available",
    featured: false,
    price: 29,
    originalPrice: 49
  },
  {
    id: "m11",
    slug: "zdorovye",
    title: "Здоровье",
    shortDescription: "Здоровье через призму цифр",
    fullDescription: "Как дата рождения влияет на здоровье и слабые места организма.",
    category: "mini",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-15-20-A3bT0VBJRXxD9EIF0K4cTJUi6jlr4g.jpg",
    format: "Видео-уроки",
    duration: "4 урока",
    level: "beginner",
    modules: [],
    benefits: ["Понимание слабых мест", "Профилактика", "Энергетические практики"],
    forWhom: ["Для заботящихся о здоровье"],
    status: "available",
    featured: false,
    price: 39,
    originalPrice: 59
  },
  {
    id: "m12",
    slug: "beremennost-prichina-besplodiya",
    title: "Беременность: причина бесплодия",
    shortDescription: "Кармические причины сложностей с зачатием",
    fullDescription: "Глубокий разбор нумерологических причин бесплодия и путей решения.",
    category: "mini",
    coverImage: "/images/mini-courses/pregnancy.jpg",
    format: "Видео-уроки",
    duration: "3 урока",
    level: "advanced",
    modules: [],
    benefits: ["Понимание причин", "Энергетические практики", "Поддержка"],
    forWhom: ["Для женщин, планирующих беременность"],
    status: "available",
    featured: false,
    price: 49,
    originalPrice: 79
  },
  {
    id: "m13",
    slug: "prednaznachenie-vysshaya-missiya",
    title: "Предназначение: высшая миссия души",
    shortDescription: "Откройте свою истинную миссию",
    fullDescription: "Глубокий разбор вашего предназначения и высшей миссии в этом воплощении.",
    category: "mini",
    coverImage: "/images/mini-courses/destiny.jpg",
    format: "Видео-уроки",
    duration: "5 уроков",
    level: "intermediate",
    modules: [],
    benefits: ["Понимание предназначения", "Путь реализации", "Практики"],
    forWhom: ["Для ищущих свой путь"],
    status: "available",
    featured: true,
    price: 59,
    originalPrice: 99
  },
  {
    id: "m14",
    slug: "rokovaya-oshibka-proshloe-voploshenie",
    title: "Роковая ошибка: прошлое воплощение",
    shortDescription: "Узнайте о своих прошлых жизнях",
    fullDescription: "Что принесла душа из прошлых воплощений и какие уроки нужно пройти.",
    category: "mini",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_769-NHvm499TuDF7gKAic9H8DusKboelaT.png",
    format: "Видео-уроки",
    duration: "4 урока",
    level: "advanced",
    modules: [],
    benefits: ["Знания о прошлых жизнях", "Понимание кармы", "Исцеление"],
    forWhom: ["Для глубокой духовной работы"],
    status: "available",
    featured: true,
    price: 59,
    originalPrice: 99
  },
  {
    id: "m15",
    slug: "beremennost",
    title: "Беременность",
    shortDescription: "Здоровье и гармония во время беременности",
    fullDescription: "Полное руководство по пониманию беременности через призму нумерологии.",
    category: "mini",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-29-51-QdyDCVctTGt4ppTLHY1cbDe7LK5u93.jpg",
    format: "Видео-уроки",
    duration: "5 уроков",
    level: "intermediate",
    modules: [],
    benefits: ["Понимание процесса", "Рекомендации", "Энергетическая поддержка"],
    forWhom: ["Беременные женщины", "Планирующие беременность"],
    status: "available",
    featured: true,
    price: 49,
    originalPrice: 79
  },
  {
    id: "m16",
    slug: "koleso-sansary",
    title: "Колесо Сансары",
    shortDescription: "Цикл перерождений и кармические уроки",
    fullDescription: "Древнее учение о колесе Сансары и его влиянии на вашу текущую жизнь.",
    category: "mini",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-29-50-UjMhANbWfeE9Tjmm9tQh3dyxwd9GqU.jpg",
    format: "Видео-уроки",
    duration: "6 уроков",
    level: "advanced",
    modules: [],
    benefits: ["Понимание циклов", "Кармические уроки", "Практики выхода"],
    forWhom: ["Для глубокого духовного развития"],
    status: "available",
    featured: true,
    price: 69,
    originalPrice: 119
  }
]

export function getCourseBySlug(slug: string): Course | undefined {
  return [...courses, ...miniCourses].find(c => c.slug === slug)
}

export function getFeaturedCourses(): Course[] {
  return [...courses, ...miniCourses].filter(c => c.featured)
}
