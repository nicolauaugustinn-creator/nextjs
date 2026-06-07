export interface TarotCard {
  id: string
  number: number
  name: {
    ro: string
    ru: string
    en: string
    ua: string
  }
  meaning: {
    ro: string
    ru: string
    en: string
    ua: string
  }
  image: string
}

export const tarotCards: TarotCard[] = [
  {
    id: "01",
    number: 1,
    name: { ro: "Ciobanul", ru: "Шут", en: "The Fool", ua: "Блазень" },
    meaning: {
      ro: "Nou început, aventură, naivitate și încredere. Acest card simbolizează o nouă etapă plin de posibilități.",
      ru: "Новое начало, приключение, наивность и доверие к вселенной. Этот аркан символизирует новый этап жизни.",
      en: "New beginning, adventure, innocence and faith in the universe. This card represents a fresh start full of possibilities.",
      ua: "Новий початок, пригода, наївність та віра у всесвіт. Цей аркан символізує новий етап життя."
    },
    image: "/images/tarot/01-fool.png"
  },
  {
    id: "02",
    number: 2,
    name: { ro: "Vrăjitorul", ru: "Маг", en: "The Magician", ua: "Фокусник" },
    meaning: {
      ro: "Putere, abilitate, acțiune și manifestare. Dorurile pot deveni realitate prin voința și creativitate.",
      ru: "Сила, умение, действие и манифестация. Ваши желания могут стать реальностью через волю и творчество.",
      en: "Power, skill, action and manifestation. Your desires can become reality through will and creativity.",
      ua: "Сила, вміння, дія та маніфестація. Ваші бажання можуть стати реальністю через волю та творчість."
    },
    image: "/images/tarot/02-magician.png"
  },
  {
    id: "03",
    number: 3,
    name: { ro: "Preoteasa", ru: "Жрица", en: "The High Priestess", ua: "Верховна Жриця" },
    meaning: {
      ro: "Intuiție, mister, înțelepciune și cunoaștere internă. Ascultă vocea ta interioară și instinctul.",
      ru: "Интуиция, мистика, мудрость и внутренние знания. Слушайте свой внутренний голос и инстинкты.",
      en: "Intuition, mystery, wisdom and inner knowledge. Listen to your inner voice and instincts.",
      ua: "Інтуїція, таємниця, мудрість та внутрішні знання. Слухайте свій внутрішній голос та інстинкти."
    },
    image: "/images/tarot/03-priestess.png"
  },
  {
    id: "04",
    number: 4,
    name: { ro: "Împărăteasa", ru: "Императрица", en: "The Empress", ua: "Імператриця" },
    meaning: {
      ro: "Fertilitate, abundență, frumusețe și crearivitate. Timp pentru manifestare și realizare a planurilor.",
      ru: "Плодородие, изобилие, красота и творчество. Время проявления и реализации ваших планов.",
      en: "Fertility, abundance, beauty and creativity. Time for manifestation and fulfilling your dreams.",
      ua: "Родючість, достаток, красота та творчість. Час прояву та реалізації ваших планів."
    },
    image: "/images/tarot/04-empress.png"
  },
  {
    id: "05",
    number: 5,
    name: { ro: "Împăratul", ru: "Император", en: "The Emperor", ua: "Імператор" },
    meaning: {
      ro: "Autoritate, putere, stabilitate și control. Moment pentru a prelua conducerea și responsabilitate.",
      ru: "Власть, сила, стабильность и контроль. Время взять на себя руководство и ответственность.",
      en: "Authority, power, stability and control. Time to take charge and responsibility.",
      ua: "Влада, сила, стабільність та контроль. Час взяти на себе керівництво та відповідальність."
    },
    image: "/images/tarot/05-emperor.png"
  },
  {
    id: "06",
    number: 6,
    name: { ro: "Ierarhul", ru: "Иерофант", en: "The Hierophant", ua: "Ієрофант" },
    meaning: {
      ro: "Tradițe, spiritualitate, înțelepciune și învățare. Respect și conformitate la valorile importante.",
      ru: "Традиции, духовность, мудрость и обучение. Уважение к важным ценностям и конвенциям.",
      en: "Tradition, spirituality, wisdom and learning. Respect for important values and conventions.",
      ua: "Традиції, духовність, мудрість та навчання. Повага до важливих цінностей та умовностей."
    },
    image: "/images/tarot/06-hierophant.png"
  },
  {
    id: "07",
    number: 7,
    name: { ro: "Iubiții", ru: "Влюбленные", en: "The Lovers", ua: "Коханці" },
    meaning: {
      ro: "Dragoste, conexiune, alegere și relații. Moment important pentru decizii sentimentale și inimă.",
      ru: "Любовь, связь, выбор и отношения. Важный момент для сентиментальных решений и сердца.",
      en: "Love, connection, choice and relationships. Important moment for emotional decisions and heart matters.",
      ua: "Любов, зв'язок, вибір та стосунки. Важливий момент для емоційних рішень та справ серця."
    },
    image: "/images/tarot/07-lovers.png"
  },
  {
    id: "08",
    number: 8,
    name: { ro: "Carul", ru: "Колесница", en: "The Chariot", ua: "Колісниця" },
    meaning: {
      ro: "Determinație, control, victorie și progres. Forță pentru a depăși obstacolele și a avansa.",
      ru: "Решимость, контроль, победа и прогресс. Сила преодолевать препятствия и двигаться вперед.",
      en: "Determination, control, victory and progress. Strength to overcome obstacles and move forward.",
      ua: "Рішучість, контроль, перемога та прогрес. Сила щоб подолати перешкоди та просуватися вперед."
    },
    image: "/images/tarot/08-chariot.png"
  },
  {
    id: "09",
    number: 9,
    name: { ro: "Puterea", ru: "Сила", en: "Strength", ua: "Сила" },
    meaning: {
      ro: "Putere interioară, calmitate, îndemânare și victorie. Abilitate de a gestiona situații greu cu calm.",
      ru: "Внутренняя сила, спокойствие, мастерство и победа. Способность управлять сложными ситуациями спокойно.",
      en: "Inner strength, calmness, skill and victory. Ability to manage difficult situations with grace.",
      ua: "Внутрішня сила, спокій, майстерність та перемога. Здатність керувати складними ситуаціями спокійно."
    },
    image: "/images/tarot/09-strength.png"
  },
  {
    id: "10",
    number: 10,
    name: { ro: "Pustnicul", ru: "Отшельник", en: "The Hermit", ua: "Отшельник" },
    meaning: {
      ro: "Reflecție, meditație, căutare și solitudine. Timp pentru a merge adânc în sine și a găsi răspunsuri.",
      ru: "Размышление, медитация, поиск и одиночество. Время углубиться в себя и найти ответы.",
      en: "Reflection, meditation, search and solitude. Time to go deep within and find answers.",
      ua: "Роздум, медитація, пошук та самотність. Час щоб піти глибоко в себе та знайти відповіді."
    },
    image: "/images/tarot/10-hermit.png"
  },
  {
    id: "11",
    number: 11,
    name: { ro: "Roata Sorții", ru: "Колесо Судьбы", en: "Wheel of Fortune", ua: "Колесо Долі" },
    meaning: {
      ro: "Destin, cicluri, noroc și schimbare. Ceea ce se ridică trebuie să coboare - ciclul continuu.",
      ru: "Судьба, циклы, удача и перемены. Что поднимается, должно упасть - вечный цикл.",
      en: "Destiny, cycles, luck and change. What rises must fall - the eternal cycle.",
      ua: "Доля, цикли, удача та зміни. Те, що піднімається, мусить впасти - вічний цикл."
    },
    image: "/images/tarot/11-wheel.png"
  },
  {
    id: "12",
    number: 12,
    name: { ro: "Dreptatea", ru: "Справедливость", en: "Justice", ua: "Справедливість" },
    meaning: {
      ro: "Echilibru, echitate, legitate și justiție. Timp pentru a face alegeri raționale și juste.",
      ru: "Баланс, справедливость, законность и правосудие. Время для рациональных и справедливых выборов.",
      en: "Balance, fairness, legality and justice. Time for rational and fair choices.",
      ua: "Баланс, справедливість, законність та правосуддя. Час для раціональних та справедливих виборів."
    },
    image: "/images/tarot/12-justice.png"
  },
  {
    id: "13",
    number: 13,
    name: { ro: "Omul Spânzurat", ru: "Повешенный", en: "The Hanged Man", ua: "Висілець" },
    meaning: {
      ro: "Sacrificiu, perspectivă nouă, meditație și stagnare. Momentul de renunțare și realipare.",
      ru: "Жертва, новая перспектива, медитация и застой. Момент отказа и переосмысления.",
      en: "Sacrifice, new perspective, meditation and pause. Time for letting go and realignment.",
      ua: "Жертва, нова перспектива, медитація та пауза. Час розпуску та переанування."
    },
    image: "/images/tarot/13-hanged.png"
  },
  {
    id: "14",
    number: 14,
    name: { ro: "Moartea", ru: "Смерть", en: "Death", ua: "Смерть" },
    meaning: {
      ro: "Transformare, final, nou început și schimbare. Nu este moarte literală - este transformare.",
      ru: "Преобразование, конец, новое начало и изменение. Это не буквальная смерть - это трансформация.",
      en: "Transformation, ending, new beginning and change. Not literal death - it is transformation.",
      ua: "Трансформація, кінець, новий початок та зміна. Це не буквальна смерть - це трансформація."
    },
    image: "/images/tarot/14-death.png"
  },
  {
    id: "15",
    number: 15,
    name: { ro: "Temperanța", ru: "Умеренность", en: "Temperance", ua: "Помірність" },
    meaning: {
      ro: "Echilibru, armonie, pasiune controlată și ușurare. Blend-ul perfect al contrariilor.",
      ru: "Баланс, гармония, контролируемая страсть и облегчение. Идеальное смешивание противоположностей.",
      en: "Balance, harmony, controlled passion and relief. Perfect blending of opposites.",
      ua: "Баланс, гармонія, контрольована пристрасть та полегшення. Ідеальне змішування протилежностей."
    },
    image: "/images/tarot/15-temperance.png"
  },
  {
    id: "16",
    number: 16,
    name: { ro: "Diavolul", ru: "Дьявол", en: "The Devil", ua: "Диявол" },
    meaning: {
      ro: "Sclavie, temptație, întuneric și legare. Lucruri care ne țin captivi și din care vrem libertate.",
      ru: "Рабство, искушение, тьма и связывание. Вещи, которые держат нас в плену и от которых мы ищем свободу.",
      en: "Slavery, temptation, darkness and bondage. Things that hold us captive and from which we seek freedom.",
      ua: "Рабство, спокуса, темрява та пута. Речі, які тримають нас в полоні та від яких ми шукаємо свободу."
    },
    image: "/images/tarot/16-devil.png"
  },
  {
    id: "17",
    number: 17,
    name: { ro: "Turnul", ru: "Башня", en: "The Tower", ua: "Вежа" },
    meaning: {
      ro: "Distrugere, schimbare violență și revelație. Deștrugerea vechiului pentru a face loc noului.",
      ru: "Разрушение, насилие и откровение. Разрушение старого, чтобы освободить место для нового.",
      en: "Destruction, violent change and revelation. Breaking down the old to make way for the new.",
      ua: "Руйнування, насильницька зміна та одкровення. Розвал старого, щоб звільнити місце для нового."
    },
    image: "/images/tarot/17-tower.png"
  }
]

export function getRandomTarotCard(): TarotCard {
  return tarotCards[Math.floor(Math.random() * tarotCards.length)]
}

export function getTarotCardByNumber(number: number): TarotCard | undefined {
  return tarotCards.find(c => c.number === number)
}
