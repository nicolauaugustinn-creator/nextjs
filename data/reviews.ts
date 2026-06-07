export interface Review {
  id: string
  clientName: string
  clientAvatar?: string
  text?: {
    ro?: string
    ru?: string
    en?: string
  }
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
    clientName: "Valentina M.",
    clientAvatar: "/images/reviews/avatar-valentina.png",
    text: {
      ro: "Mulțumesc mult din inimă Valentina! Sunt foarte recunoscătoare că m-ati ajutat. Vorba ceea doar că în sens bun: cu cine te dezvolți de acolo și te îmbogățești. Vă doresc tot binele din lume!",
      ru: "Спасибо вам, Валентина, за огромный опыт, за эту трансформацию, за этот рост. Я вам безумно благодарна! Вы действительно помогли мне вырасти, словно выросли во мне другого человека. И я начала смотреть на жизнь совершенно под другим углом!",
      en: "Thank you so much, Valentina! I am very grateful that you helped me. You truly helped me grow and become a better person. I now see life from a completely different perspective!"
    },
    category: "consultation",
    rating: 5,
    date: "2024-06-07",
    featured: true,
    approved: true
  },
  {
    id: "2",
    clientName: "Agata (66475)",
    clientAvatar: "/images/reviews/avatar-agata.png",
    text: {
      ro: "Eram emoționată, aproape nu am putut să scriu o recenzie vocală, dar emoțiile sunt atât de intense, mă tremur de euforie! Mulțumesc, Valentina, pentru această enormă experiență, pentru această transformare, pentru această creștere, pentru toate provocările. Sunt nemaiîncrezut de recunoscătoare! Ați ajutat-o într-adevăr să cresc, aproape ca și cum ar fi crescut în mine o altă persoană. Și am începera să mă gândesc la viață sub o cu totul alt unghi!",
      ru: "Блин, я хотела записать голосовое, но не получается, потому что у меня сейчас такие эмоции, я вся дрожу от этой эйфории! Спасибо вам, Валентина, за этот огромный опыт, за эту трансформацию, за этот рост, за все челленджи. Я вам безумно благодарна! Спасибо вам огромное за всё. Вы действительно помогли мне вырасти, словно выросли во мне другого человека. И я начала смотреть на жизнь совершенно под другим углом!",
      en: "I was so emotional, I almost couldn't record a voice review because my emotions are overwhelming - I'm trembling with euphoria! Thank you, Valentina, for this huge experience, for this transformation, for this growth, for all the challenges. I'm incredibly grateful! You truly helped me grow, it's like another person has grown inside me. And I started looking at life from a completely different angle!"
    },
    category: "course",
    rating: 5,
    date: "2024-06-07",
    featured: true,
    approved: true
  },
  {
    id: "3",
    clientName: "Екатерина С.",
    clientAvatar: "/images/reviews/avatar-ekaterina.png",
    text: {
      ro: "Sunt șocată! Nu sunt cuvinte să descriu. Doamna, sunteți atât de deșteaptă! Sunt atât de recunoscătoare că ați apărut pe pagina mea și viața ne-a apropiat. Totul se întâmplă din motiv!",
      ru: "Если сказать что я в шоке это мало сказано. Я прям вся в шоке шок в шоке! Господи какая вы умница, как я благодарна что вы попали мне на страницу и я вас увидела и жизнь нас с вами подогнала, все в этой жизни не с проста!",
      en: "I'm shocked! There are no words to describe how I feel. You are so wise! I'm incredibly grateful that you appeared on my page and life brought us together. Everything happens for a reason!"
    },
    category: "consultation",
    rating: 5,
    date: "2024-01-15",
    featured: true,
    approved: true
  },
  {
    id: "4",
    clientName: "Ирина М.",
    clientAvatar: "/images/reviews/avatar-irina.png",
    text: {
      ro: "Bună dimineața! Sperând că dormiți uneori! Totul este atât de interesant. Îmi place tare mult, sunt praf. Cred că ochii mei v-au ales pe voi fără întâmplare. Inima mea primește clar informațiile pe care le oferiți.",
      ru: "Доброе утро! Надеюсь вы вообще спите когда нибудь. Это всё ооочень интересно. Мне так нравится, я просто в восторге. Я думаю, мои глаза выбрали вас не случайно. Моё сердце прямо и четко воспринимает информацию которую вы даёте.",
      en: "Good morning! I hope you sleep sometimes! Everything is so interesting. I love it, I'm absolutely delighted. I think my eyes chose you not by chance. My heart clearly understands the information you share."
    },
    category: "course",
    rating: 5,
    date: "2024-01-20",
    featured: true,
    approved: true
  },
  {
    id: "5",
    clientName: "Валентина К.",
    clientAvatar: "/images/reviews/avatar-valentina-k.png",
    text: {
      ro: "E bine întotdeauna cu cuvinte bune! Îmi este teamă că nu ați dispărut din recomandări de la început și mi-a plăcut ceea ce spuneți și m-am abonat la voi, și apoi ne-am întâlnit în viață! Vă mulțumesc din tot sufletul, Valentina! Mulțumesc pentru iluminarea unor momente, mereu mă ascult la tot ce spuneți! Vă așteaptă un viitor minunat! Să nu plece din viața ta nici fericire, nici bucurie și ceea ce faci să-ți aducă roade! Păstrează-ți puterea spirituală, ea este specială pentru tine!",
      ru: "Конечно всегда добрым словом! Мне кажется, что Вы не зря мне попались сначала в рекомендациях и мне понравилось то что вы рассказываете и подписалась на вас, а потом мы встретились в жизни! Благодарю Вас всем сердцем Валентина за то, что подсветили мне некоторые моменты, всегда прислушиваюсь ко всему, что Вы рассказываете! Вас ждет большое будущее! Пусть счастье и радость не отходят от Вас ни на шаг и то чем Вы занимаетесь приносит Вам плоды! Берегите Вашу внутреннюю силу, она у Вас особенная!",
      en: "Always with kind words! It seems that it was no accident that you appeared in my recommendations - I loved what you share and I subscribed to you, and then we met in life! Thank you with all my heart, Valentina, for illuminating some moments for me. I always listen to everything you tell! You have a great future ahead! May happiness and joy never leave you and may everything you do bring you fruits! Cherish your inner strength, it is special in you!"
    },
    category: "consultation",
    rating: 5,
    date: "2024-06-07",
    featured: true,
    approved: true
  },
  {
    id: "6",
    clientName: "Анна К.",
    clientAvatar: "/images/reviews/avatar-anna.png",
    text: {
      ro: "Am terminat cursul 'Steaua Karmică' și viața mea s-a schimbat. În sfârșit înțeleg de ce s-au întâmplat anumite lucruri și cum să merg mai departe. Valentina este un mentor incredibil!",
      ru: "Прошла курс 'Кармическая звезда' и моя жизнь изменилась. Наконец-то я понимаю, почему со мной происходили определённые события и как двигаться дальше. Валентина — невероятный наставник!",
      en: "I completed the 'Karmic Star' course and my life changed. Finally, I understand why certain things happened to me and how to move forward. Valentina is an incredible mentor!"
    },
    category: "course",
    rating: 5,
    date: "2024-02-01",
    featured: true,
    approved: true
  },
  {
    id: "7",
    clientName: "Мария Д.",
    clientAvatar: "/images/reviews/avatar-maria.png",
    text: {
      ro: "Consultația mi-a deschis ochii asupra multor lucruri. Acum știu punctele mele forte și înțeleg pe ce trebuie să lucrez. Mulțumesc pentru abordarea atentă și profundă!",
      ru: "Консультация открыла мне глаза на многое. Теперь я знаю свои сильные стороны и понимаю, над чем нужно работать. Благодарю за бережный и глубокий подход!",
      en: "The consultation opened my eyes to many things. Now I know my strengths and understand what I need to work on. Thank you for the careful and deep approach!"
    },
    category: "consultation",
    rating: 5,
    date: "2024-02-10",
    featured: true,
    approved: true
  },
  {
    id: "8",
    clientName: "Ольга В.",
    clientAvatar: "/images/reviews/avatar-olga.png",
    text: {
      ro: "Meditațiile Black & White sunt ceva special. Adâncimea imersiei este incredibilă. După practica 'Tăcerea sufletului' am simțit o liniște pe care nu am resimțit-o în ani.",
      ru: "Медитации Black & White — это нечто особенное. Глубина погружения невероятная. После практики 'Тишина души' я почувствовала такое спокойствие, какого не испытывала годами.",
      en: "The Black & White meditations are something special. The depth of immersion is incredible. After the 'Silence of the Soul' practice, I felt a peace I hadn't experienced in years."
    },
    category: "meditation",
    rating: 5,
    date: "2024-02-20",
    featured: true,
    approved: true
  },
  {
    id: "9",
    clientName: "Наталья Л.",
    clientAvatar: "/images/reviews/avatar-natalia.png",
    text: {
      ro: "Retragerea m-a schimbat viața. Trei zile de muncă profundă înconjurate de oameni care gândesc la fel. M-am întors acasă ca o persoană diferită. Aștept cu nerăbdare următoarea!",
      ru: "Ретрит изменил мою жизнь. Три дня глубокой работы в окружении единомышленников. Вернулась домой другим человеком. Уже жду следующий!",
      en: "The retreat changed my life. Three days of deep work surrounded by like-minded people. I came home as a different person. I'm already looking forward to the next one!"
    },
    category: "retreat",
    rating: 5,
    date: "2024-03-01",
    featured: true,
    approved: true
  },
  {
    id: "10",
    clientName: "Юлия С.",
    clientAvatar: "/images/reviews/avatar-julia.png",
    text: {
      ro: "Mini-cursul 'Unde sunt banii mei mari' m-a ajutat să deblochez fluxul de bani. Într-o lună după absolvire am primit o creștere neașteptată!",
      ru: "Мини-курс 'Где мои большие деньги' помог мне разблокировать денежный поток. Через месяц после прохождения получила неожиданное повышение!",
      en: "The mini-course 'Where Are My Big Money' helped me unlock the money flow. A month after completing it, I received an unexpected promotion!"
    },
    category: "course",
    rating: 5,
    date: "2024-03-20",
    featured: true,
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
