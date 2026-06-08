import { useT } from "@/lib/lang-context"

// Get destiny variations based on current language
export function getDestinyVariations(languageCode: string): Record<number, Array<{
  title: string
  description: string
  traits: string[]
}>> {
  const variations: Record<string, Record<number, Array<{ title: string; description: string; traits: string[] }>>> = {
    // RUSSIAN
    ru: {
      1: [
        { title: "Лидер", description: "Вы рождены вести других. Ваша природная харизма и решимость делают вас естественным выбором для руководства.", traits: ["Лидерство", "Решимость", "Инициатива"] },
        { title: "Пионер", description: "Вы первопроходец, всегда ищущий новые пути. Ваша независимость позволяет вам исследовать неизведанные территории.", traits: ["Смелость", "Новаторство", "Независимость"] },
        { title: "Стратег", description: "Ваш ум острый как лезвие. Вы видите картину целиком и всегда знаете следующий ход.", traits: ["Стратегия", "Анализ", "Видение"] },
        { title: "Творец", description: "В вас живет созидатель. Вы создаете что-то совершенно новое. Ваша креативность не знает границ.", traits: ["Креативность", "Созидание", "Оригинальность"] },
        { title: "Воин", description: "Вы обладаете боевым духом и никогда не сдаетесь. Ваша сила воли - вот ваше главное оружие.", traits: ["Упорство", "Сила воли", "Боевой дух"] },
        { title: "Новатор", description: "Вы видите возможности там, где другие видят препятствия. Ваши инновационные идеи меняют мир.", traits: ["Инновации", "Видение будущего", "Риск"] },
        { title: "Мотиватор", description: "Вы вдохновляете других верить в себя. Ваша энергия заразительна и мотивирует людей.", traits: ["Мотивация", "Вдохновение", "Позитив"] },
        { title: "Завоеватель", description: "Вы покоряете новые вершины. Ваша амбиция знает пределы. Успех - ваша стихия.", traits: ["Амбиция", "Успех", "Целеустремленность"] },
        { title: "Революционер", description: "Вы готовы менять систему. Ваша независимая мысль помогает вам бросать вызов статус-кво.", traits: ["Революция", "Перемены", "Мужество"] },
        { title: "Магнат", description: "Вы рождены для больших достижений. Ваше предпринимательство приносит вам богатство и влияние.", traits: ["Деловитость", "Влияние", "Богатство"] }
      ],
      2: [
        { title: "Дипломат", description: "Ваш путь - путь гармонии. Вы обладаете способностью находить компромисс и объединять людей.", traits: ["Дипломатичность", "Интуиция", "Сотрудничество"] },
        { title: "Миротворец", description: "Вы видите добро в людях и верите в силу прощения. Ваша миссия - приносить мир.", traits: ["Миротворчество", "Прощение", "Понимание"] },
        { title: "Исцелитель", description: "Вы обладаете даром исцеления. Ваше присутствие успокаивает, а ваши слова лечат раны.", traits: ["Исцеление", "Забота", "Доброта"] },
        { title: "Советник", description: "Люди приходят к вам за советом. Ваша мудрость помогает другим найти правильный путь.", traits: ["Мудрость", "Советы", "Понимание"] },
        { title: "Поддерживающий", description: "Вы - опора для других. Ваша поддержка помогает людям становиться лучше.", traits: ["Поддержка", "Надежность", "Преданность"] },
        { title: "Слушатель", description: "Вы слышите не только слова, но и то, что скрывается между ними. Ваше внимание - ценный подарок.", traits: ["Внимание", "Слушание", "Эмпатия"] },
        { title: "Гармонизатор", description: "Вы приносите порядок и баланс. Где бы вы ни появились, атмосфера становится благоприятнее.", traits: ["Гармония", "Баланс", "Мир"] },
        { title: "Партнер", description: "Вы верите в силу партнерства. Вместе с правильным человеком вы добиваетесь чего угодно.", traits: ["Партнерство", "Сотрудничество", "Командность"] },
        { title: "Чувствующий", description: "Ваша чувствительность - не слабость, а сила. Вы видите эмоции других и отвечаете с искренностью.", traits: ["Чувствительность", "Эмоциональность", "Интуиция"] },
        { title: "Хранитель", description: "Вы охраняете благополучие других. Ваша верность и забота делают вас надежным другом и советчиком.", traits: ["Верность", "Охрана", "Заботливость"] }
      ]
    },
    // ROMANIAN
    ro: {
      1: [
        { title: "Lider", description: "Ești născut să conduci pe alții. Tua charisma naturală și determinare te fac o alegere firească pentru conducere.", traits: ["Conducere", "Determinare", "Inițiativă"] },
        { title: "Pionier", description: "Ești un pionier, mereu în căutarea de noi drumuri. Taua independență te permite să explorezi teritorii necunoscute.", traits: ["Curaj", "Inovație", "Independență"] },
        { title: "Strateg", description: "Gândirea ta este ascuțită. Vezi imaginea de ansamblu și știi mereu următoarea mișcare. Perspectiva strategică te face indispensabil.", traits: ["Strategie", "Analiză", "Viziune"] },
        { title: "Creator", description: "în tine trăiește un creator. Nu te-ai temut să pornești de la zero și să creezi ceva cu totul nou.", traits: ["Creativitate", "Creație", "Originalitate"] },
        { title: "Războinic", description: "Posezi spirit de luptător și nu te renunți niciodată. Voia ta de fier este arma ta principală.", traits: ["Perseverență", "Voință puternică", "Spirit de luptă"] },
        { title: "Inovator", description: "Vezi oportunități acolo unde alții văd obstacole. Ideile tale inovatoare schimbă lumea din jur.", traits: ["Inovație", "Viziune de viitor", "Risc"] },
        { title: "Motivator", description: "Îi inspiri pe alții să creadă în ei. Energia ta este contagioasă și motivează oamenii.", traits: ["Motivație", "Inspirație", "Pozitivitate"] },
        { title: "Cuceritorul", description: "Cucerești noi înălțimi. Ambiția ta nu cunoaște limite. Succesul este elementul tău.", traits: ["Ambițe", "Succes", "Determinare"] },
        { title: "Revoluționar", description: "Ești gata să schimbi sistemul. Gândirea ta independentă te ajută să provoci status quo-ul.", traits: ["Revoluție", "Schimbare", "Curaj"] },
        { title: "Magnat", description: "Ești născut pentru realizări mari. Intuiția ta pentru oportunități aduce bogăție și influență.", traits: ["Afaceri", "Influență", "Bogăție"] }
      ],
      2: [
        { title: "Diplomat", description: "Calea ta este calea armoniei. Posezi abilitatea de a găsi compromis și de a uni oamenii.", traits: ["Diplomație", "Intuiție", "Cooperare"] },
        { title: "Făuritor de pace", description: "Vezi binele în oameni și crezi în puterea iertării. Misiunea ta este să aduci pace.", traits: ["Pacea", "Iertare", "Înțelegere"] },
        { title: "Vindecător", description: "Posezi darul vindecării. Prezența ta liniștește, iar cuvintele tale terapia rănile.", traits: ["Vindecare", "Grije", "Bunătate"] },
        { title: "Consilier", description: "Oamenii vin la tine pentru sfat. Înțelepciunea ta îi ajută pe alții să găsească calea dreaptă.", traits: ["Înțelepciune", "Consiliere", "Înțelegere"] },
        { title: "Susținător", description: "Ești sprijinul altora. Suportul tău îi ajută pe oameni să devină mai buni.", traits: ["Sprijin", "Fiabilitate", "Devoție"] },
        { title: "Ascultător", description: "Auzi nu doar cuvintele, ci și ceea ce se ascunde între ele. Atenția ta este un dar prețios.", traits: ["Atenție", "Ascultare", "Empatie"] },
        { title: "Armonizator", description: "Aduci ordine și echilibru. Oriunde apari, atmosfera devine mai liniștit și favorabilă.", traits: ["Armonie", "Echilibru", "Pace"] },
        { title: "Partener", description: "Crezi în puterea parteneriatului. Cu persoana potrivită poți realiza orice.", traits: ["Parteneriat", "Cooperare", "Lucru în echipă"] },
        { title: "Simțitor", description: "Sensibilitatea ta nu este o slăbiciune, ci o forță. Vezi emoțiile altora și răspunzi cu sinceritate.", traits: ["Sensibilitate", "Emoționalitate", "Intuiție"] },
        { title: "Păzitor", description: "Protejezi bunăstarea celorlalți. Loialitatea și grija ta te fac un prieten și sfetnic de nădejde.", traits: ["Loialitate", "Protecție", "Îngrijorare"] }
      ]
    },
    // ENGLISH
    en: {
      1: [
        { title: "Leader", description: "You are born to lead others. Your natural charisma and determination make you a natural choice for leadership.", traits: ["Leadership", "Determination", "Initiative"] },
        { title: "Pioneer", description: "You are a pioneer, always seeking new paths. Your independence allows you to explore uncharted territories.", traits: ["Courage", "Innovation", "Independence"] },
        { title: "Strategist", description: "Your mind is sharp as a blade. You see the whole picture and always know the next move.", traits: ["Strategy", "Analysis", "Vision"] },
        { title: "Creator", description: "A creator lives within you. You are not afraid to start from zero and create something completely new.", traits: ["Creativity", "Creation", "Originality"] },
        { title: "Warrior", description: "You possess a fighting spirit and never give up. Your willpower is your greatest weapon.", traits: ["Perseverance", "Strong Will", "Battle Spirit"] },
        { title: "Innovator", description: "You see opportunities where others see obstacles. Your innovative ideas change the world around you.", traits: ["Innovation", "Future Vision", "Risk"] },
        { title: "Motivator", description: "You inspire others to believe in themselves. Your energy is contagious and motivates people.", traits: ["Motivation", "Inspiration", "Positivity"] },
        { title: "Conqueror", description: "You conquer new heights. Your ambition knows no bounds. Success is your element.", traits: ["Ambition", "Success", "Determination"] },
        { title: "Revolutionary", description: "You are ready to change the system. Your independent thinking helps you challenge the status quo.", traits: ["Revolution", "Change", "Courage"] },
        { title: "Magnate", description: "You are born for great achievements. Your entrepreneurship brings wealth and influence.", traits: ["Business", "Influence", "Wealth"] }
      ],
      2: [
        { title: "Diplomat", description: "Your path is one of harmony. You possess the ability to find compromise and unite people.", traits: ["Diplomacy", "Intuition", "Cooperation"] },
        { title: "Peacemaker", description: "You see the good in people and believe in the power of forgiveness. Your mission is to bring peace.", traits: ["Peace", "Forgiveness", "Understanding"] },
        { title: "Healer", description: "You possess the gift of healing. Your presence soothes, and your words heal wounds.", traits: ["Healing", "Care", "Kindness"] },
        { title: "Counselor", description: "People come to you for advice. Your wisdom helps others find the right path.", traits: ["Wisdom", "Counseling", "Understanding"] },
        { title: "Supporter", description: "You are the support for others. Your support helps people become better.", traits: ["Support", "Reliability", "Devotion"] },
        { title: "Listener", description: "You hear not only words but also what lies between them. Your attention is a precious gift.", traits: ["Attention", "Listening", "Empathy"] },
        { title: "Harmonizer", description: "You bring order and balance. Wherever you appear, the atmosphere becomes more peaceful and favorable.", traits: ["Harmony", "Balance", "Peace"] },
        { title: "Partner", description: "You believe in the power of partnership. With the right person you can achieve anything.", traits: ["Partnership", "Cooperation", "Teamwork"] },
        { title: "Feeler", description: "Your sensitivity is not a weakness but a strength. You see others' emotions and respond with sincerity.", traits: ["Sensitivity", "Emotionality", "Intuition"] },
        { title: "Guardian", description: "You protect the well-being of others. Your loyalty and care make you a trusted friend and advisor.", traits: ["Loyalty", "Protection", "Care"] }
      ]
    },
    // UKRAINIAN
    ua: {
      1: [
        { title: "Лідер", description: "Ти народжений вести інших. Твоя природна харизма та рішучість роблять тебе природним вибором для керівництва.", traits: ["Лідерство", "Рішучість", "Ініціатива"] },
        { title: "Піонер", description: "Ти піонер, завжди в пошуку нових шляхів. Твоя незалежність дозволяє тобі досліджувати невідомі території.", traits: ["Мужність", "Інновація", "Незалежність"] },
        { title: "Стратег", description: "Твій розум гострий як лезо. Ти бачиш картину в цілому та завжди знаєш наступний крок.", traits: ["Стратегія", "Аналіз", "Бачення"] },
        { title: "Творець", description: "У тобі живе творець. Ти не боїшся починати з нуля та створювати щось абсолютно нове.", traits: ["Креативність", "Творчість", "Оригінальність"] },
        { title: "Воїн", description: "Ти маєш бойовий дух і ніколи не здаєшся. Твоя сила волі - це твоя головна зброя.", traits: ["Наполегливість", "Сила волі", "Бойовий дух"] },
        { title: "Новатор", description: "Ти бачиш можливості там, де інші бачать перешкоди. Твої інноваційні ідеї змінюють світ навколо.", traits: ["Інновація", "Бачення майбутнього", "Ризик"] },
        { title: "Мотиватор", description: "Ти надихаєш інших вірити в себе. Твоя енергія заразна і мотивує людей.", traits: ["Мотивація", "Натхнення", "Позитив"] },
        { title: "Завойовник", description: "Ти завойовуєш нові висоти. Твоя амбіція не знає меж. Успіх - твій елемент.", traits: ["Амбіція", "Успіх", "Цілеспрямованість"] },
        { title: "Революціонер", description: "Ти готовий змінити систему. Твоє незалежне мислення допомагає тобі кидати виклик статус-кво.", traits: ["Революція", "Зміна", "Мужність"] },
        { title: "Магнат", description: "Ти народжений для великих досягнень. Твоє підприємництво приносить тобі багатство та вплив.", traits: ["Бізнес", "Вплив", "Багатство"] }
      ],
      2: [
        { title: "Дипломат", description: "Твій шлях - це шлях гармонії. Ти маєш здатність знаходити компроміс та об'єднувати людей.", traits: ["Дипломатія", "Інтуїція", "Співпраця"] },
        { title: "Миротворець", description: "Ти бачиш добро в людях та віриш у силу прощення. Твоя місія - приносити мир.", traits: ["Мир", "Прощення", "Розуміння"] },
        { title: "Цілитель", description: "Ти маєш дар цілення. Твоя присутність заспокоює, а твої слова гояться рани.", traits: ["Цілення", "Дбання", "Доброта"] },
        { title: "Рада", description: "Люди приходять до тебе за порадою. Твоя мудрість допомагає іншим знайти правильний шлях.", traits: ["Мудрість", "Рада", "Розуміння"] },
        { title: "Прихильник", description: "Ти - опора для інших. Твоя підтримка допомагає людям стати кращими.", traits: ["Підтримка", "Надійність", "Відданість"] },
        { title: "Слухач", description: "Ти чуєш не лише слова, але й те, що лежить між ними. Твоя увага - дорогоцінний дар.", traits: ["Увага", "Слухання", "Емпатія"] },
        { title: "Гармонізатор", description: "Ти приносиш порядок та баланс. Де б ти не з'явився, атмосфера стає спокійнішою та сприятливішою.", traits: ["Гармонія", "Баланс", "Мир"] },
        { title: "Партнер", description: "Ти віриш у силу партнерства. З правильною людиною ти можеш досягти чого завгодно.", traits: ["Партнерство", "Співпраця", "Командна робота"] },
        { title: "Почуваючий", description: "Твоя чутливість - не слабкість, а сила. Ти бачиш емоції інших та реагуєш з щирістю.", traits: ["Чутливість", "Емоційність", "Інтуїція"] },
        { title: "Охоронець", description: "Ти охороняєш благополуччя інших. Твоя вірність та дбання роблять тебе надійним другом та радником.", traits: ["Вірність", "Охорона", "Дбання"] }
      ]
    }
  }

  return variations[languageCode] || variations.en
}
