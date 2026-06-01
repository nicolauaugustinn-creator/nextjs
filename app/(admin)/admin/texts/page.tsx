"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Search, 
  Save,
  Globe,
  ChevronDown,
  ChevronRight,
  Edit,
  Check,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Text sections that can be edited
const textSections = [
  {
    id: "hero",
    name: "Главная страница (Hero)",
    texts: [
      { key: "hero_subtitle", ru: "Откройте код своей судьбы, энергии и миссии", en: "Discover the code of your destiny, energy and mission" },
      { key: "hero_description", ru: "Курсы, медитации и консультации по нумерологии, отношениям, энергии, деньгам и личностной трансформации.", en: "Courses, meditations and consultations on numerology, relationships, energy, money and personal transformation." },
      { key: "hero_join_telegram", ru: "Присоединиться в Telegram", en: "Join Telegram" },
      { key: "hero_get_consultation", ru: "Записаться на консультацию", en: "Book consultation" },
      { key: "hero_where_to_start", ru: "С чего начать?", en: "Where to start?" },
    ]
  },
  {
    id: "navigation",
    name: "Навигация",
    texts: [
      { key: "nav_home", ru: "Главная", en: "Home" },
      { key: "nav_courses", ru: "Курсы", en: "Courses" },
      { key: "nav_meditations", ru: "Медитации", en: "Meditations" },
      { key: "nav_consultations", ru: "Консультации", en: "Consultations" },
      { key: "nav_retreat", ru: "Ретрит", en: "Retreat" },
      { key: "nav_blog", ru: "Блог", en: "Blog" },
      { key: "nav_reviews", ru: "Отзывы", en: "Reviews" },
    ]
  },
  {
    id: "about",
    name: "О нас",
    texts: [
      { key: "about_title", ru: "Привет, я Валентина", en: "Hi, I'm Valentina" },
      { key: "about_description", ru: "Нумеролог, коуч и автор метода «Кармическая звезда»", en: "Numerologist, coach and author of the 'Karmic Star' method" },
      { key: "about_experience", ru: "Более 10 лет практики", en: "More than 10 years of practice" },
    ]
  },
  {
    id: "courses",
    name: "Курсы",
    texts: [
      { key: "courses_title", ru: "Курсы и программы", en: "Courses & Programs" },
      { key: "courses_subtitle", ru: "Глубокое погружение в нумерологию", en: "Deep dive into numerology" },
      { key: "courses_view_all", ru: "Смотреть все курсы", en: "View all courses" },
      { key: "course_start", ru: "Начать обучение", en: "Start learning" },
    ]
  },
  {
    id: "meditations",
    name: "Медитации",
    texts: [
      { key: "meditations_title", ru: "Медитации", en: "Meditations" },
      { key: "meditations_subtitle", ru: "Глубокие практики для трансформации", en: "Deep practices for transformation" },
      { key: "meditations_view_all", ru: "Все медитации", en: "All meditations" },
      { key: "meditation_listen", ru: "Слушать", en: "Listen" },
    ]
  },
  {
    id: "consultations",
    name: "Консультации",
    texts: [
      { key: "consult_title", ru: "Персональная работа", en: "Personal work" },
      { key: "consult_book", ru: "Записаться", en: "Book now" },
      { key: "consult_price_from", ru: "от", en: "from" },
    ]
  },
  {
    id: "footer",
    name: "Подвал",
    texts: [
      { key: "footer_copyright", ru: "Все права защищены", en: "All rights reserved" },
      { key: "footer_privacy", ru: "Политика конфиденциальности", en: "Privacy Policy" },
      { key: "footer_terms", ru: "Условия использования", en: "Terms of Use" },
    ]
  },
]

type Lang = "ru" | "ro" | "en" | "ua"

const languages: { code: Lang; name: string; flag: string }[] = [
  { code: "ru", name: "Русский", flag: "RU" },
  { code: "ro", name: "Română", flag: "RO" },
  { code: "en", name: "English", flag: "EN" },
  { code: "ua", name: "Українська", flag: "UA" },
]

export default function AdminTextsPage() {
  const [search, setSearch] = useState("")
  const [selectedLang, setSelectedLang] = useState<Lang>("ru")
  const [expandedSections, setExpandedSections] = useState<string[]>(["hero"])
  const [editingKey, setEditingKey] = useState<string | null>(null)
  const [editValue, setEditValue] = useState("")
  const [savedKeys, setSavedKeys] = useState<string[]>([])

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  const startEdit = (key: string, value: string) => {
    setEditingKey(key)
    setEditValue(value)
  }

  const saveEdit = (key: string) => {
    // In production, this would save to database/API
    console.log(`Saving ${key} = ${editValue}`)
    setSavedKeys(prev => [...prev, key])
    setEditingKey(null)
    setTimeout(() => {
      setSavedKeys(prev => prev.filter(k => k !== key))
    }, 2000)
  }

  const cancelEdit = () => {
    setEditingKey(null)
    setEditValue("")
  }

  const filteredSections = textSections.filter(section =>
    section.name.toLowerCase().includes(search.toLowerCase()) ||
    section.texts.some(t => 
      t.key.toLowerCase().includes(search.toLowerCase()) ||
      t.ru.toLowerCase().includes(search.toLowerCase()) ||
      t.en.toLowerCase().includes(search.toLowerCase())
    )
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl text-cream">Тексты сайта</h1>
          <p className="text-cream/60">Управление текстами и переводами</p>
        </div>
        <Button className="bg-gold text-charcoal hover:bg-gold-light">
          <Save className="w-4 h-4 mr-2" />
          Сохранить все изменения
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
              <Globe className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="font-serif text-2xl text-cream">4</p>
              <p className="text-cream/50 text-sm">Языка</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <Check className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="font-serif text-2xl text-cream">{textSections.length}</p>
              <p className="text-cream/50 text-sm">Разделов</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Edit className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="font-serif text-2xl text-cream">{textSections.reduce((acc, s) => acc + s.texts.length, 0)}</p>
              <p className="text-cream/50 text-sm">Текстов</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <span className="text-purple-400 text-sm font-bold">{selectedLang.toUpperCase()}</span>
            </div>
            <div>
              <p className="font-serif text-lg text-cream">{languages.find(l => l.code === selectedLang)?.name}</p>
              <p className="text-cream/50 text-sm">Выбранный язык</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
          <Input
            type="text"
            placeholder="Поиск текстов..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-charcoal-light/50 border-white/10 text-cream"
          />
        </div>
        <div className="flex gap-2">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => setSelectedLang(lang.code)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedLang === lang.code
                  ? "bg-gold text-charcoal"
                  : "bg-charcoal-light/50 text-cream/60 hover:text-cream border border-white/10"
              }`}
            >
              {lang.flag}
            </button>
          ))}
        </div>
      </div>

      {/* Text Sections */}
      <div className="space-y-4">
        {filteredSections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="glass-card overflow-hidden"
          >
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                {expandedSections.includes(section.id) ? (
                  <ChevronDown className="w-5 h-5 text-gold" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-cream/40" />
                )}
                <span className="font-medium text-cream">{section.name}</span>
                <span className="text-cream/40 text-sm">({section.texts.length} текстов)</span>
              </div>
            </button>

            {/* Section Content */}
            {expandedSections.includes(section.id) && (
              <div className="border-t border-white/10">
                {section.texts.map((text) => (
                  <div
                    key={text.key}
                    className="p-4 border-b border-white/5 last:border-b-0 hover:bg-white/5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-cream/40 text-xs font-mono mb-2">{text.key}</p>
                        {editingKey === text.key ? (
                          <div className="space-y-2">
                            <Textarea
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                              className="bg-charcoal-light/50 border-white/10 text-cream min-h-[80px]"
                              autoFocus
                            />
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                onClick={() => saveEdit(text.key)}
                                className="bg-emerald-500 hover:bg-emerald-600 text-white"
                              >
                                <Check className="w-4 h-4 mr-1" />
                                Сохранить
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={cancelEdit}
                                className="border-white/10 text-cream/60"
                              >
                                <X className="w-4 h-4 mr-1" />
                                Отмена
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <p className="text-cream">
                            {selectedLang === "ru" ? text.ru : text.en}
                            {savedKeys.includes(text.key) && (
                              <span className="ml-2 text-emerald-400 text-sm">Сохранено!</span>
                            )}
                          </p>
                        )}
                      </div>
                      {editingKey !== text.key && (
                        <button
                          onClick={() => startEdit(text.key, selectedLang === "ru" ? text.ru : text.en)}
                          className="p-2 text-cream/40 hover:text-gold hover:bg-gold/10 rounded-lg transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Help text */}
      <div className="glass-card p-4 border-l-4 border-gold">
        <p className="text-cream/70 text-sm">
          <strong className="text-gold">Подсказка:</strong> Изменения текстов применяются после сохранения. 
          Для больших изменений рекомендуется проверить результат на превью сайта.
        </p>
      </div>
    </div>
  )
}
