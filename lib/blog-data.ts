export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    role: string
    avatar: string
  }
  category: string
  publishedAt: string
  readTime: string
  coverImage: string
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    slug: "descopera-numarul-tau-de-destin",
    title: "Descopera Numarul Tau de Destin: Ghid Complet pentru Incepatori",
    excerpt:
      "Afla cum sa calculezi si sa interpretezi numarul tau de destin - cheia intelegerii misiunii tale de viata.",
    content: `
# Descopera Numarul Tau de Destin

Numarul de destin este unul dintre cele mai importante numere in numerologie. El dezvaluie misiunea ta de viata si energia fundamentala care te ghideaza.

## Ce este Numarul de Destin?

Numarul de destin, numit si numarul vietii sau numarul expresiei, se calculeaza din data completa a nasterii tale. El reprezinta drumul pe care esti menit sa il urmezi si lectiile pe care trebuie sa le inveti in aceasta viata.

## Cum se calculeaza?

Pentru a calcula numarul tau de destin:

1. Scrie-ti data nasterii complet (zi, luna, an)
2. Aduna toate cifrele
3. Reduce la o singura cifra (exceptie: 11, 22, 33 - numere maestru)

**Exemplu:** Data nasterii: 15 martie 1990
- 1 + 5 + 0 + 3 + 1 + 9 + 9 + 0 = 28
- 2 + 8 = 10
- 1 + 0 = **1**

## Semnificatia fiecarui numar

### Numarul 1 - Liderul
Esti menit sa fii pionier, inovator si lider. Energia ta este de a incepe lucruri noi si a deschide drumuri.

### Numarul 2 - Diplomatul  
Misiunea ta este de a aduce armonie si echilibru. Esti un mediator natural si un partener devotat.

### Numarul 3 - Creatorul
Expresia creativa este esenta ta. Esti menit sa inspiri prin arta, comunicare si bucurie.

### Numarul 4 - Constructorul
Stabilitatea si structura sunt domeniile tale. Construiesti fundamente solide pentru viitor.

### Numarul 5 - Aventurierul
Libertatea si schimbarea sunt esentiale pentru tine. Esti menit sa experimentezi viata pe deplin.

### Numarul 6 - Ingrijitorul
Familia si comunitatea sunt prioritatile tale. Aduci vindecare si dragoste celor din jur.

### Numarul 7 - Cautatorul
Intelepciunea si spiritualitatea te definesc. Esti menit sa descoperi adevaruri profunde.

### Numarul 8 - Realizatorul
Abundenta si puterea sunt domeniile tale. Esti menit sa manifesti prosperitate.

### Numarul 9 - Umanitarul
Compasiunea si serviciul sunt misiunea ta. Esti aici sa ajuti omenirea.

## Urmatorul Pas

Dupa ce ti-ai descoperit numarul de destin, urmeaza sa explorezi cum interactioneaza cu celelalte numere din harta ta personala. In cursul "Karmicheskaya Zvezda" aprofundam toate aceste conexiuni.
    `,
    author: {
      name: "Valentina Chernyak",
      role: "Fondator KARMANUMBERS",
      avatar: "/valentina/portrait-1.jpg",
    },
    category: "Numerologie",
    publishedAt: "2024-12-15",
    readTime: "8 min citire",
    coverImage: "/valentina/portrait-3.jpg",
    featured: true,
  },
  {
    slug: "energia-banilor-deblocarea-prosperitatii",
    title: "Energia Banilor: Cum sa Deblochezi Fluxul Prosperitatii",
    excerpt:
      "Descopera blocajele energetice care te impiedica sa atragi abundenta si invata cum sa le elimini.",
    content: `
# Energia Banilor: Cum sa Deblochezi Fluxul Prosperitatii

Banii sunt energie. Aceasta afirmatie simpla contine o intelepciune profunda pe care multi o ignora. In acest articol, exploram cum sa deblocam fluxul natural al prosperitatii.

## De ce banii nu vin?

Exista mai multe blocaje energetice comune:

### 1. Programari din copilarie
- "Banii nu cresc in copaci"
- "Trebuie sa muncesti din greu pentru bani"
- "Bogatii sunt rai"

### 2. Frica si anxietate
Frica de a nu avea suficient creeaza exact ceea ce te temi - lipsa.

### 3. Lipsa recunostintei
Cand nu apreciezi ce ai, universul nu iti trimite mai mult.

## Cum sa deblochezi energia

### Pasul 1: Identifica credintele limitative
Scrie pe o foaie toate gandurile negative pe care le ai despre bani. Fii sincer cu tine.

### Pasul 2: Rescrie povestea
Pentru fiecare credinta limitativa, creeaza o afirmatie pozitiva:
- "Banii nu cresc in copaci" → "Banii vin usor si natural in viata mea"

### Pasul 3: Practica recunostinta
In fiecare zi, scrie 3 lucruri pentru care esti recunoscator in legatura cu banii.

### Pasul 4: Doneaza
Daruirea deschide canalul de a primi. Incepe cu sume mici, dar constante.

## Numarul tau financiar

In numerologie, exista un numar specific care influenteaza relatia ta cu banii. Acesta se calculeaza din numele si data nasterii tale.

In mini-cursul "Unde sunt banii mei mari" exploram in detaliu:
- Calculul numarului tau financiar
- Perioadele favorabile pentru investitii
- Compatibilitatea financiara in relatii

## Concluzie

Schimbarea relatiei cu banii incepe din interior. Cand iti schimbi energia, circumstantele externe se aliniaza natural.
    `,
    author: {
      name: "Valentina Chernyak",
      role: "Fondator KARMANUMBERS",
      avatar: "/valentina/portrait-2.jpg",
    },
    category: "Abundenta",
    publishedAt: "2024-12-10",
    readTime: "6 min citire",
    coverImage: "/valentina/portrait-5.jpg",
  },
  {
    slug: "relatii-karmice-recunoastere-vindecare",
    title: "Relatii Karmice: Cum sa le Recunosti si sa te Vindeci",
    excerpt:
      "Invata sa identifici relatiile karmice si sa transformi lectiile dureroase in crestere spirituala.",
    content: `
# Relatii Karmice: Cum sa le Recunosti si sa te Vindeci

Relatiile karmice sunt unele dintre cele mai intense experiente pe care le putem trai. Ele vin sa ne invete lectii importante, chiar daca procesul poate fi dureros.

## Ce sunt relatiile karmice?

O relatie karmica este o conexiune profunda cu o alta persoana, bazata pe energii nerezolvate din vieti anterioare. Aceste relatii ne atrag magnetic, dar adesea aduc provocari semnificative.

## Semne ca esti intr-o relatie karmica

### 1. Atractie instantanee si intensa
Simti ca cunosti persoana de o eternitate, chiar daca tocmai v-ati intalnit.

### 2. Pattern-uri repetitive
Aceleasi conflicte apar iar si iar, indiferent cat de mult incerci sa le eviti.

### 3. Dependenta emotionala
Relatia devine centrul vietii tale, eclipsand alte aspecte importante.

### 4. Lectii dureroase
Relatia te pune in fata celor mai mari frici si insecuritati.

### 5. Sentiment de "neterminat"
Chiar si dupa despartire, simti ca exista ceva nerezolvat.

## Cum sa te vindeci

### Pasul 1: Recunoaste lectia
Intreaba-te: Ce am de invatat din aceasta relatie? Ce pattern din mine este reflectat?

### Pasul 2: Asuma responsabilitatea
Opreste-te din a da vina pe celalalt. Tu ai atras aceasta experienta pentru un motiv.

### Pasul 3: Iarta si elibereaza
Iertarea nu este pentru celalalt - este pentru tine. Elibereaza ranchiuna care te tine legat.

### Pasul 4: Invata si evolueaza
Integreaza lectia si fa alegeri diferite in viitor.

## Perspectiva numerologica

Compatibilitatea numerologica poate dezvalui:
- De ce ati fost atrasi unul de celalalt
- Care sunt lectiile comune
- Daca relatia are potential de evolutie sau trebuie eliberata

In cursul "Karmicheskaya Zvezda" exploram in profunzime dinamica relatiilor karmice si cum sa le transformam.

## Concluzie

Relatiile karmice nu sunt pedepse - sunt oportunitati de crestere. Cand intelegi lectia, durerea se transforma in intelepciune.
    `,
    author: {
      name: "Valentina Chernyak",
      role: "Fondator KARMANUMBERS",
      avatar: "/valentina/portrait-4.jpg",
    },
    category: "Relatii",
    publishedAt: "2024-12-05",
    readTime: "10 min citire",
    coverImage: "/valentina/portrait-6.jpg",
  },
  {
    slug: "meditatia-puterea-linistii-interioare",
    title: "Meditatia: Puterea Linistii Interioare",
    excerpt:
      "Descopera cum meditatia zilnica iti poate transforma viata si cum sa incepi o practica constanta.",
    content: `
# Meditatia: Puterea Linistii Interioare

In lumea moderna plina de distractii constante, meditatia devine mai importanta ca niciodata. Este calea de a ne reconecta cu esenta noastra profunda.

## De ce sa meditezi?

### Beneficii demonstrate stiintific:
- Reduce stresul si anxietatea
- Imbunatateste concentrarea
- Creste claritatea mentala
- Sustine sanatatea fizica
- Dezvolta inteligenta emotionala

### Beneficii spirituale:
- Conexiune cu sinele superior
- Acces la intuitie
- Pace interioara
- Claritate in decizii

## Cum sa incepi

### 1. Alege un moment fix
Dimineata devreme sau seara tarziu sunt ideale. Consistenta este mai importanta decat durata.

### 2. Creeaza un spatiu sacru
Un colt linistit, poate cu o lumanare sau cristale. Spatiul devine asociat cu practica.

### 3. Incepe cu 5 minute
Nu incerca sa meditezi o ora de la inceput. 5 minute zilnic sunt mai valoroase decat o ora saptamanal.

### 4. Concentreaza-te pe respiratie
Respira adanc si lent. Cand mintea rataceste (si va rataci), reintoarce-te blanda la respiratie.

## Tipuri de meditatie

### Meditatia de respiratie
Focus pe inspir si expir. Simpla si puternica.

### Meditatia ghidata
Urmaresti vocea unui ghid. Ideala pentru incepatori.

### Meditatia de vizualizare
Creezi imagini mentale specifice. Puternica pentru manifestare.

### Meditatia cu mantra
Repeti un sunet sau fraza. Calmeaza mintea rapid.

## Colectia Black & White

Am creat colectia de meditatii "Black & White" pentru a te ajuta sa explorezi intunericul si lumina din interiorul tau. Fiecare meditatie te ghideaza printr-o calatorie de autodescoperire profunda.

## Concluzie

Meditatia nu este despre a opri gandurile - este despre a deveni observatorul lor. Cu practica, vei descoperi o pace care exista mereu in tine.
    `,
    author: {
      name: "Valentina Chernyak",
      role: "Fondator KARMANUMBERS",
      avatar: "/valentina/portrait-7.jpg",
    },
    category: "Spiritualitate",
    publishedAt: "2024-11-28",
    readTime: "7 min citire",
    coverImage: "/valentina/event.jpg",
  },
  {
    slug: "ciclurile-karmice-de-9-ani",
    title: "Ciclurile Karmice de 9 Ani: Unde te Afli Acum?",
    excerpt:
      "Intelege ciclul tau personal de 9 ani si cum sa folosesti energia fiecarui an pentru maximum de rezultate.",
    content: `
# Ciclurile Karmice de 9 Ani

Viata se misca in cicluri, iar numerologia ne ajuta sa intelegem ritmul acestor miscari. Ciclul de 9 ani este unul dintre cele mai importante de inteles.

## Calculul anului personal

Pentru a afla in ce an personal te afli:
1. Aduna ziua si luna nasterii tale
2. Aduna anul curent
3. Reduce la o singura cifra

**Exemplu:** Nascut pe 15 martie, anul curent 2024
- 1 + 5 + 0 + 3 + 2 + 0 + 2 + 4 = 17
- 1 + 7 = **8** (An personal 8)

## Semnificatia fiecarui an

### Anul 1 - Noi inceputuri
Planteaza seminte pentru viitor. Este momentul sa incepi proiecte noi.

### Anul 2 - Rabdare si parteneriate
Coopereaza si asteapta. Semintele plantate anul trecut au nevoie de timp.

### Anul 3 - Expresie creativa
Exprima-te liber. Creativitatea si comunicarea sunt favorizate.

### Anul 4 - Constructie si stabilitate
Munca grea. Pune fundatii solide pentru viitor.

### Anul 5 - Schimbare si libertate
Asteapta-te la schimbari. Fii flexibil si deschis la nou.

### Anul 6 - Familie si responsabilitate
Focus pe casa si familie. Asuma responsabilitati.

### Anul 7 - Reflectie si spiritualitate
Retrage-te si reflecteaza. Anul introspectiei.

### Anul 8 - Recolta si abundenta
Culegi ce ai semanat. Anul manifestarii materiale.

### Anul 9 - Finalizare si eliberare
Incheie cicluri. Lasa sa plece ce nu mai serveste.

## Cum sa folosesti aceasta cunoastere

Cand stii in ce an te afli:
- Aliniaza-ti actiunile cu energia anului
- Nu forta lucruri care nu sunt sustinute
- Pregateste-te pentru tranzitii

## Aprofundeaza

In cursul "Karmicheskaya Zvezda" exploram:
- Lunile personale
- Zilele favorabile
- Perioadele de provocare
- Cum sa navighezi tranzitiile

## Concluzie

Intelegerea ciclurilor te ajuta sa mergi cu fluxul vietii, nu impotriva lui.
    `,
    author: {
      name: "Valentina Chernyak",
      role: "Fondator KARMANUMBERS",
      avatar: "/valentina/graduation.jpg",
    },
    category: "Numerologie",
    publishedAt: "2024-11-20",
    readTime: "9 min citire",
    coverImage: "/valentina/portrait-1.jpg",
  },
  {
    slug: "intuitia-cum-sa-o-dezvolti",
    title: "Intuitia: Cum sa o Dezvolti si sa ai Incredere in Ea",
    excerpt:
      "Invata sa auzi vocea interioara si sa faci alegeri aliniate cu adevarata ta cale.",
    content: `
# Intuitia: Cum sa o Dezvolti si sa ai Incredere in Ea

Cu totii avem intuitie - acel "simt" care ne ghideaza dincolo de logica. Dar multi dintre noi am uitat cum sa o ascultam.

## Ce este intuitia?

Intuitia este cunoastere directa, fara rationament constient. Este vocea sufletului tau care stie deja raspunsul.

## De ce nu o mai auzim?

### Suprastimulare
Suntem bombardati cu informatii externe si ne pierdem conexiunea interna.

### Educatie
Am fost invatati sa ne bazam doar pe logica si fapte.

### Teama
Ne este frica sa gresim daca urmam ceva "ilogic".

## Cum sa dezvolti intuitia

### 1. Practica linistea
Intuitia vorbeste in soapte. Trebuie sa faci liniste pentru a o auzi.

### 2. Tine un jurnal
Noteaza-ti presimtirile si verifica ulterior daca s-au adeverit.

### 3. Acorda atentie corpului
Intuitia se manifesta adesea fizic - un nod in stomac, o caldura in piept.

### 4. Actioneaza pe baza ei
Intuitia se intareste cand o folosesti. Incepe cu decizii mici.

### 5. Mediteaza
Meditatia deschide canalele intuitive.

## Semne ca intuitia vorbeste

- Certitudine calma (nu anxietate)
- Raspunsul vine instantaneu
- Simti expansiune, nu constrictie
- Revine aceeasi idee in mod repetat

## Cum sa deosebesti intuitia de frica

| Intuitia | Frica |
|----------|-------|
| Calma | Anxioasa |
| Clara | Confuza |
| Prezenta | Viitor/Trecut |
| Expansiva | Constrictiva |

## Conexiunea cu numerologia

Fiecare numar de destin are un mod specific de a accesa intuitia:
- **1, 8**: Prin actiune
- **2, 6**: Prin emotii
- **3, 5**: Prin creativitate
- **4, 7**: Prin contemplare
- **9**: Prin compasiune

## Concluzie

Intuitia este darul tau interior. Cu cat o folosesti mai mult, cu atat devine mai puternica. Ai incredere in tine.
    `,
    author: {
      name: "Valentina Chernyak",
      role: "Fondator KARMANUMBERS",
      avatar: "/valentina/portrait-2.jpg",
    },
    category: "Spiritualitate",
    publishedAt: "2024-11-15",
    readTime: "8 min citire",
    coverImage: "/valentina/portrait-7.jpg",
  },
  {
    slug: "platforma-karmanumbers-cum-a-fost-creata",
    title: "Platforma KARMANUMBERS: Cum a Fost Creata si Ce Functionalitati Ofera",
    excerpt: "Descopera povestea crearii platformei KARMANUMBERS si cum aceasta revolutioneaza accesul la numerologie, meditate si consultanti spirituale.",
    content: `
# Platforma KARMANUMBERS: Revolutia Spiritualitatii in Era Digitala

KARMANUMBERS este o platforma online inovatoare creata cu scopul de a aduce spiritualitatea, numerologia si transformarea personala intr-o forma accesibila pentru toata lumea. Intr-o lume din ce in ce mai conectata, am decis sa creem un spatiu digital in care oamenii pot descoperi adevarul despre sine si destinul lor.

## Povestea Crearii

Ideea KARMANUMBERS a nascut din pasiunea fundatoarei Valentina Chernyak de a ajuta oamenii sa se conecteze cu energia lor profunda si sa descopere adevarul destinului lor. După ani de experiență în consulturi personale și cursuri tradiționale, a devenit evident că există o nevoi enormă de acces digital la aceste cunoștințe.

### De ce o platformă digitală?

1. **Accesibilitate Globală** - Oamenii din toata lumea pot accesa cursurile si consulturi
2. **Flexibilitate** - Invata in propriul ritm, oricand si oriunde
3. **Scalabilitate** - Mii de oameni pot beneficia simultan de aceleași resurse de calitate
4. **Comunitate** - O comunitate vibrantă de oameni pe acelasi drum spiritual

## Functionalitati Principale

### 1. Cursuri Structurate

#### Cursuri Complete:
- **Karmicheskaya Zvezda** - Matricea Destinului (4 module profunde)
- **Nume si Destin** - Cum vibratia numelui tau influentiaza viata
- **Unde sunt banii mei mari** - Numerologie financiara si abundenta
- **Relatii si Compatibilitate** - Gasirea iubirii prin numerologie

#### Mini-Cursuri (accesare rapida):
- 30-45 minute per curs
- Teme specifice si actionabile
- Perfecte pentru incepatori

### 2. Biblioteca de Meditații

Peste 50 meditații ghidate:
- **Meditații de vindecare** - Pentru durerea emotionala
- **Meditații de manifestare** - Pentru a-ti atrage dorintele
- **Meditații de abundență** - Pentru fluxul financiar
- **Meditații de conectare** - La energia ta profunda

Fiecare meditație este:
- Inregistrata de Valentina Chernyak
- Durata: 15-45 minute
- Disponibila in limbile: Romana, Rusă, Engleză
- Descarcabila pentru ascultare offline

### 3. Consultații cu Expertul

Conexiune directă cu Valentina pentru:
- **Consultații Personalizate** (50 min)
- **Analiza Matricei Destinului** - Diagrama completa a vietii tale
- **Compatibilitate Relationala** - Analiza profunda a relatiei
- **Ghidare Spirituala** - Pentru decizii importante

### 4. Dashboard Personal

Fiecare utilizator beneficiaza de:

**Profilul Numerologic**
- Calculul automativ al tuturor numerelor importante
- Vibrația numelui
- Ciclurile anuale personale
- Perioada favorabilă pentru decizii importante

**Progresul Educațional**
- Tracking al cursurilor urmate
- Certificate de finalizare
- Resurse descarcabile
- Notite personale

**Sistem de Puncte (Karma Points)**
- Acumulezi puncte pentru fiecare activitate
- Schimbă punctele pentru discounturi la consultări
- Referrals - invita prieteni si castiga puncte bonus
- Rewards exclusiv pentru membrii fideli

### 5. Comunitate si Forumuri

- Grupuri de sprijin organizate dupa teme
- Schimbul de experiențe si perspective
- Întrebări puse Valentinei saptamânal
- Evenimente live lunare cu participanți din toata lumea

## Tehnologie si Siguranta

KARMANUMBERS a fost construita cu:
- **Next.js 16** - Framework modern, rapid si sigur
- **PostgreSQL (Neon)** - Baza de date fiabila si scalabila
- **Criptare End-to-End** - Consultațiile tale sunt confidentiale
- **HTTPS Securizat** - Protectia datelor tale personale
- **Design Responsive** - Funcționează perfect pe orice dispozitiv

## Recomandari pentru Utilizatori Noi

### Pentru Incepatori:
1. Incepe cu testul "Descoperă Numarul Tau de Destin" - este gratuit
2. Urmeaza mini-cursul "Ce este Numerologia" (15 min)
3. Intinde o meditație de conectare
4. Planifică o consultație personalizată cu Valentina

### Pentru Cei Avansati:
1. Aprofundeaza cu cursul "Karmicheskaya Zvezda"
2. Exploreaza compatibilitatea si dinamica relationala
3. Participa la sesiunile live lunare
4. Devine ambassador al KARMANUMBERS in comunitatea ta

### Pentru Cercetatori:
1. Explorez articolele stiintifice din blog
2. Studia historia numerologiei
3. Conecteaza-te cu alti cercetatori din comunitate
4. Solicita interviuri exclusive cu Valentina

## Vision-ul Viitor

KARMANUMBERS se dezvolta continuu cu:
- **Integrare AI** - Recomandari personalizate bazate pe profilul tau
- **Aplicație Mobila** - Pentru acces inca mai usor
- **Retrageri Spirituale** - Sesiuni intensive in-person
- **Certificare Profesionala** - Pentru cei care doresc sa devina numerologi
- **Integrare Astrologie** - Combinand numerologia cu astrologia

## Concluzie

KARMANUMBERS nu este doar o platforma - este o misiune. O misiune de a ajuta milioane de oameni sa descopere cine sunt cu adevarat si ce destinul lor le pregateste. Intr-o lume plina de zgomot, KARMANUMBERS este o voce calma care iti spune adevarurile pe care tu intotdeauna le-ai stiut, dar ai fost prea ocupat sa asculti.

**Esti pregatit sa descoperi codul destinului tau?**
    `,
    author: {
      name: "Valentina Chernyak",
      role: "Fondator KARMANUMBERS",
      avatar: "/valentina/portrait-1.jpg",
    },
    category: "Spiritualitate",
    publishedAt: "2024-12-20",
    readTime: "12 min citire",
    coverImage: "/blog/karmanumbers-platform.png",
    featured: false,
  },
]

export const categories = ["Toate", "Numerologie", "Abundenta", "Relatii", "Spiritualitate"]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find((post) => post.featured)
}
