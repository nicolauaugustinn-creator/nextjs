export interface Service {
  id: string
  name: string
  price: number
  description: string
  isPremium?: boolean
  category?: string
}

export const services: Service[] = [
  {
    id: "1",
    name: "Код успеха",
    price: 43,
    description: "Узнайте свой личный код успеха",
    category: "mini-courses"
  },
  {
    id: "2",
    name: "Планетарная нумерология",
    price: 23,
    description: "Влияние планет на вашу судьбу",
    category: "mini-courses"
  },
  {
    id: "3",
    name: "Детская матрица",
    price: 49,
    description: "Понимание ребёнка через дату рождения",
    category: "mini-courses"
  },
  {
    id: "4",
    name: "Травмы по дате рождения",
    price: 19,
    description: "Исцеление глубинных травм",
    category: "mini-courses"
  },
  {
    id: "5",
    name: "Характеристика личности",
    price: 29,
    description: "Полный портрет личности",
    category: "mini-courses"
  },
  {
    id: "6",
    name: "Как наполнить себя энергией",
    price: 18,
    description: "Источники энергии",
    category: "mini-courses"
  },
  {
    id: "7",
    name: "Где мой Б / 6",
    price: 73,
    description: "Денежный код и финансы",
    category: "special"
  },
  {
    id: "8",
    name: "Код сексуальности",
    price: 15,
    description: "Раскройте свою сексуальную энергию",
    category: "mini-courses"
  },
  {
    id: "9",
    name: "Отношения",
    price: 47,
    description: "Секреты гармоничных отношений",
    category: "mini-courses"
  },
  {
    id: "10",
    name: "Совместимость",
    price: 27,
    description: "Анализ совместимости партнёров",
    category: "mini-courses"
  },
  {
    id: "11",
    name: "Здоровье",
    price: 47,
    description: "Здоровье через призму цифр",
    category: "mini-courses"
  },
  {
    id: "12",
    name: "Беременность",
    price: 29,
    description: "Беременность и рождение",
    category: "special"
  },
  {
    id: "13",
    name: "Предназначение",
    price: 49,
    description: "Высшая миссия и призвание",
    category: "mini-courses"
  },
  {
    id: "14",
    name: "Роковые ошибки",
    price: 27,
    description: "Ошибки прошлых воплощений",
    category: "mini-courses"
  },
  {
    id: "15",
    name: "Колесо Сансары",
    price: 27,
    description: "Цикл перерождений и кармические уроки",
    category: "mini-courses"
  },
  {
    id: "16",
    name: "Гайровид 1",
    price: 99,
    description: "Полный анализ матрицы жизни",
    category: "premium",
    isPremium: true
  },
  {
    id: "17",
    name: "Гайровид 2",
    price: 99,
    description: "Расширенный анализ судьбы",
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
