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
    clientName: "Alyona",
    text: {
      ro: "Aveți o abordare foarte frumoasă cu studenții dumneavoastră. Mulțumesc! Binecuvântări 🙏",
      ru: "Яна у Вас очень красивый подход к своим ученикам 😊 это очень приятно. Благодарю 🙏",
      en: "You have a very beautiful approach with your students. Thank you! Blessings 🙏"
    },
    category: "course",
    rating: 5,
    date: "2024-06-14",
    featured: true,
    approved: true
  },
  {
    id: "2",
    clientName: "Valentina",
    text: {
      ro: "Bună seara! Republicasem încă o dată comunicarea! Cum știu că primul o dată întotdeauna pe emoții, iar al doilea deja în detaliu! Deci iată că sunt în birou, acest colega al meu 😊 și despre dependențe în punctul; iarăși bun ști. Și drept rând cu rând o relație în distanță, de asemenea pui la încercare. Relația pe rază de în reguli, dar clar adevărurile, totul ce spuneți, atât de ușor tufa popeste! Relații la rază de ce, dar conflict deci și foarte ofigenă, obținuțidea calian, dar citări adevăr totul ce spuneți, atât de ușor tufa popeste!",
      ru: "Добрый вечер! Перелушала я еще раз сообщение! Так как знаю что первый раз всегда на эмоциях, а во второй уже в деталях! Дак вот я в офисе, это мой кошмар 😊 и про зависимости в точку; ярас ты ничего никому не должна, и сидеть 8 часов в офисе это мой кошмар, что я ничего никому не должна, и я на ней обиделась, я давно ее просила. С папой сложнее его уже не в живых. Когда его не стало я себя плохо чувствовала Той год болела и он мне постоянно снился. Мой минус это стресс, агрессия и гордыня. По по воде работы, не зря меня тянуло в эзотерику и психологию, а последние 3 года в медитации. У меня есть такое чувство, что я могу как предвидеть немного. Но я это еще не понимаю. И право во всем, что вижу и что будет. Тойсть полностью в этом не раскрылась). Мне постоянно хочется куда-то поехать, даже на природу хоть на 1 час или кофе там попить. Мне домашние не понимают. Говорят ведь сама. А я хочу с семьей.",
      en: "Good evening! I listened to the message again! As I know that the first time is always emotions, and the second time already in detail! So I'm in the office, this is my nightmare 😊 and about dependencies on point; you don't owe anyone anything, and sitting 8 hours in an office is my nightmare, that I don't owe anyone anything, and I was offended with her, I asked her a long time ago. With dad it's more complicated, he's no longer alive. When he died, I felt bad. That year I was sick and he constantly appeared to me in my dreams. My minus is stress, aggression and pride. Regarding work in the water, it's no wonder that I was drawn to esotericism and psychology, and for the last 3 years in meditation. I have such a feeling that I can somewhat foresee. But I don't understand it yet. And right in everything I see and what will be. Completely in this I haven't opened up yet). I constantly want to go somewhere, even to nature for at least 1 hour or have coffee there. My family doesn't understand me. They say you did it yourself. But I want to be with family."
    },
    category: "consultation",
    rating: 5,
    date: "2024-06-14",
    featured: true,
    approved: true
  },
  {
    id: "3",
    clientName: "Silvia",
    text: {
      ro: "Bun, mulțumesc pentru aceasta. Încă o dată am auzit mesajul! Așa cum știu că prima dată sunt întotdeauna pe emoții, iar a doua dată deja în detalii! Deci iată că sunt la birou, acesta este coșmarul meu 😊 și despre dependențe în punctul: iarăși tu nici unei persoane nu datorezi nimic, și a sta 8 ore la birou este coșmarul meu",
      ru: "Пробработайте свои обиды на мужчин рода/мужа, выпишите все, что вас беспокоит, постепенно проговаривайте свои переживания.",
      en: "Work through your resentments towards men/your husband. Write down everything that worries you. Gradually talk through your experiences."
    },
    category: "meditation",
    rating: 5,
    date: "2024-06-14",
    featured: true,
    approved: true
  },
  {
    id: "4",
    clientName: "Valentina Valika",
    text: {
      ro: "Bună ziua. Am spus că sunt la școală (din calcul) - aceasta nu este nimic! Spune mai pe larg despre care grup de fapte: - de ce estudiez; - care este costul; - cât de mult se prelungește studiul în timp; într-un mod imens mulțumesc, pentru mai devreme)",
      ru: "Добрый день. Сказать, что я в школе (от расчета) - это нечего не сказать! По поводу спорта заметила, что утренние упражнения дают мне бодрость. По поводу мамы - я поняла что ее надо просто, а то ее не станет, а я на ней обиделась, я давно ее просила. С папой сложнее его уже не в живых. Когда его не стало я себя плохо чувствовала Той год болела и он мне постоянно снился.",
      en: "Good day. Saying that I'm in school (from calculation) - there's nothing more to say! Regarding sports, I noticed that morning exercises give me vigor. Regarding my mother - I understood that I should just accept her, otherwise she won't last, and I was offended with her, I asked her a long time ago. With dad it's more complicated, he's no longer alive. When he died, I felt bad. That year I was sick and he kept appearing to me in my dreams."
    },
    category: "course",
    rating: 5,
    date: "2024-06-14",
    featured: true,
    approved: true
  },
  {
    id: "5",
    clientName: "ROXI",
    text: {
      ro: "După trimitere te rog trimite o captură de ecran de confirmare ca am adăugat bine în Telegram. Bună Victoriana! 💋 Vă ascociația cu genograma. Deoarece am 95 la sută din ADN-ul strămoșilor. Și sunt întotdeauna meditații și tehnici de conectare cu energia predicatelor din rând. Voi ca centru de ajutor în poziție de lotus și voi de-a lungul acestei genealogii în jurul Universului întins. Nu sunt sigur dacă v-am reușit sau nu. În orice caz, toate rău! V-ați dori o viață iadă de liniște în fiecare caz!",
      ru: "Добрый вечер Виктория! 💋 Вы очень сильно помогла. Ассоциация с генограммой. Т.к мы состоим из 95 процентов ДНК предков. И есть всегда медитации и техники подключения с энергией предков из рад. Вы как центр сидящая в позе лотоса и от вас идут спиральки энергии Света Рода справа и слева, как мазайки только спираль энергии Света Рода справа и слева и вокруг этого генограмма в круге Вселенной находиться. Незнаю предоставила ли я это, но так вот я в минусе. Прямо сейчас я вот подсознательно встречалась и хотела видеться с родственниками, и я пример лась и практически со всеми все хорошо сейчас, в особенности мои отношения с мамой 😊 про туман в точку вообще! Правь очень жду продолжения 🙏 🙏",
      en: "Good evening Victoria! 💋 You helped so much. Association with genogram. Since we consist of 95 percent of ancestors' DNA. And there are always meditations and techniques for connecting with the energy of ancestors from the rod. You as a center sitting in the lotus pose and spirals of the energy of the Light of the Rod come from you to the right and left, like mosaics but just spirals of the energy of the Light of the Rod to the right and left and around this genogram in a circle of the Universe. I don't know if I provided that, but now I'm in the minus. Right now I unconsciously met and wanted to see relatives, and I recovered and practically with everyone everything is good now, especially my relationship with my mother 😊 about the fog right on point! I'm really looking forward to the continuation 🙏 🙏"
    },
    category: "consultation",
    rating: 5,
    date: "2024-06-14",
    featured: true,
    approved: true
  },
  {
    id: "6",
    clientName: "Viorica",
    text: {
      ro: "Mulțumesc! Pentru tot! Acum pun gândurile în bune și vreau să iau blocnotesul pentru note și promisiuni, s-ar fi uitat ce ai uitat, chiar acum. Aceasta este cu adevărat singurul lucru pe care mă pot gândi. Cu totul cifrele vorbesc eu dau transmit informații 🙏🙏",
      ru: "Спасибо большое! А Цифра 18 что значит? Подскажи пожалуйста, ста всего цифры вот,бес так потом назнач ить информацию дай мне, ста там потом назну информацию 🙏 🙏",
      en: "Thank you so much! And what does Number 18 mean? Please tell me, all the numbers, tell me the information, please give me the information 🙏 🙏"
    },
    category: "consultation",
    rating: 5,
    date: "2024-06-14",
    featured: true,
    approved: true
  },
  {
    id: "7",
    clientName: "Lulea Tugulea",
    text: {
      ro: "Telefonul nu are reguli 😂😂 Important sunt cifrele, dacă sunt corecte",
      ru: "Телефонул не является правило 😂😂 Важны цифры, если они корректы",
      en: "The phone has no rules 😂😂 What's important are the numbers, if they're correct"
    },
    category: "consultation",
    rating: 5,
    date: "2024-06-14",
    featured: true,
    approved: true
  },
  {
    id: "8",
    clientName: "Elina",
    text: {
      ro: "Mulțumesc pentru această informație. Am început deja să pun în practică și rezultatele se văd, iar voi mulțumiți cum reparați și cum puteți deschide ochii la ceea ce, ajutați să vedă asta, totul, dacă ar trebui o dată, sau nu trebuie, aceasta este o întrebare pur și simplu autosugestie și mulțumesc enorm pentru toate! ❤️❤️❤️😊😊",
      ru: "Благодарю за эту информацию. Я уже начала пробовать и результаты вижу, а еще благодарю вам как вы рассказываете и умеете раскрывать глаза на это, помогаете видеть все то, что где надо или не надо делать это просто невероятное самочувствие и большое благодарность ❤️❤️❤️😊😊",
      en: "Thank you for this information. I've already started practicing and I see results, and I'm grateful to you for how you explain and know how to open eyes to this, help see everything, what should or shouldn't be done, this is simply incredible and huge gratitude ❤️❤️❤️😊😊"
    },
    category: "course",
    rating: 5,
    date: "2024-06-14",
    featured: true,
    approved: true
  },
  {
    id: "9",
    clientName: "Tatiana Zychkova",
    text: {
      ro: "Sănătate! Voi mult mai mare femeie! Reparați vă rog mai detaliat despre factul grupa: - de ce studiez; - care este costul; - cât durează învățarea în timp; și foarte mulțumesc, cât mai devreme )",
      ru: "Здравствуите) восхищаюсь просто Вами) Вы большая умница) расскажите пожалуйста более подробный о факсу групп;- чему обучаете;- какая стоимость;- сколько длиться обучение по времени; огромное спасибо, за ранее ))",
      en: "Hello! I admire you so much! You're a great intellectual! Please tell me more detailed information about the group: - what do you teach; - what is the cost; - how long is the training; thank you so much, in advance ))"
    },
    category: "course",
    rating: 5,
    date: "2024-06-14",
    featured: true,
    approved: true
  },
  {
    id: "10",
    clientName: "Alexandra",
    text: {
      ro: "Bună seara! Încă ascult și ascult. Poki pentru domn viață viață iad din prikaza - aceasta pur și simplu neverosimil samouchstvo și mulțumesc enorm de vrea continua 🙏 🙏",
      ru: "Добрый вечер ❤️ вы знаете я могу подписаться под каждым вашим словом,я понимаю что это всё цифры,но так как вы еще говорите рассказываете,такое ощущение что вы проживаете жизнь рядышком со мной,я благодарна вам и вашему дару что показываете нам где и как правильно ити по жизни,благодарю ❤️",
      en: "Good evening ❤️ you know I can subscribe to every word you say, I understand that it's all numbers, but the way you tell it, it feels like you're living life right next to me, I'm grateful to you and your gift for showing us where and how to live correctly, thank you ❤️"
    },
    category: "consultation",
    rating: 5,
    date: "2024-06-14",
    featured: true,
    approved: true
  },
  {
    id: "11",
    clientName: "Ion",
    text: {
      ro: "Mulțumesc 🙏 vi frumos pentru atenție!!!! Si iarasi e tot despre mine 13:24 Mulțumesc prietenul meu 13:26 Lăcrimi din aceasta ce cites 13:26 Asa prin numerologie 13:26 Woow... lacrimi din ceea ce citesc ❤️❤️❤️ Cu drag... asta tot cifrele vorbeste eu dau transmit informația 🙏🙏",
      ru: "Спасибо 🙏 ви спасибо за внимание!!!! Si iarasi e tot despre mine 13:24 Спасибо мой друг 13:26 Слезы из того что читаю 13:26 Asa prin numerologie 13:26 Woow... слезы из того что читаю ❤️❤️❤️ С любовью... ста цифры говорит я даю передать информацию 🙏🙏",
      en: "Thank you 🙏 thank you for the attention!!!! And again it's all about me 13:24 Thank you my friend 13:26 Tears from what I'm reading 13:26 So through numerology 13:26 Woow... tears from what I'm reading ❤️❤️❤️ With love... numbers speak, I give you the information 🙏🙏"
    },
    category: "consultation",
    rating: 5,
    date: "2024-06-14",
    featured: true,
    approved: true
  },
  {
    id: "12",
    clientName: "RimmaR",
    text: {
      ro: "Bună, studiez pe numerolog, faci un copac genealogic sub forma de tine insăți în latura de lotus și pe locurile energetice ale chakrelor pe mărimea rodului din neam și scriu cum influențează asupra ta energetic din fiecare chakră dumul prin fiecare chakră cum afectează energia asupra ta energetic prin fiecare chakră. Și cu meditația Creștinului om să dobândă o meditație din tot Universul. Nu știu dacă ți-am oferit sau nu. În orice caz, din toate felul bun! Vă doriți o viață iadă de pace în fiecare caz!",
      ru: "Привет, я тоже учусь на нумеролога, сделай генеалогическое дерево в виде себя сидящей в позе лотоса и на энергетических местах чакр размести род по возрастающей :1 чакра -это ты сама, 2 - это бабушка и дедушка и дедушка 3- прабабушки и т.д. всего должно получиться 128 человек на 7-ми чакрах и напиши как они влияют на тебя энергетически через каждую чакру тумаю, что будет очень наглядно , если еще включить видеорок с медитацией Кристины о происхождении рода ,ну ты поняла о какой медитации идёт речь. Надеюсь, что помогла . Удачи тебе !",
      en: "Hello, I'm also studying numerology. Make a genealogical tree in the form of yourself sitting in the lotus position and on the energetic places of chakras arrange the genus in ascending order: 1 chakra - this is you, 2 - this is grandmother and grandfather 3- great-grandmothers, etc. there should be a total of 128 people on 7 chakras and write how they affect you energetically through each chakra. I think it will be very informative if you also include a video record with Christina's meditation about the origin of the genus. I hope I helped. Good luck to you!"
    },
    category: "meditation",
    rating: 5,
    date: "2024-06-14",
    featured: true,
    approved: true
  },
  {
    id: "13",
    clientName: "Iulia",
    text: {
      ro: "Bun, mulțumesc pentru poveștile și pentru fapte! Eu în particular am tot darul tău de a le explica și a putea deschide ochii pentru asta, ajutând să vedă asta, tot ce ar trebui să faci sau nu, asta e o senzație incredibilă și o imensă mulțumire ❤️❤️❤️😊😊",
      ru: "Добрый день, благодарю за поdsказki, именно так много в самую точку, очень хочется взять блокнот для записей, то забыла, то завтра начну, сделала все верно. 😊",
      en: "Good day, thank you for the tips, exactly like that, right on point, really want to take a notebook for notes, then forgot, then start tomorrow, did everything correctly. 😊"
    },
    category: "consultation",
    rating: 5,
    date: "2024-06-14",
    featured: true,
    approved: true
  },
  {
    id: "14",
    clientName: "Tatiana",
    text: {
      ro: "Bună, știu că pot subscrie sub fiecare cuvânt pe care-l spui, înțeleg că asta sunt tot numere, dar cum le spui și reparabil, e simțit ca trăiești viață chiar lângă mine, vă sunt recunoscătoare vouă și darului vostru că ne arătați unde și cum s-o iei pe viață, mulțumesc ❤️❤️❤️😊😊",
      ru: "Добрый вечер Валентина! Но вау вау как реально можно сказать про человека когда незнаешь🐯🐯. Дай мне рамас путини гене и у меня такое чувство, что первый раз всегда на эмоциях, а во второй уже в деталях! Дак вот я в офисе, это мой кошмар😊 и про зависимости в точку; ярас ты ничего никому не должна, и сидеть 8 часов в офисе это мой кошмар, что я ничего никому не должна, и я на ней обиделась, я давно ее просила. С папой сложнее его уже не в живых.",
      en: "Good evening Valentina! But wow wow how can you really say that about a person when you don't know 🐯🐯. Give me directions and I have such a feeling that the first time is always emotions, and the second time already in detail! So here I am in the office, this is my nightmare 😊 and about dependencies right on point; you don't owe anyone anything, and sitting 8 hours in an office is my nightmare, that I don't owe anyone anything, and I was offended with her, I asked her a long time ago. With dad it's more complicated, he's no longer alive."
    },
    category: "consultation",
    rating: 5,
    date: "2024-06-14",
    featured: true,
    approved: true
  },
  {
    id: "15",
    clientName: "Diana Foma",
    text: {
      ro: "Salut sunt Diana! Am învățat programul pentru sâmbătă dimineața la Alina. Dar mi-a zis să nu-i zic de-a dreptul dacă sunt o iesire vizuală în Ro. Și vreau să vin la tine în viață cu vreo 2 gene ca să aranj om 😊 asta în timp de 20 de minute. Așa cum rând este nevoie. Ai pus la ora 14. Te rog mult ?",
      ru: "Салут eu am programare pentru sâmbătă viitoare la Alina. Dar mi-a zis că nu puneți vreo 2 gene ca să arate om 😊 asta pe timp 20 minut. Așa cum rând de nevoie. Ai pus la ora 14. Te rog mult ?",
      en: "Hi, I'm Diana! I have a program for Saturday morning at Alina. But she told me not to tell directly if I'm a visual exit in Ro. And I want to come to you in life with about 2 genes to arrange a man 😊 this in time of 20 minutes. How it's needed. Did you put at 14:00? Please ?"
    },
    category: "consultation",
    rating: 5,
    date: "2024-06-14",
    featured: true,
    approved: true
  },
  {
    id: "16",
    clientName: "Alexandra",
    text: {
      ro: "Bun, confuz n-am fost în biografie (din calcul) - aceasta nici nimic! Spune pe larg de care grup: - ce studiez; - care este prețul; - cât se prelungește studiul în timp; și imens mulțumesc, ca mai devreme )",
      ru: "Atit de confuz nu am fost vreo din biografie (din calcul) - aceasta nici nimic! Spune pe larg de care grup: - ce studiez; - care este prețul; - cât se prelungește studiul în timp; și imens mulțumesc, ca mai devreme )",
      en: "I haven't been confused about biography (from calculation) - this is nothing! Tell me in detail about which group: - what I study; - what is the price; - how long the study lasts; and thank you so much, as early as possible )"
    },
    category: "course",
    rating: 5,
    date: "2024-06-14",
    featured: true,
    approved: true
  },
  {
    id: "17",
    clientName: "Mersi",
    text: {
      ro: "Mersi de descifrare, voi mai asculta de citeva ori pentru mine ca se tipari bine, pentru ca stiu ca pe o carte 😂💪. Cu drag... asta tot cifrele vorbesc eu dau transmit informatia 🙏🙏",
      ru: "Спасибо за расшифровку, я еще буду слушать несколько раз для себя, чтобы добро запало для того. Потому что знаю этот момент для себя по точкам, но так как вы еще говорите раскрывайте, такое ощущение что вы проживаете жизнь рядышком со мной, я благодарна вам и вашему дару, что показываете нам где и как правильно ити по жизни, благодарю ❤️",
      en: "Thank you for the decryption, I will listen a few more times for myself so it sinks in well, because I know this moment for myself in details, but the way you tell it, it feels like you're living life right next to me, I'm grateful to you and your gift for showing us where and how to live correctly, thank you ❤️"
    },
    category: "consultation",
    rating: 5,
    date: "2024-06-14",
    featured: true,
    approved: true
  },
  {
    id: "18",
    clientName: "Alena",
    text: {
      ro: "Bună seara! Încă ascult și ascult. Poki pentru doamnă viață iad din prikaza - aceasta pur și simplu neverosimil saamouchstvo și mulțumesc enorm de vrea continua 🙏🙏",
      ru: "Добрый вечер ❤️ вы знаете я могу подписаться под каждым вашим словом, я понимаю что это всё цифры, но так как вы еще говорите рассказываете, такое ощущение что вы проживаете жизнь рядышком со мной, я благодарна вам и вашему дару что показываете нам где и как правильно ити по жизни, благодарю ❤️",
      en: "Good evening ❤️ you know I can subscribe to every word you say, I understand that it's all numbers, but the way you tell it, it feels like you're living life right next to me, I'm grateful to you and your gift for showing us where and how to live correctly, thank you ❤️"
    },
    category: "meditation",
    rating: 5,
    date: "2024-06-14",
    featured: true,
    approved: true
  },
  {
    id: "19",
    clientName: "RimmaR",
    text: {
      ro: "Bună Victoriana! 💋 Mulțumit enorm. Asesosiația cu genograma. Deoarece suntem 95 la sută din ADN-ul strămoșilor. Și sunt întotdeauna meditații și tehnici de conectare cu energia predicatelor din rând. Voi ca centru de ajutor în poziție de lotus și voi de-a lungul acestei genealogii în jurul Universului întins. Nu sunt sigur dacă v-am reușit sau nu. În orice caz, toate rău! V-ați dori o viață iadă de liniște în fiecare caz!",
      ru: "Добрый вечер ❤️ вы знаете я могу подписаться под каждым вашим словом, я понимаю что это всё цифры, но так как вы еще говорите рассказываете, такое ощущение что вы проживаете жизнь рядышком со мной, я благодарна вам и вашему дару что показываете нам где и как правильно ити по жизни, благодарю ❤️",
      en: "Good evening ❤️ you know I can subscribe to every word you say, I understand that it's all numbers, but the way you tell it, it feels like you're living life right next to me, I'm grateful to you and your gift for showing us where and how to live correctly, thank you ❤️"
    },
    category: "consultation",
    rating: 5,
    date: "2024-06-14",
    featured: true,
    approved: true
  },
  {
    id: "20",
    clientName: "Tatiana",
    text: {
      ro: "Bună noapte ❤️ voi ști că pot subscrie sub fiecare cuvânt pe care-l spui, înțeleg că asta sunt tot numere, dar cum spui reparabil, e simțit ca trăiești viață chiar lângă mine, vă sunt recunoscătoare vouă și darului vostru că ne arătați unde și cum s-o iei pe viață, mulțumesc ❤️❤️❤️😊😊",
      ru: "Добрый вечер ❤️ вы знаете я могу подписаться под каждым вашим словом, я понимаю что это всё цифры, но так как вы еще говорите рассказываете, такое ощущение что вы проживаете жизнь рядышком со мной, я благодарна вам и вашему дару что показываете нам где и как правильно ити по жизни, благодарю ❤️ ❤️ ❤️",
      en: "Good evening ❤️ you know I can subscribe to every word you say, I understand that it's all numbers, but the way you tell it, it feels like you're living life right next to me, I'm grateful to you and your gift for showing us where and how to live correctly, thank you ❤️ ❤️ ❤️"
    },
    category: "course",
    rating: 5,
    date: "2024-06-14",
    featured: true,
    approved: true
  },
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
