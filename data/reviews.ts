export interface Review {
  id: string
  clientName: string
  clientAvatar?: string
  text?: string
  screenshotImage?: string
  videoPlaceholder?: string
  audioPlaceholder?: string
  category: "course" | "consultation" | "meditation" | "retreat"
  rating: number
  date: string
  featured: boolean
  approved: boolean
}

export const reviews: Review[] = [
  {
    id: "1",
    clientName: "Екатерина С.",
    clientAvatar: "/images/reviews/avatar-1.jpg",
    text: "Если сказать что я в шоке это мало сказано. Я прям вся в шоке шок в шоке! Господи какая вы умница, как я благодарна что вы попали мне на страницу и я вас увидела и жизнь нас с вами подогнала, все в этой жизни не с проста!",
    category: "consultation",
    rating: 5,
    date: "2024-01-15",
    featured: true,
    approved: true
  },
  {
    id: "2",
    clientName: "Ирина М.",
    clientAvatar: "/images/reviews/avatar-2.jpg",
    text: "Доброе утро! Надеюсь вы вообще спите когда нибудь. Это всё ооочень интересно. Мне так нравится, я просто в восторге. Я думаю, мои глаза выбрали вас не случайно. Моё сердце прямо и четко воспринимает информацию которую вы даёте.",
    category: "course",
    rating: 5,
    date: "2024-01-20",
    featured: true,
    approved: true
  },
  {
    id: "3",
    clientName: "Анна К.",
    text: "Прошла курс 'Кармическая звезда' и моя жизнь изменилась. Наконец-то я понимаю, почему со мной происходили определённые события и как двигаться дальше. Валентина — невероятный наставник!",
    category: "course",
    rating: 5,
    date: "2024-02-01",
    featured: true,
    approved: true
  },
  {
    id: "4",
    clientName: "Мария Д.",
    clientAvatar: "/images/reviews/avatar-4.jpg",
    text: "Консультация открыла мне глаза на многое. Теперь я знаю свои сильные стороны и понимаю, над чем нужно работать. Благодарю за бережный и глубокий подход!",
    category: "consultation",
    rating: 5,
    date: "2024-02-10",
    featured: false,
    approved: true
  },
  {
    id: "5",
    clientName: "Светлана Р.",
    screenshotImage: "/images/reviews/screenshot-1.jpg",
    category: "consultation",
    rating: 5,
    date: "2024-02-15",
    featured: true,
    approved: true
  },
  {
    id: "6",
    clientName: "Ольга В.",
    text: "Медитации Black & White — это нечто особенное. Глубина погружения невероятная. После практики 'Тишина души' я почувствовала такое спокойствие, какого не испытывала годами.",
    category: "meditation",
    rating: 5,
    date: "2024-02-20",
    featured: true,
    approved: true
  },
  {
    id: "7",
    clientName: "Наталья Л.",
    clientAvatar: "/images/reviews/avatar-7.jpg",
    text: "Ретрит изменил мою жизнь. Три дня глубокой работы в окружении единомышленников. Вернулась домой другим человеком. Уже жду следующий!",
    category: "retreat",
    rating: 5,
    date: "2024-03-01",
    featured: true,
    approved: true
  },
  {
    id: "8",
    clientName: "Виктория П.",
    videoPlaceholder: "review-video-1.mov",
    category: "course",
    rating: 5,
    date: "2024-03-05",
    featured: true,
    approved: true
  },
  {
    id: "9",
    clientName: "Елена К.",
    audioPlaceholder: "review-audio-1.mp3",
    category: "consultation",
    rating: 5,
    date: "2024-03-10",
    featured: false,
    approved: true
  },
  {
    id: "10",
    clientName: "Татьяна М.",
    text: "Я обязательно в следующем месяце хочу к вам в фокус группу. Я сегодня поставлю себе напоминание на телефон, чтобы не забыть, я вас просто так, теперь не потеряю.",
    category: "course",
    rating: 5,
    date: "2024-03-15",
    featured: false,
    approved: true
  },
  {
    id: "11",
    clientName: "Юлия С.",
    clientAvatar: "/images/reviews/avatar-11.jpg",
    text: "Мини-курс 'Где мои большие деньги' помог мне разблокировать денежный поток. Через месяц после прохождения получила неожиданное повышение!",
    category: "course",
    rating: 5,
    date: "2024-03-20",
    featured: true,
    approved: true
  },
  {
    id: "12",
    clientName: "Алина Н.",
    screenshotImage: "/images/reviews/screenshot-2.jpg",
    category: "meditation",
    rating: 5,
    date: "2024-03-25",
    featured: false,
    approved: true
  }
]

export function getFeaturedReviews(): Review[] {
  return reviews.filter(r => r.featured && r.approved)
}

export function getReviewsByCategory(category: Review["category"]): Review[] {
  return reviews.filter(r => r.category === category && r.approved)
}

export function getApprovedReviews(): Review[] {
  return reviews.filter(r => r.approved)
}
