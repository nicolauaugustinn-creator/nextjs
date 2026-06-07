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
    id: "fool",
    number: 0,
    name: {
      ro: "Nebunul",
      ru: "Шут",
      en: "The Fool",
      ua: "Блазень"
    },
    meaning: {
      ro: "Noul început, aventură, naivitate și încredere în univers. Acest card simbolizează o nouă etapă a vieții, plin de posibilități și șanse.",
      ru: "Новое начало, приключение, наивность и вера во вселенную. Этот аркан символизирует новый этап жизни, полный возможностей и шансов.",
      en: "New beginning, adventure, naivety and trust in the universe. This card symbolizes a new stage of life, full of possibilities and chances.",
      ua: "Новий початок, пригода, наївність та віра у Всесвіт. Цей аркан символізує новий етап життя, повний можливостей і шансів."
    },
    image: "/images/tarot/00-fool.jpg"
  },
  {
    id: "magician",
    number: 1,
    name: {
      ro: "Magicianul",
      ru: "Маг",
      en: "The Magician",
      ua: "Маг"
    },
    meaning: {
      ro: "Capacitate, abilități, putere de manifestare și control asupra realității. Magicianul vorbește despre potențialul tău de a crea și transforma.",
      ru: "Способность, навыки, сила проявления и контроль над реальностью. Маг говорит о вашем потенциале создавать и трансформировать.",
      en: "Ability, skills, power of manifestation and control over reality. The Magician speaks about your potential to create and transform.",
      ua: "Здатність, навички, сила прояву та контроль над реальністю. Маг говорить про ваш потенціал створювати та трансформувати."
    },
    image: "/images/tarot/01-magician.jpg"
  },
  {
    id: "priestess",
    number: 2,
    name: {
      ro: "Preotesa",
      ru: "Жрица",
      en: "The High Priestess",
      ua: "Жриця"
    },
    meaning: {
      ro: "Mister, intuiție, cunoaștere ascunsă și subconștient. Preotesa te îndeamnă să asculți vocea ta interioară și să fii receptivă.",
      ru: "Тайна, интуиция, скрытое знание и подсознание. Жрица побуждает вас слушать свой внутренний голос и быть восприимчивым.",
      en: "Mystery, intuition, hidden knowledge and the subconscious. The Priestess urges you to listen to your inner voice and be receptive.",
      ua: "Таємниця, інтуїція, приховане знання та підсвідомість. Жриця спонукає вас слухати свій внутрішній голос та бути сприйнятливим."
    },
    image: "/images/tarot/02-priestess.jpg"
  },
  {
    id: "empress",
    number: 3,
    name: {
      ro: "Împărăteasa",
      ru: "Императрица",
      en: "The Empress",
      ua: "Імператриця"
    },
    meaning: {
      ro: "Fertilitate, abundență, creativitate și nurture. Împărăteasa simbolizează abundența, frumusețea și puterea creatoare.",
      ru: "Плодородие, изобилие, творчество и забота. Императрица символизирует изобилие, красоту и творческую силу.",
      en: "Fertility, abundance, creativity and nurturing. The Empress symbolizes abundance, beauty and creative power.",
      ua: "Родючість, достаток, творчість та турбота. Імператриця символізує достаток, красу та творчу силу."
    },
    image: "/images/tarot/03-empress.jpg"
  },
  {
    id: "emperor",
    number: 4,
    name: {
      ro: "Împăratul",
      ru: "Император",
      en: "The Emperor",
      ua: "Імператор"
    },
    meaning: {
      ro: "Autoritate, putere, control și leadership. Împăratul vorbește despre dominație, ordine și autoritate personală.",
      ru: "Власть, мощь, контроль и лидерство. Император говорит о господстве, порядке и личной власти.",
      en: "Authority, power, control and leadership. The Emperor speaks about dominance, order and personal authority.",
      ua: "Влада, могутність, контроль та лідерство. Імператор говорить про панування, порядок та особисту владу."
    },
    image: "/images/tarot/04-emperor.jpg"
  },
  {
    id: "hierophant",
    number: 5,
    name: {
      ro: "Papă",
      ru: "Иерофант",
      en: "The Hierophant",
      ua: "Ієрофант"
    },
    meaning: {
      ro: "Tradiție, religie, educație și valori. Papa simbolizează cunoașterea tradițională, învățăturile și moralitatea.",
      ru: "Традиция, религия, образование и ценности. Иерофант символизирует традиционное знание, учения и мораль.",
      en: "Tradition, religion, education and values. The Hierophant symbolizes traditional knowledge, teachings and morality.",
      ua: "Традиція, релігія, освіта та цінності. Ієрофант символізує традиційне знання, вчення та мораль."
    },
    image: "/images/tarot/05-hierophant.jpg"
  },
  {
    id: "lovers",
    number: 6,
    name: {
      ro: "Îndrăgostiții",
      ru: "Влюбленные",
      en: "The Lovers",
      ua: "Закохані"
    },
    meaning: {
      ro: "Iubire, relații, alegeri și harmonie. Îndrăgostiții nu vorbesc doar de iubire romantică, ci de conexiuni profunde.",
      ru: "Любовь, отношения, выбор и гармония. Влюбленные говорят не только о романтической любви, но о глубоких связях.",
      en: "Love, relationships, choices and harmony. The Lovers speak not only of romantic love but of deep connections.",
      ua: "Любов, відносини, вибір та гармонія. Закохані говорять не тільки про романтичну любов, але про глибокі зв'язки."
    },
    image: "/images/tarot/06-lovers.jpg"
  },
  {
    id: "chariot",
    number: 7,
    name: {
      ro: "Carul",
      ru: "Колесница",
      en: "The Chariot",
      ua: "Колісниця"
    },
    meaning: {
      ro: "Voință, determinare, control și progres. Caruțul simbolizează mișcare, vitorie și determinația de a avansa.",
      ru: "Воля, решимость, контроль и прогресс. Колесница символизирует движение, победу и решимость двигаться вперед.",
      en: "Will, determination, control and progress. The Chariot symbolizes movement, victory and determination to advance.",
      ua: "Воля, рішучість, контроль та прогрес. Колісниця символізує рух, перемогу та рішучість рухатися вперед."
    },
    image: "/images/tarot/07-chariot.jpg"
  },
  {
    id: "strength",
    number: 8,
    name: {
      ro: "Puterea",
      ru: "Сила",
      en: "Strength",
      ua: "Сила"
    },
    meaning: {
      ro: "Forță interioară, curaj, pasiune și controlul emoțiilor. Puterea nu vine din violență, ci din înțelegere și iertare.",
      ru: "Внутренняя сила, мужество, страсть и контроль над эмоциями. Сила исходит не из насилия, а из понимания и прощения.",
      en: "Inner strength, courage, passion and emotional control. Strength comes not from violence but from understanding and forgiveness.",
      ua: "Внутрішня сила, мужність, пристрість та контроль над емоціями. Сила йде не з насильства, а з розуміння та прощення."
    },
    image: "/images/tarot/08-strength.jpg"
  },
  {
    id: "hermit",
    number: 9,
    name: {
      ro: "Pustnicul",
      ru: "Отшельник",
      en: "The Hermit",
      ua: "Відлюдник"
    },
    meaning: {
      ro: "Reflecție, solitudine, cunoaștere și meditație. Pustnicul te cheamă să-ți petreci timp singur pentru a afla adevărul interior.",
      ru: "Размышление, одиночество, знание и медитация. Отшельник зовет вас провести время в одиночестве, чтобы найти внутреннюю истину.",
      en: "Reflection, solitude, knowledge and meditation. The Hermit calls you to spend time alone to find inner truth.",
      ua: "Роздум, самотність, знання та медитація. Відлюдник закликає вас провести час наодинці, щоб знайти внутрішню істину."
    },
    image: "/images/tarot/09-hermit.jpg"
  },
  {
    id: "wheel",
    number: 10,
    name: {
      ro: "Roata Sorții",
      ru: "Колесо Фортуны",
      en: "Wheel of Fortune",
      ua: "Колесо Фортуни"
    },
    meaning: {
      ro: "Destul, schimbare, cicluri și karma. Roata Sorții arată că viața se rotește și orice schimbare este parte a unui ciclu.",
      ru: "Судьба, перемены, циклы и карма. Колесо Фортуны показывает, что жизнь вращается и любые изменения часть цикла.",
      en: "Fate, change, cycles and karma. The Wheel of Fortune shows that life rotates and any change is part of a cycle.",
      ua: "Доля, зміни, цикли та карма. Колесо Фортуни показує, що життя обертається і будь-які зміни — частина циклу."
    },
    image: "/images/tarot/10-wheel.jpg"
  },
  {
    id: "justice",
    number: 11,
    name: {
      ro: "Dreptatea",
      ru: "Справедливость",
      en: "Justice",
      ua: "Справедливість"
    },
    meaning: {
      ro: "Dreptate, echilibru, responsabilitate și adevăr. Dreptatea cere integritate și consecvență în acțiunile tale.",
      ru: "Справедливость, баланс, ответственность и истина. Справедливость требует целостности и последовательности в ваших действиях.",
      en: "Justice, balance, responsibility and truth. Justice requires integrity and consistency in your actions.",
      ua: "Справедливість, баланс, відповідальність та істина. Справедливість вимагає цілісності та послідовності в ваших діях."
    },
    image: "/images/tarot/11-justice.jpg"
  },
  {
    id: "hanged",
    number: 12,
    name: {
      ro: "Spânzuratul",
      ru: "Повешенный",
      en: "The Hanged Man",
      ua: "Повішений"
    },
    meaning: {
      ro: "Sacrificiu, perspectivă nouă, înțelegere și pasivitate. Spânzuratul cere să vezi lucrurile din alt unghi.",
      ru: "Жертва, новая перспектива, понимание и пассивность. Повешенный просит увидеть вещи под другим углом.",
      en: "Sacrifice, new perspective, understanding and passivity. The Hanged Man asks you to see things from another angle.",
      ua: "Жертва, нова перспектива, розуміння та пасивність. Повішений просить вас бачити речі з іншого кута."
    },
    image: "/images/tarot/12-hanged.jpg"
  },
  {
    id: "death",
    number: 13,
    name: {
      ro: "Moartea",
      ru: "Смерть",
      en: "Death",
      ua: "Смерть"
    },
    meaning: {
      ro: "Transformare, sfârşit și începere, regenerare. Moartea nu înseamnă sfârșitul fizic, ci transformarea profundă.",
      ru: "Трансформация, конец и начало, регенерация. Смерть не означает физического конца, а глубокую трансформацию.",
      en: "Transformation, end and beginning, regeneration. Death does not mean physical end but profound transformation.",
      ua: "Трансформація, кінець і початок, регенерація. Смерть не означає фізичного кінця, а глибокої трансформації."
    },
    image: "/images/tarot/13-death.jpg"
  },
  {
    id: "temperance",
    number: 14,
    name: {
      ro: "Moderația",
      ru: "Умеренность",
      en: "Temperance",
      ua: "Помірність"
    },
    meaning: {
      ro: "Echilibru, pondere, healing și armonie. Moderația te îndeamnă să găsești echilibrul în toate aspectele vieții.",
      ru: "Баланс, гармония, исцеление и равновесие. Умеренность побуждает вас найти равновесие во всех аспектах жизни.",
      en: "Balance, harmony, healing and equilibrium. Temperance urges you to find balance in all aspects of life.",
      ua: "Баланс, гармонія, исцеління та рівновага. Помірність спонукає вас знайти рівновагу у всіх аспектах життя."
    },
    image: "/images/tarot/14-temperance.jpg"
  },
  {
    id: "devil",
    number: 15,
    name: {
      ro: "Diavolul",
      ru: "Дьявол",
      en: "The Devil",
      ua: "Дракон"
    },
    meaning: {
      ro: "Esclavie, vizi, materialism și auto-limitare. Diavolul arată unde te-ai legat singur prin credințe și obiceiuri.",
      ru: "Рабство, пороки, материализм и самоограничение. Дьявол показывает, где вы сами себя связали убеждениями и привычками.",
      en: "Slavery, vices, materialism and self-limitation. The Devil shows where you have bound yourself through beliefs and habits.",
      ua: "Рабство, пороки, матеріалізм та самообмеження. Дракон показує, де ви себе зв'язали переконаннями та звичками."
    },
    image: "/images/tarot/15-devil.jpg"
  },
  {
    id: "tower",
    number: 16,
    name: {
      ro: "Turnul",
      ru: "Башня",
      en: "The Tower",
      ua: "Вежа"
    },
    meaning: {
      ro: "Rupere, distrugere, revelație și schimbare forțată. Turnul anunță o criză care va deschide ochi noi.",
      ru: "Разрушение, катастрофа, откровение и вынужденные перемены. Башня возвещает кризис, который откроет новые глаза.",
      en: "Destruction, catastrophe, revelation and forced change. The Tower announces a crisis that will open new eyes.",
      ua: "Знищення, катастрофа, одкровення та вимушені зміни. Вежа звіщає кризу, яка відкриє нові очі."
    },
    image: "/images/tarot/16-tower.jpg"
  },
  {
    id: "star",
    number: 17,
    name: {
      ro: "Steaua",
      ru: "Звезда",
      en: "The Star",
      ua: "Зірка"
    },
    meaning: {
      ro: "Speranță, inspirație, duhul și claritate. Steaua îți spune să ai încredere în viitorul tău și în directția ta.",
      ru: "Надежда, вдохновение, дух и ясность. Звезда говорит вам верить в будущее и в вашу направленность.",
      en: "Hope, inspiration, spirit and clarity. The Star tells you to believe in your future and your direction.",
      ua: "Надія, натхнення, дух та ясність. Зірка каже вам вірити у своє майбутнє та свою спрямованість."
    },
    image: "/images/tarot/17-star.jpg"
  },
  {
    id: "moon",
    number: 18,
    name: {
      ro: "Luna",
      ru: "Луна",
      en: "The Moon",
      ua: "Місяць"
    },
    meaning: {
      ro: "Iluzii, instinct, mister și subconștient. Luna te cheamă să ascultezi intuiția ta și să navighezi ceața confuziei.",
      ru: "Иллюзии, инстинкт, тайна и подсознание. Луна зовет вас слушать интуицию и ориентироваться в тумане путаницы.",
      en: "Illusions, instinct, mystery and the subconscious. The Moon calls you to listen to your intuition and navigate the fog of confusion.",
      ua: "Ілюзії, інстинкт, таємниця та підсвідомість. Місяць закликає вас слухати інтуїцію та орієнтуватися в тумані плутанини."
    },
    image: "/images/tarot/18-moon.jpg"
  },
  {
    id: "sun",
    number: 19,
    name: {
      ro: "Soarele",
      ru: "Солнце",
      en: "The Sun",
      ua: "Сонце"
    },
    meaning: {
      ro: "Succes, bucurie, vitalitate și luminozitate. Soarele aduce energie pozitivă, creștere și accomplishment.",
      ru: "Успех, радость, жизненность и светлость. Солнце приносит позитивную энергию, рост и достижение.",
      en: "Success, joy, vitality and brightness. The Sun brings positive energy, growth and achievement.",
      ua: "Успіх, радість, життєвість та яскравість. Сонце приносить позитивну енергію, ріст та досягнення."
    },
    image: "/images/tarot/19-sun.jpg"
  },
  {
    id: "judgment",
    number: 20,
    name: {
      ro: "Judecata",
      ru: "Суд",
      en: "Judgment",
      ua: "Суд"
    },
    meaning: {
      ro: "Apel, evaluare, renaștere și autoexaminare. Judecata este despre autoevaluare și apelul să devii versiunea ta cea mai bună.",
      ru: "Призыв, оценка, возрождение и самопроверка. Суд это о самооценке и призыве стать лучшей версией себя.",
      en: "Calling, evaluation, rebirth and self-examination. Judgment is about self-evaluation and the call to become your best self.",
      ua: "Поклик, оцінка, відродження та самоперевірка. Суд це про самооцінку та поклик стати кращою версією себе."
    },
    image: "/images/tarot/20-judgment.jpg"
  },
  {
    id: "world",
    number: 21,
    name: {
      ro: "Lumea",
      ru: "Мир",
      en: "The World",
      ua: "Світ"
    },
    meaning: {
      ro: "Completare, unitate, realizare și plenitudine. Lumea simbolizează sfârșitul unui ciclu și completarea.",
      ru: "Завершение, единство, реализация и полнота. Мир символизирует конец цикла и завершение.",
      en: "Completion, unity, fulfillment and wholeness. The World symbolizes the end of a cycle and completion.",
      ua: "Завершення, єдність, здійснення та цілісність. Світ символізує кінець циклу та завершення."
    },
    image: "/images/tarot/21-world.jpg"
  }
]

export function getTarotCardByNumber(number: number): TarotCard | undefined {
  return tarotCards.find(card => card.number === number)
}

export function getRandomTarotCard(): TarotCard {
  return tarotCards[Math.floor(Math.random() * tarotCards.length)]
}
