"use client"

// Simple in-memory store with localStorage persistence
// This works in browser and persists between page reloads

export interface Course {
  id: string
  slug: string
  title: string
  subtitle?: string
  description: string
  image: string
  price: number
  originalPrice?: number
  currency: string
  duration: string
  lessonsCount: number
  level: "beginner" | "intermediate" | "advanced"
  category: string
  instructor: string
  rating: number
  studentsCount: number
  status: "active" | "draft" | "coming_soon"
  featured: boolean
  modules: { title: string; lessons: string[] }[]
  createdAt: string
  updatedAt: string
}

export interface Meditation {
  id: string
  slug: string
  title: string
  description: string
  duration: string
  image: string
  audioUrl?: string
  category: string
  level: "beginner" | "intermediate" | "advanced"
  instructor: string
  status: "active" | "draft" | "coming_soon"
  featured: boolean
  createdAt: string
  updatedAt: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  author: string
  status: "published" | "draft"
  featured: boolean
  createdAt: string
  updatedAt: string
}

export interface Review {
  id: string
  author: string
  avatar?: string
  rating: number
  text: string
  category: string
  mediaType?: "video" | "audio" | "screenshot"
  mediaUrl?: string
  status: "pending" | "approved" | "rejected"
  featured: boolean
  createdAt: string
}

// Storage keys
const STORAGE_KEYS = {
  courses: "karma_admin_courses",
  meditations: "karma_admin_meditations",
  blog: "karma_admin_blog",
  reviews: "karma_admin_reviews",
}

// Helper to get data from localStorage
function getFromStorage<T>(key: string, defaultData: T[]): T[] {
  if (typeof window === "undefined") return defaultData
  try {
    const stored = localStorage.getItem(key)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (e) {
    console.error("Error reading from localStorage:", e)
  }
  return defaultData
}

// Helper to save data to localStorage
function saveToStorage<T>(key: string, data: T[]): void {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (e) {
    console.error("Error saving to localStorage:", e)
  }
}

// Generate unique ID
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

// Default data
const defaultCourses: Course[] = [
  {
    id: "1",
    slug: "osnovy-numerologii",
    title: "Основы нумерологии",
    subtitle: "Базовый курс для начинающих",
    description: "Научитесь читать числа и понимать их влияние на вашу жизнь",
    image: "/images/courses/numerology-basics.jpg",
    price: 4900,
    originalPrice: 7900,
    currency: "RUB",
    duration: "4 недели",
    lessonsCount: 12,
    level: "beginner",
    category: "numerology",
    instructor: "Мария Иванова",
    rating: 4.9,
    studentsCount: 1250,
    status: "active",
    featured: true,
    modules: [
      { title: "Введение в нумерологию", lessons: ["Что такое нумерология", "История нумерологии"] },
      { title: "Числа от 1 до 9", lessons: ["Значение числа 1", "Значение числа 2"] }
    ],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "2",
    slug: "karmicheskaya-numerologiya",
    title: "Кармическая нумерология",
    subtitle: "Глубокое погружение в карму чисел",
    description: "Узнайте свои кармические долги и задачи через числа",
    image: "/images/courses/karmic-numerology.jpg",
    price: 7900,
    originalPrice: 12900,
    currency: "RUB",
    duration: "6 недель",
    lessonsCount: 18,
    level: "intermediate",
    category: "karma",
    instructor: "Мария Иванова",
    rating: 4.8,
    studentsCount: 890,
    status: "active",
    featured: true,
    modules: [],
    createdAt: "2024-02-01",
    updatedAt: "2024-02-01"
  }
]

const defaultMeditations: Meditation[] = [
  {
    id: "1",
    slug: "utrennyaya-meditatsiya",
    title: "Утренняя медитация",
    description: "Начните день с энергией и ясностью ума",
    duration: "15 мин",
    image: "/images/meditations/morning.jpg",
    audioUrl: "/audio/morning-meditation.mp3",
    category: "morning",
    level: "beginner",
    instructor: "Мария Иванова",
    status: "active",
    featured: true,
    createdAt: "2024-01-10",
    updatedAt: "2024-01-10"
  },
  {
    id: "2",
    slug: "meditatsiya-na-izobilie",
    title: "Медитация на изобилие",
    description: "Привлеките изобилие в свою жизнь",
    duration: "20 мин",
    image: "/images/meditations/abundance.jpg",
    category: "energy",
    level: "intermediate",
    instructor: "Мария Иванова",
    status: "active",
    featured: false,
    createdAt: "2024-01-12",
    updatedAt: "2024-01-12"
  }
]

const defaultBlogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "chto-takoe-numerologiya",
    title: "Что такое нумерология?",
    excerpt: "Введение в мир чисел и их значений",
    content: "Нумерология — это древняя наука о числах...",
    image: "/images/blog/numerology-intro.jpg",
    category: "basics",
    author: "Мария Иванова",
    status: "published",
    featured: true,
    createdAt: "2024-01-05",
    updatedAt: "2024-01-05"
  }
]

const defaultReviews: Review[] = [
  {
    id: "1",
    author: "Анна К.",
    avatar: "/images/reviews/avatar-1.jpg",
    rating: 5,
    text: "Курс полностью изменил мое понимание чисел. Рекомендую всем!",
    category: "course",
    status: "approved",
    featured: true,
    createdAt: "2024-01-20"
  },
  {
    id: "2",
    author: "Дмитрий П.",
    rating: 5,
    text: "Отличная консультация! Узнал много нового о себе.",
    category: "consultation",
    status: "approved",
    featured: false,
    createdAt: "2024-01-22"
  }
]

// COURSES CRUD
export const coursesStore = {
  getAll(): Course[] {
    return getFromStorage(STORAGE_KEYS.courses, defaultCourses)
  },
  
  getById(id: string): Course | undefined {
    return this.getAll().find(c => c.id === id)
  },
  
  create(course: Omit<Course, "id" | "createdAt" | "updatedAt">): Course {
    const courses = this.getAll()
    const newCourse: Course = {
      ...course,
      id: generateId(),
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0]
    }
    courses.push(newCourse)
    saveToStorage(STORAGE_KEYS.courses, courses)
    return newCourse
  },
  
  update(id: string, data: Partial<Course>): Course | null {
    const courses = this.getAll()
    const index = courses.findIndex(c => c.id === id)
    if (index === -1) return null
    
    courses[index] = {
      ...courses[index],
      ...data,
      updatedAt: new Date().toISOString().split("T")[0]
    }
    saveToStorage(STORAGE_KEYS.courses, courses)
    return courses[index]
  },
  
  delete(id: string): boolean {
    const courses = this.getAll()
    const filtered = courses.filter(c => c.id !== id)
    if (filtered.length === courses.length) return false
    saveToStorage(STORAGE_KEYS.courses, filtered)
    return true
  }
}

// MEDITATIONS CRUD
export const meditationsStore = {
  getAll(): Meditation[] {
    return getFromStorage(STORAGE_KEYS.meditations, defaultMeditations)
  },
  
  getById(id: string): Meditation | undefined {
    return this.getAll().find(m => m.id === id)
  },
  
  create(meditation: Omit<Meditation, "id" | "createdAt" | "updatedAt">): Meditation {
    const meditations = this.getAll()
    const newMeditation: Meditation = {
      ...meditation,
      id: generateId(),
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0]
    }
    meditations.push(newMeditation)
    saveToStorage(STORAGE_KEYS.meditations, meditations)
    return newMeditation
  },
  
  update(id: string, data: Partial<Meditation>): Meditation | null {
    const meditations = this.getAll()
    const index = meditations.findIndex(m => m.id === id)
    if (index === -1) return null
    
    meditations[index] = {
      ...meditations[index],
      ...data,
      updatedAt: new Date().toISOString().split("T")[0]
    }
    saveToStorage(STORAGE_KEYS.meditations, meditations)
    return meditations[index]
  },
  
  delete(id: string): boolean {
    const meditations = this.getAll()
    const filtered = meditations.filter(m => m.id !== id)
    if (filtered.length === meditations.length) return false
    saveToStorage(STORAGE_KEYS.meditations, filtered)
    return true
  }
}

// BLOG CRUD
export const blogStore = {
  getAll(): BlogPost[] {
    return getFromStorage(STORAGE_KEYS.blog, defaultBlogPosts)
  },
  
  getById(id: string): BlogPost | undefined {
    return this.getAll().find(b => b.id === id)
  },
  
  create(post: Omit<BlogPost, "id" | "createdAt" | "updatedAt">): BlogPost {
    const posts = this.getAll()
    const newPost: BlogPost = {
      ...post,
      id: generateId(),
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0]
    }
    posts.push(newPost)
    saveToStorage(STORAGE_KEYS.blog, posts)
    return newPost
  },
  
  update(id: string, data: Partial<BlogPost>): BlogPost | null {
    const posts = this.getAll()
    const index = posts.findIndex(b => b.id === id)
    if (index === -1) return null
    
    posts[index] = {
      ...posts[index],
      ...data,
      updatedAt: new Date().toISOString().split("T")[0]
    }
    saveToStorage(STORAGE_KEYS.blog, posts)
    return posts[index]
  },
  
  delete(id: string): boolean {
    const posts = this.getAll()
    const filtered = posts.filter(b => b.id !== id)
    if (filtered.length === posts.length) return false
    saveToStorage(STORAGE_KEYS.blog, filtered)
    return true
  }
}

// REVIEWS CRUD
export const reviewsStore = {
  getAll(): Review[] {
    return getFromStorage(STORAGE_KEYS.reviews, defaultReviews)
  },
  
  getById(id: string): Review | undefined {
    return this.getAll().find(r => r.id === id)
  },
  
  create(review: Omit<Review, "id" | "createdAt">): Review {
    const reviews = this.getAll()
    const newReview: Review = {
      ...review,
      id: generateId(),
      createdAt: new Date().toISOString().split("T")[0]
    }
    reviews.push(newReview)
    saveToStorage(STORAGE_KEYS.reviews, reviews)
    return newReview
  },
  
  update(id: string, data: Partial<Review>): Review | null {
    const reviews = this.getAll()
    const index = reviews.findIndex(r => r.id === id)
    if (index === -1) return null
    
    reviews[index] = {
      ...reviews[index],
      ...data
    }
    saveToStorage(STORAGE_KEYS.reviews, reviews)
    return reviews[index]
  },
  
  delete(id: string): boolean {
    const reviews = this.getAll()
    const filtered = reviews.filter(r => r.id !== id)
    if (filtered.length === reviews.length) return false
    saveToStorage(STORAGE_KEYS.reviews, filtered)
    return true
  },
  
  approve(id: string): Review | null {
    return this.update(id, { status: "approved" })
  },
  
  reject(id: string): Review | null {
    return this.update(id, { status: "rejected" })
  }
}
