"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Plus, 
  Search, 
  Eye,
  Edit,
  Trash2,
  Users,
  DollarSign,
  BookOpen,
  Video,
  Clock,
  Star,
  ChevronDown,
  X,
  Upload,
  Save,
  GripVertical
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { courses, miniCourses, Course } from "@/data/courses"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const allCourses = [...courses, ...miniCourses]

export default function AdminCoursesPage() {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<"all" | "main" | "mini">("all")
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [editingCourse, setEditingCourse] = useState<Course | null>(null)
  const [activeTab, setActiveTab] = useState<"basic" | "content" | "pricing">("basic")

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === "all" || course.category === filter
    return matchesSearch && matchesFilter
  })

  const totalLessons = allCourses.reduce((acc, c) => acc + c.modules.reduce((a, m) => a + m.lessons.length, 0), 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl text-cream">Курсы</h1>
          <p className="text-cream/60">Управление курсами и программами обучения</p>
        </div>
        <Button 
          onClick={() => setIsCreateOpen(true)}
          className="bg-gold text-charcoal hover:bg-gold-light"
        >
          <Plus className="w-4 h-4 mr-2" />
          Создать курс
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="font-serif text-2xl text-cream">{allCourses.length}</p>
              <p className="text-cream/50 text-sm">Всего курсов</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <Video className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="font-serif text-2xl text-cream">{totalLessons}</p>
              <p className="text-cream/50 text-sm">Уроков</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="font-serif text-2xl text-cream">1,234</p>
              <p className="text-cream/50 text-sm">Студентов</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="font-serif text-2xl text-cream">$24K</p>
              <p className="text-cream/50 text-sm">Доход</p>
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
            placeholder="Поиск курсов..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-charcoal-light/50 border-white/10 text-cream"
          />
        </div>
        <div className="flex gap-2">
          {(["all", "main", "mini"] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === f
                  ? "bg-gold text-charcoal"
                  : "bg-charcoal-light/50 text-cream/60 hover:text-cream border border-white/10"
              }`}
            >
              {f === "all" ? "Все" : f === "main" ? "Основные" : "Мини"}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="glass-card overflow-hidden group"
          >
            {/* Cover Image */}
            <div className="relative h-40 bg-charcoal-light overflow-hidden">
              <img
                src={course.coverImage || "/placeholder.svg"}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent" />
              
              {/* Status Badge */}
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  course.status === "available" 
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : course.status === "coming_soon"
                    ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                    : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                }`}>
                  {course.status === "available" ? "Опубликован" : course.status === "coming_soon" ? "Скоро" : "Архив"}
                </span>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 rounded-full text-xs bg-charcoal/80 text-cream/70">
                  {course.category === "main" ? "Основной" : "Мини"}
                </span>
              </div>

              {/* Featured Star */}
              {course.featured && (
                <div className="absolute bottom-3 left-3">
                  <Star className="w-5 h-5 text-gold fill-gold" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-serif text-lg text-cream mb-2 line-clamp-2">{course.title}</h3>
              <p className="text-cream/50 text-sm mb-4 line-clamp-2">{course.shortDescription}</p>
              
              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-cream/40 mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Video className="w-4 h-4" />
                  {course.modules.reduce((acc, m) => acc + m.lessons.length, 0)} уроков
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-white/10 text-cream/70 hover:bg-white/5"
                  onClick={() => setEditingCourse(course)}
                >
                  <Edit className="w-4 h-4 mr-1" />
                  Редактировать
                </Button>
                <button className="p-2 text-cream/40 hover:text-cream hover:bg-white/5 rounded-lg">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-cream/40 hover:text-red-400 hover:bg-red-500/10 rounded-lg">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Create/Edit Course Dialog */}
      <Dialog open={isCreateOpen || !!editingCourse} onOpenChange={(open) => {
        if (!open) {
          setIsCreateOpen(false)
          setEditingCourse(null)
        }
      }}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden bg-charcoal border-white/10">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-cream">
              {editingCourse ? "Редактирование курса" : "Создание курса"}
            </DialogTitle>
          </DialogHeader>

          {/* Tabs */}
          <div className="flex gap-1 border-b border-white/10 -mx-6 px-6">
            {(["basic", "content", "pricing"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm font-medium transition-colors relative ${
                  activeTab === tab ? "text-gold" : "text-cream/60 hover:text-cream"
                }`}
              >
                {tab === "basic" ? "Основное" : tab === "content" ? "Контент" : "Цены и доступ"}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[60vh] -mx-6 px-6 py-4">
            {activeTab === "basic" && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-cream">Название курса</Label>
                    <Input
                      defaultValue={editingCourse?.title || ""}
                      placeholder="Введите название"
                      className="bg-charcoal-light/50 border-white/10 text-cream"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-cream">Slug (URL)</Label>
                    <Input
                      defaultValue={editingCourse?.slug || ""}
                      placeholder="course-name"
                      className="bg-charcoal-light/50 border-white/10 text-cream"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-cream">Короткое описание</Label>
                  <Textarea
                    defaultValue={editingCourse?.shortDescription || ""}
                    placeholder="Краткое описание курса для карточек"
                    className="bg-charcoal-light/50 border-white/10 text-cream min-h-[80px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-cream">Полное описание</Label>
                  <Textarea
                    defaultValue={editingCourse?.fullDescription || ""}
                    placeholder="Подробное описание курса"
                    className="bg-charcoal-light/50 border-white/10 text-cream min-h-[150px]"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label className="text-cream">Категория</Label>
                    <Select defaultValue={editingCourse?.category || "main"}>
                      <SelectTrigger className="bg-charcoal-light/50 border-white/10 text-cream">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="main">Основной курс</SelectItem>
                        <SelectItem value="mini">Мини-курс</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-cream">Уровень</Label>
                    <Select defaultValue={editingCourse?.level || "beginner"}>
                      <SelectTrigger className="bg-charcoal-light/50 border-white/10 text-cream">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Начинающий</SelectItem>
                        <SelectItem value="intermediate">Средний</SelectItem>
                        <SelectItem value="advanced">Продвинутый</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-cream">Статус</Label>
                    <Select defaultValue={editingCourse?.status || "available"}>
                      <SelectTrigger className="bg-charcoal-light/50 border-white/10 text-cream">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="available">Опубликован</SelectItem>
                        <SelectItem value="coming_soon">Скоро</SelectItem>
                        <SelectItem value="archived">Архив</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-cream">Формат</Label>
                    <Input
                      defaultValue={editingCourse?.format || ""}
                      placeholder="Видео-уроки + практики"
                      className="bg-charcoal-light/50 border-white/10 text-cream"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-cream">Длительность</Label>
                    <Input
                      defaultValue={editingCourse?.duration || ""}
                      placeholder="4 недели"
                      className="bg-charcoal-light/50 border-white/10 text-cream"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-cream">Обложка курса</Label>
                  <div className="border-2 border-dashed border-white/10 rounded-lg p-8 text-center hover:border-gold/50 transition-colors cursor-pointer">
                    <Upload className="w-10 h-10 text-cream/30 mx-auto mb-3" />
                    <p className="text-cream/60 text-sm">Нажмите для загрузки или перетащите файл</p>
                    <p className="text-cream/40 text-xs mt-1">PNG, JPG до 5MB</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-charcoal-light/30 border border-white/5">
                  <div>
                    <p className="text-cream font-medium">Показывать в рекомендуемых</p>
                    <p className="text-cream/50 text-sm">Курс будет выделен на главной странице</p>
                  </div>
                  <Switch defaultChecked={editingCourse?.featured || false} />
                </div>
              </div>
            )}

            {activeTab === "content" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-cream">Модули и уроки</h3>
                  <Button size="sm" className="bg-gold/10 text-gold hover:bg-gold/20">
                    <Plus className="w-4 h-4 mr-1" />
                    Добавить модуль
                  </Button>
                </div>

                {(editingCourse?.modules || []).map((module, moduleIndex) => (
                  <div key={module.id} className="glass-card p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <GripVertical className="w-5 h-5 text-cream/30 cursor-grab" />
                      <Input
                        defaultValue={module.title}
                        className="bg-charcoal-light/50 border-white/10 text-cream flex-1"
                      />
                      <button className="p-2 text-cream/40 hover:text-red-400">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-2 ml-8">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div key={lesson.id} className="flex items-center gap-3 p-3 rounded-lg bg-charcoal-light/30">
                          <GripVertical className="w-4 h-4 text-cream/20 cursor-grab" />
                          <span className="text-cream/40 text-sm w-6">{lessonIndex + 1}.</span>
                          <Input
                            defaultValue={lesson.title}
                            className="bg-transparent border-white/10 text-cream text-sm flex-1 h-8"
                          />
                          <span className="text-cream/40 text-xs">{lesson.duration}</span>
                          <button className="p-1 text-cream/40 hover:text-red-400">
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                      <button className="w-full p-2 border border-dashed border-white/10 rounded-lg text-cream/40 text-sm hover:border-gold/30 hover:text-gold">
                        + Добавить урок
                      </button>
                    </div>
                  </div>
                ))}

                {(!editingCourse?.modules || editingCourse.modules.length === 0) && (
                  <div className="text-center py-12">
                    <BookOpen className="w-12 h-12 text-cream/20 mx-auto mb-3" />
                    <p className="text-cream/50">Пока нет модулей</p>
                    <p className="text-cream/30 text-sm">Добавьте первый модуль для структурирования курса</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === "pricing" && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-cream">Цена (₽)</Label>
                    <Input
                      type="number"
                      placeholder="15000"
                      className="bg-charcoal-light/50 border-white/10 text-cream"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-cream">Скидка (%)</Label>
                    <Input
                      type="number"
                      placeholder="0"
                      className="bg-charcoal-light/50 border-white/10 text-cream"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-cream">Уровень доступа</Label>
                  <Select defaultValue="premium">
                    <SelectTrigger className="bg-charcoal-light/50 border-white/10 text-cream">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="free">Бесплатный</SelectItem>
                      <SelectItem value="basic">Базовый</SelectItem>
                      <SelectItem value="premium">Премиум</SelectItem>
                      <SelectItem value="vip">VIP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4 pt-4">
                  <h4 className="text-cream font-medium">Преимущества курса</h4>
                  {(editingCourse?.benefits || ["", "", ""]).map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input
                        defaultValue={benefit}
                        placeholder={`Преимущество ${index + 1}`}
                        className="bg-charcoal-light/50 border-white/10 text-cream"
                      />
                      <button className="p-2 text-cream/40 hover:text-red-400">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  <button className="w-full p-3 border border-dashed border-white/10 rounded-lg text-cream/40 text-sm hover:border-gold/30 hover:text-gold">
                    + Добавить преимущество
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10 -mx-6 px-6">
            <Button
              variant="outline"
              onClick={() => {
                setIsCreateOpen(false)
                setEditingCourse(null)
              }}
              className="border-white/10 text-cream/60"
            >
              Отмена
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" className="border-white/10 text-cream/70">
                Сохранить как черновик
              </Button>
              <Button className="bg-gold text-charcoal hover:bg-gold-light">
                <Save className="w-4 h-4 mr-2" />
                {editingCourse ? "Сохранить изменения" : "Создать курс"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
