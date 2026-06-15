export interface Service {
  id: string
  name: string
  price: number
  description: string
  image?: string
  isPremium?: boolean
  category?: string
}

export const services: Service[] = [
  {
    id: "1",
    name: "Код успеха",
    price: 43,
    description: "Узнайте свой личный код успеха",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-15-11-yegbGtf1HQOJdnjNbJNj95OxzBMKkW.jpg",
    category: "mini-courses"
  },
  {
    id: "2",
    name: "Планетарная нумерология",
    price: 23,
    description: "Влияние планет на вашу судьбу",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-15-12-Sio8tHD2DFRtPUkfwwCjawJpgT7upJ.jpg",
    category: "mini-courses"
  },
  {
    id: "3",
    name: "Детская матрица",
    price: 49,
    description: "Понимание ребёнка через дату рождения",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-15-13-tranuwtxUn8XBLggZwRnL3vqVjdNwo.jpg",
    category: "mini-courses"
  },
  {
    id: "4",
    name: "Травмы по дате рождения",
    price: 19,
    description: "Исцеление глубинных травм",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-15-14-HxOBI0EDggmGISRi9l2rUDsgLvrQfL.jpg",
    category: "mini-courses"
  },
  {
    id: "5",
    name: "Характеристика личности",
    price: 29,
    description: "Полный портрет личности",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-15-15-WmQns6FJlikTE0rTvXdvvFwGFLwRdv.jpg",
    category: "mini-courses"
  },
  {
    id: "6",
    name: "Как наполнить себя энергией",
    price: 18,
    description: "Источники энергии",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-15-16-lkfIuRAQ4bKJ4YckWufH9ujF7rkvQ5.jpg",
    category: "mini-courses"
  },
  {
    id: "7",
    name: "Где мой Б / 6",
    price: 73,
    description: "Денежный код и финансы",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-15-17-mRZSss4g3HO2dEIsjKb215PLx4Y1wp.jpg",
    category: "special"
  },
  {
    id: "8",
    name: "Код сексуальности",
    price: 15,
    description: "Раскройте свою сексуальную энергию",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-15-18-q0OrxgZNOFBUL7JkfVHJVlqbWVQMpo.jpg",
    category: "mini-courses"
  },
  {
    id: "9",
    name: "Отношения",
    price: 47,
    description: "Секреты гармоничных отношений",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-15-19-NaAEoDaOQK30RxtzN6eOUzP3dlykJs.jpg",
    category: "mini-courses"
  },
  {
    id: "10",
    name: "Совместимость",
    price: 27,
    description: "Анализ совместимости партнёров",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-15-20-A3bT0VBJRXxD9EIF0K4cTJUi6jlr4g.jpg",
    category: "mini-courses"
  },
  {
    id: "11",
    name: "Здоровье",
    price: 47,
    description: "Здоровье через призму цифр",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_755-a0dtjb8Mzz8ThXSiZyYmy7ecCuasxr.png",
    category: "mini-courses"
  },
  {
    id: "12",
    name: "Беременность",
    price: 29,
    description: "Беременность и рождение",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-29-51-QdyDCVctTGt4ppTLHY1cbDe7LK5u93.jpg",
    category: "special"
  },
  {
    id: "13",
    name: "Предназначение",
    price: 49,
    description: "Высшая миссия и призвание",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-29-50-UjMhANbWfeE9Tjmm9tQh3dyxwd9GqU.jpg",
    category: "mini-courses"
  },
  {
    id: "14",
    name: "Роковые ошибки",
    price: 27,
    description: "Ошибки прошлых воплощений",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-15-12-Sio8tHD2DFRtPUkfwwCjawJpgT7upJ.jpg",
    category: "mini-courses"
  },
  {
    id: "15",
    name: "Колесо Сансары",
    price: 27,
    description: "Цикл перерождений и кармические уроки",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-29-52-tCLel3nSQGLp09JoRtOmKcMu4mRYvY.jpg",
    category: "mini-courses"
  },
  {
    id: "16",
    name: "Гайровид 1",
    price: 99,
    description: "Полный анализ матрицы жизни",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_768-Y9rivsxqfE8OETl0vcVAlJNa790G09.png",
    category: "premium",
    isPremium: true
  },
  {
    id: "17",
    name: "Гайровид 2",
    price: 99,
    description: "Расширенный анализ судьбы",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-15_15-29-51-QdyDCVctTGt4ppTLHY1cbDe7LK5u93.jpg",
    category: "premium",
    isPremium: true
  }
]

export function getServiceById(id: string): Service | undefined {
  return services.find(s => s.id === id)
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter(s => s.category === category)
}

export function getPremiumServices(): Service[] {
  return services.filter(s => s.isPremium)
}
